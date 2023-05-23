import React from 'react';
import {ImageBackground, Text, View } from 'react-native';
import styles from './styles';
import WebView from 'react-native-webview';

function Reports({navigation}) {
    return (
        <ImageBackground style ={styles.homecontainer}
        source={require("./assets/liquid.jpg")}
        >
            <WebView 
                source={{ uri: 'https://www.verywellfit.com/easy-weight-loss-meal-plans-3495471' }}
                style={{ flex: 1 }}
                
            />
 
        </ImageBackground>
    );
}

export default Reports;