import { Dimensions, StyleSheet } from "react-native";
import orbitron from './assets/fonts/Orbitron.ttf'
import orbitron_bold from './assets/fonts/static/Orbitron-Bold.ttf'


const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    monitor:{
        justifyContent: 'center',
        flex: 1/2,
    },
    pages: {
        position: 'absolute',
        flex: 1,
        left: 10,
        right: 10,
        bottom: 10,
        top: 10,
        backgroundColor: "#51E1ED"
    },
    homecontainer: {
        flex: 1,
        backgroundColor: "#538FFB"
    },
    main: {
        justifyContent: 'flex-end',
        flex: 1,
    },
    image: {
        flex: 1,
        height: height + 100,
        width: width

    },
    logo: {
        height: 150,
        width: 200,
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    button: {
       
        marginLeft: "auto",
        marginRight: "auto",
        height: 40,
        width: 250,

        borderRadius: 15,

        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainbutton: {
       
        marginLeft: "auto",
        marginRight: "auto",
        height: 40,
        width: 250,

        borderRadius: 15,

        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // pedometer styles
    
    textDesign: {
        backgroundColor: "rgba(0, 147, 135,0.5)",
        height: 50,
        width: "85%",
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 20,
        overflow: "hidden",
        fontSize: 25,
        color: "white",
        fontWeight: "bold",
        fontFamily: "Papyrus",
    },
    pedoheader:{
        flex : 1/4,
        justifyContent : 'center',
        alignItems : 'center'
    },
    pedotext:{
        fontFamily : "orbitron_bold",
        color : "#FFFFFF",
        fontSize : 15,
        paddingVertical: 15,
        // marginLeft : 'auto',
        // marginRight : 'auto'
    },
    counterview:{
        position : 'relative',
        flex:2/4,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 15,
    },

    //======================================
    // BMI Styling:
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        //fontWeight: 'bold',
        marginBottom: 20,
        fontFamily : "orbitron_bold"
      },
      inputContainer: {
        marginBottom: 10,
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
        fontFamily : "orbitron"
      },
      input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor : "#FFFF",
        fontFamily : "orbitron"
      },
      button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        marginVertical : 20
      },
      buttonText: {
        color: 'white',},
        homecontainer: {
          flex: 1,
          backgroundColor: "#538FFB"
      },
      resultText:{
        fontFamily : "orbitron_bold",
        fontSize : 20,
        backgroundColor : "#FFFFFF"
      },
    //=====================================
    buttontext: {
        fontFamily: 'orbitron',
        fontSize: 20,
        fontWeight: '600',
        color: '#FFFF',
        letterSpacing: 3
    },

    bottomContainer: {
        justifyContent: 'center',
        height: height / 3,
    },

    textinput: {
        fontFamily: 'orbitron_bold',
        letterSpacing: 2.5,
        backgroundColor: '#FFFFFF',
        color: "#DB0B5F",
        height: 50,
        borderWidth: 1,
        borderColor: '#DB0B5F',
        marginHorizontal: 20,
        marginVertical: 10,
        //borderRadius: 25,
        paddingLeft: 10,

    },


    inputformcontainer: {
        backgroundColor: '#FFFF',
        position: "relative",
        justifyContent: "center",
        flex: 1,
        paddingVertical: 50
    },
    TopView: {
        marginBottom: 20
    },
    MiddleView: {
        marginTop: 30,
        flexDirection: 'column',
        marginBottom: 20

    },
    BottomView: {
        marginTop: 20,
        marginBottom: 0
    },
    // lottie styles below here
    lottie:
    {
        width: 300,
        height: 300,
        alignContent: 'center',
        justifyContent: 'center',
        top: 50
    },
    loginlottie: {
        width: 200,
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    registerlottie: {
        width: 250,
        height: 250,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
    },
    successlottie: {
        height: 150,
        width: 150,
        alignSelf: "center",
        justifyContent: "center",
    },
    sc:{
        flex : 1,
        justifyContent : 'flex-end',
        bottom : 45
    },
    webview:{
        flex : 1,
        marginLeft: 30,
        marginRight : 30,
        marginTop : 30,
        marginBottom : 30,
        justifyContent : 'center',
        alignItems: 'center'
    },
    mainbutton1: {
       
        marginLeft: "auto",
        marginRight: "auto",
        height: 40,
        width: 250,

        borderRadius: 15,

        marginBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom : 150
    },

});

export default styles;