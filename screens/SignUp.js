import react, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View, Dimensions, TextInput, Pressable, ImageBackground } from 'react-native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { auth } from "../firebase";
import LottieView from 'lottie-react-native';


const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  // lottie code here:
  const successAnimation = useRef(null)
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        navigation.navigate("LOGIN")
        successAnimation.current.play();
      })
      .catch(error => alert(error.message))
  }
  const { height, width } = Dimensions.get('window');
  return (
    <ImageBackground
      source={require("./assets/black-bg.jpg")}
      style={styles.image}>
      <View style={styles.TopView}>
        <Image source={require("./assets/logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.MiddleView}>
        <TextInput placeholder="Email"
          value={email}
          placeholderTextColor="#242B2E"
          style={styles.textinput}
          onChangeText={text => setEmail(text)}
        />
        <TextInput placeholder="Full Name"
          value={name}
          placeholderTextColor="#242B2E"
          style={styles.textinput}
          onChangeText={text => setName(text)}
        />
        <TextInput placeholder="Password"
          value={password}
          placeholderTextColor="#242B2E"
          style={styles.textinput}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.BottomView}>
        <Pressable
          onPress={handleSignUp}
        >
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#DB0B5F', '#6F00ED', '#DB0B5F']}
            style={styles.mainbutton}
          >

            <Text style={styles.buttontext} > Sign Up </Text>

          </LinearGradient>
        </Pressable>
      </View>
      <LottieView
        autoPlay
        style={styles.registerlottie}
        source={require('./assets/lottie/register.json')}
      />
      <LottieView
        ref={successAnimation}
        source={require('./assets/lottie/success.json')}
        autoPlay={false}
        loop={false}
        style={{ width: 200, height: 200 }}
      />
    </ImageBackground>

  );
}
export default SignUp;