import React from 'react';
import {ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import WebView from 'react-native-webview';

function Shreaded({navigation}) {
    return (
        <ImageBackground style ={styles.homecontainer}
        source={require("./assets/liquid.jpg")}
        >
            <WebView 
                source={{ uri: 'https://www.muscleandfitness.com/nutrition/healthy-eating/4-week-cutting-meal-plan-get-shredded/' }}
                style={{ flex: 1}}
                
            />
        </ImageBackground>
    );
}

export default Shreaded;