import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bgwhite:{
    backgroundColor:'white'
  },
  styleImageBackground: {
    width: '100%',
    marginBottom: 10,
  },
  container: {alignItems: 'center', paddingHorizontal: 26},
  titleText: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
    fontSize: 34,
  },
  subtitle: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 20,
    marginBottom: 16,
  },
  wrapInput: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  RowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 26,
  },
  FogetpassText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#007537',
    textAlign: 'center',
    marginStart: 3,
  },
  linearGradient: {
    marginTop: 22,
    width: 362,
    marginHorizontal: 26,
    marginEnd: 26,
    height: 55,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 14,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins-bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  RowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 18,
  },
  marginRight24: {
    marginRight: 24,
  },
  Textsize14: {
    color: 'black',
    letterSpacing: 0.3,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  marginHorizontal20: {
    marginHorizontal: 20,
   
  },
  fontSize26: {
    fontSize: 26,
    color: 'black',
    marginVertical: 20,
    fontFamily: 'Poppins-Medium',
  },
  textDecorationLine:{
    fontFamily: 'Poppins-Medium',
    textDecorationLine: 'underline',
    fontSize:20,
    color:'black',
    textAlign:'right',
    marginVertical:10,
    marginEnd:20
  },
  width100percent:{
    width:'100%',
  },
  eyeIconContainer:{
    position:'absolute',
    top:15,
    right:20
},
errorText:{
  fontFamily:'Poppins-Medium',
  fontSize:13,
  color:'#CE0000'
}
});
