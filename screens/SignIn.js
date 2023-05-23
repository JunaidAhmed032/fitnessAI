import react, { useEffect, useState, useRef } from "react";
import { Image, StyleSheet, Text, View, Dimensions, TextInput, Pressable, ImageBackground } from 'react-native';
import styles from './styles';
import { auth } from "../firebase";
import { LinearGradient } from 'expo-linear-gradient';
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import LottieView from 'lottie-react-native';


const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') // for getting data from fields


  // sign in logic below

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('logged in with:', user.email);
        navigation.navigate("HOME"); // Move the navigation inside the 'then' block
      })
      .catch(error => alert(error.message));
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
      }
    });
    return unsubscribe;
  }, []);
  return (
    <ImageBackground
      source={require("./assets/black-bg.jpg")}
      style={styles.image}
    >
      <View style={styles.TopView}>
        <Image source={require("./assets/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.MiddleView}>
        <TextInput placeholder="Email"
          value={email}
          placeholderTextColor="#242B2E"
          onChangeText={text => setEmail(text)}
          style={styles.textinput} />
        <TextInput placeholder="Password"
          placeholderTextColor="#242B2E"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          style={styles.textinput} />
      </View>
      <View style={styles.BottomView}>
        <Pressable
          onPress={handleSignIn}
        >
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#DB0B5F', '#6F00ED', '#DB0B5F']}
            style={styles.mainbutton}
          >
            <Text style={styles.buttontext} > Sign In </Text>
          </LinearGradient>
        </Pressable>
      </View>
      <LottieView
        autoPlay
        style={styles.loginlottie}
        source={require('./assets/lottie/login.json')}
      />
    </ImageBackground>
  );
}
export default SignIn;