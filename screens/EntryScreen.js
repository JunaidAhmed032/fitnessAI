import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Dimensions, TextInput, Pressable, BackHandler, ImageBackground, Button } from 'react-native';
import styles from './styles';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';



export default function App({ navigation }) {
  let [fontsloaded] = useFonts({
    orbitron: require('./assets/fonts/Orbitron.ttf'),
    orbitron_bold: require('./assets/fonts/static/Orbitron-Bold.ttf')
  })
  if (!fontsloaded) {
    return <AppLoading />
  }
  const { height, width } = Dimensions.get('window');
  const entry = ({ navigation })
  return (
    <ImageBackground source={require("./assets/black-bg.jpg")}
      style={styles.image}>
      <Image source={require("./assets/logo.png")}
        style={styles.logo}
      />
      <LottieView
        autoPlay
        style={styles.lottie}
        source={require('./assets/lottie/robot.json')}
      />

      <View style={styles.main} >
        <Pressable
          onPress={() => navigation.navigate("LOGIN")}
        >
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#DB0B5F', '#6F00ED', '#DB0B5F']}
            style={styles.mainbutton}
          >
            <Text style={styles.buttontext}> Sign In </Text>
          </LinearGradient>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("SIGNUP")}
        >
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#DB0B5F', '#6F00ED', '#DB0B5F']}
            style={styles.mainbutton}
          >

            <Text style={styles.buttontext} > Sign Up </Text>

          </LinearGradient>
        </Pressable>


      </View>
    </ImageBackground>


  );
}
