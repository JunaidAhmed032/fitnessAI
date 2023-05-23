import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles';

function Profile(props) {
    return (
       <ImageBackground style ={styles.homecontainer}
       source={require("./assets/liquid.jpg")}
       >


       </ImageBackground>
    );
}

export default Profile;