import React from 'react';
import {ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import WebView from 'react-native-webview';




function WeightGain({navigation}) {
    return (
        <ImageBackground style ={styles.homecontainer}
        source={require("./assets/liquid.jpg")}
        >
            <WebView 
                source={{ uri: 'https://www.bodybuilding.com/content/weight-gain-meal-plan-sample-week-1.html' }}
                style={{ flex: 1 }}
                
            />
 
        </ImageBackground>
    );
}

export default WeightGain;