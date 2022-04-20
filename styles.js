import { StyleSheet } from 'react-native';
import { DrugCard } from '../AppStyle';

// const stylesC = StyleSheet.create({
//   container: DrugCard.container,
//   photo: DrugCard.photo,
//   title: DrugCard.title,
//   category: DrugCard.category
// });

const styles = StyleSheet.create({
  drugContainer:{
    container: DrugCard.container,
    photo: DrugCard.photo,
    title: DrugCard.title,
    category: DrugCard.category
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
   // width,
   // height,
    resizeMode: 'contain',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(13, 13, 23, 0.9)',
    ...StyleSheet.absoluteFillObject,
  },
  formContainer: {
    width: '80%',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 200,
    marginBottom: 30,
    // marginTop:
  },
  button: {
    width: '60%',
    backgroundColor: '#44f804',
    alignItems: 'center',
    padding: 20,
    marginTop: 50,
  },
  buttonText: {
    fontSize: 24,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: 'RobotoBold',
    fontWeight: '700',
    color: 'white',
  },
  green: {
    fontSize: 50,
    fontFamily: 'RobotoBold',
    fontWeight: '700',
    color: '#44f804',
  },
  orange: {
    fontSize: 50,
    fontFamily: 'RobotoBold',
    fontWeight: '700',
    color: '#f8a814',
  },
});


export default styles;
