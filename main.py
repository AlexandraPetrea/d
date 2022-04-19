
import numpy as np
import matplotlib
matplotlib.use('agg')
from sklearn.metrics import f1_score
from sklearn.metrics import recall_score
from sklearn.metrics import precision_score
import matplotlib
from keras.layers.core import Dropout, Activation
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import roc_curve, auc
from sklearn.metrics import precision_recall_curve
from tensorflow.keras import optimizers
from keras.models import Sequential
from keras.layers import Dense
from keras.utils import np_utils
#--------------------------------------------------
#NDD Methods
def prepare_data(filepath):
    drug_fea = np.loadtxt(filepath,dtype=float,delimiter=",")
    interaction = np.loadtxt("DS1/a3.csv",dtype=int,delimiter=",")
    train = []
    label = []
    tmp_fea=[]
    drug_fea_tmp = []
    for i in range(0, interaction.shape[0]):
        for j in range(0, interaction.shape[1]):
            label.append(interaction[i,j])
            drug_fea_tmp = list(drug_fea[i])
            tmp_fea = (drug_fea_tmp,drug_fea_tmp)
            train.append(tmp_fea)
    return np.array(train), label
#--------------------------------------------------------------
def calculate_performace(test_num, pred_y,  labels):
    tp =0
    fp = 0
    tn = 0
    fn = 0
    for index in range(test_num):
        if labels[index] ==1:
            if labels[index] == pred_y[index]:
                tp = tp +1
            else:
                fn = fn + 1
        else:
            if labels[index] == pred_y[index]:
                tn = tn +1
            else:
                fp = fp + 1 
    acc = float(tp + tn)/test_num
    if tp == 0 and fp == 0:
        precision = 0
        MCC = 0
        sensitivity = float(tp)/ (tp+fn)
        specificity = float(tn)/(tn + fp)
    else:
        precision = float(tp)/(tp+ fp)
        sensitivity = float(tp)/ (tp+fn)
        specificity = float(tn)/(tn + fp)
       # MCC = float(tp*tn-fp*fn)/(np.sqrt((tp+fp)*(tp+fn)*(tn+fp)*(tn+fn)))
    return acc, precision, sensitivity, specificity
#-----------------------------------------------------
def transfer_array_format(data):
    formated_matrix1 = []
    formated_matrix2 = []
    for val in data:
        formated_matrix1.append(val[0])
        formated_matrix2.append(val[1])
    return np.array(formated_matrix1), np.array(formated_matrix2)
#-------------------------------------------------------
def preprocess_labels(labels, encoder=None, categorical=True):
    if not encoder:
        encoder = LabelEncoder()
        encoder.fit(labels)
        y = encoder.transform(labels).astype(np.int32)
    if categorical:
        y = np_utils.to_categorical(y)
        print(y)
    return y, encoder
#------------------------------------------------------
def preprocess_names(labels, encoder=None, categorical=True):
    if not encoder:
        encoder = LabelEncoder()
        encoder.fit(labels)
    if categorical:
        labels = np_utils.to_categorical(labels)
    return labels, encoder
#------------------------------------------------------
def NDD(input_dim): 
    model = Sequential()
    model.add(Dense(400, input_dim=input_dim))
    model.add(Activation('relu'))
    model.add(Dropout(0.5))
    model.add(Dense(300, input_dim=9))
    model.add(Activation('relu'))
    model.add(Dropout(0.5))
    model.add(Dense(2, input_dim=9))
    model.add(Activation('sigmoid'))
    sgd = optimizers.SGD(lr=0.01, decay=1e-6, momentum=0.9, nesterov=True)
    model.compile(loss='binary_crossentropy', optimizer=sgd)                  
    return model

#---------------------------------------------------------------------------------------------------
def DeepMDA(aux):
    probaTotal = 0
    ae_y_pred_probTotal = 0
    for filepath in range(0, len(aux)):
        X, labels = prepare_data(aux[filepath])
        X_data1, X_data2 = transfer_array_format(X) 
        X=0
        y, encoder = preprocess_labels(labels)# labels labels_new
        X= np.concatenate((X_data1, X_data2), axis = 1)
        # print("########## ", X)
        num = np.arange(len(y))
        np.random.shuffle(num)
        X_data1 = X_data1[num]
        # X_data2 = X_data2[num]
        y = y[num]
        num_cross_val = 2
        all_performance_DNN = []
        for fold in range(num_cross_val):
            train_label = np.array([x for i, x in enumerate(y) if i % num_cross_val != fold])
            test_label = np.array([x for i, x in enumerate(y) if i % num_cross_val == fold])
            train1 = np.array([x for i, x in enumerate(X_data1) if i % num_cross_val != fold])
            test1 = np.array([x for i, x in enumerate(X_data1) if i % num_cross_val == fold])
            
            zerotest=0
            nozerotest=0
            zerotrain=0
            nozerotrain=0
            real_labels = []
            for val in test_label:
                if val[0] == 1:
                    nozerotest=nozerotest+1
                    real_labels.append(1)
                else:
                    zerotest=zerotest+1
                    real_labels.append(0)
            train_label_new = []
            for val in train_label:
                if val[0] == 1:
                    zerotrain=zerotrain+1
                    train_label_new.append(1)
                else:
                    nozerotrain=nozerotrain+1
                    train_label_new.append(0)
        
            prefilter_train = np.concatenate((train1, train1), axis = 1)
            prefilter_test = np.concatenate((test1, test1), axis = 1)
            # print("152", prefilter_train.shape[1])
            model_DNN = NDD(prefilter_train.shape[1])
            train_label_new_forDNN = np.array([[0,1] if i == 1 else [1,0] for i in train_label_new])

            model_DNN.fit(prefilter_train,train_label_new_forDNN,batch_size=100,epochs=2,shuffle=True,validation_split=0)


        # proba = model_DNN.predict_classes(prefilter_test,batch_size=200,verbose=True
            probaA = model_DNN.predict(prefilter_test,batch_size=200,verbose=True)
            proba =np.argmax(probaA,axis=1)
            ae_y_pred_prob = model_DNN.predict(prefilter_test,batch_size=200,verbose=True)
        probaTotal += proba
        ae_y_pred_probTotal += ae_y_pred_prob 


        probaTotal = probaTotal/len(aux)
        ae_y_pred_probTotal = ae_y_pred_probTotal /len(aux)
        acc, precision, sensitivity, specificity = calculate_performace(len(real_labels), probaTotal,  real_labels)
        fpr, tpr, auc_thresholds = roc_curve(real_labels, ae_y_pred_probTotal[:,1])
        auc_score = auc(fpr, tpr)
        precision1, recall, pr_threshods = precision_recall_curve(real_labels, ae_y_pred_probTotal[:,1])
        aupr_score = auc(recall, precision1)
        all_F_measure=np.zeros(len(pr_threshods))
        for k in range(0,len(pr_threshods)):
           if (precision1[k]+precision1[k])>0:
              all_F_measure[k]=2*precision1[k]*recall[k]/(precision1[k]+recall[k])
           else:
              all_F_measure[k]=0

        max_index=all_F_measure.argmax()
        predicted_score=np.zeros(len(real_labels))
        threshold=pr_threshods[max_index]
        p=ae_y_pred_probTotal[:,1]
        predicted_score[p>threshold]=1
        f=f1_score(real_labels,predicted_score)
        recall=recall_score(real_labels, predicted_score)
        precision1=precision_score(real_labels, predicted_score)
        print("RAW DNN:",recall, precision1,'auc:', auc_score,'aupr', aupr_score,f)
        all_performance_DNN.append([recall,precision1,auc_score,aupr_score,f])
        #print("CEVA", all_F_measure)
    print('recall,precision,auc_score,aupr_score,fscore')
    print(np.mean(np.array(all_performance_DNN), axis=0))


aux = ["DS1/1Transporter.csv", "DS1/2Offside.csv", "DS1/3Target.csv", "DS1/4Pathway.csv", "DS1/5Sideeffect.csv", "DS1/6Indication.csv", "DS1/7Enzyme.csv", "DS1/8Chem.csv"]
DeepMDA(aux)
