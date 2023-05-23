import React from 'react';
import { Button, View , Linking, ImageBackground, Text} from 'react-native';
import WebView from 'react-native-webview';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import LottieView from 'lottie-react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

function Monitoring(props) {
    const handleOpenLink = () => {
        const url = 'https://6391-2404-3100-1001-e099-609b-27b-65dd-f4c7.ngrok-free.app'; // Replace with your desired URL
      
        Linking.openURL(url)
          .catch((error) => {
            console.error('Failed to open link:', error);
          });
      };
    return (
        <ImageBackground source={require('./assets/liquid.jpg')} style={styles.image}>
        <View style={styles.main}>
        <View style={{flex :0.8, marginTop : 20}}>
        <LottieView
        autoPlay
        style={styles.lottie}
        source={require('./assets/lottie/robot.json')}
      />
      </View>

        <Pressable
          onPress={handleOpenLink}
        >
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#FF9347', '#FED54A', '#FF9347']}
            style={styles.mainbutton1}
          >
            <Text style={styles.buttontext} > Monitor Exercise </Text>
          </LinearGradient>
          </Pressable>
        </View>
        </ImageBackground>
    );
}

export default Monitoring;