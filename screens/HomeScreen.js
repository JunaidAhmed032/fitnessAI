import React from 'react';
import react, { useEffect, useState, useRef } from "react";
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BMI from "./BMI"
import Profile from "./Profile";
import Reports from "./Reports";
import StepCounter from './StepCounter'
import Main from './Main'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Monitoring from './Monitoring';
import WeightGain from './WeightGain';
import Shreaded from './Shreaded';
import physique_recognition from './physique_recognition';
import { Pedometer } from 'expo-sensors';




function HomeScreen({ navigation }) {
    const Stack = createStackNavigator();
    const BMICalculatorStack = () => {
        return (
          <Stack.Navigator>
            <Stack.Screen name="BMICalculator" component={BMI} options={{headerShown : false}}/>
            <Stack.Screen name="Obese" component={Reports} />
            <Stack.Screen name="WeightGain" component={WeightGain} />
            <Stack.Screen name="Shreaded" component={Shreaded} />
          </Stack.Navigator>
        );
      };
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator

                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        height: 60,
                        backgroundColor: "#CAD5E2",
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        right: 16,
                        borderRadius: 16,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let filePath;

                        switch (route.name) {
                            case "PROFILE":
                                iconName = focused ? "person-outline" : "person"
                                filePath = require('./assets/lottie/success.json');
                            case "REPORTS":
                                iconName = focused ? "bar-chart-outline" : "bar-chart-sharp"
                                filePath = require('./assets/lottie/success.json');
                                break;
                            case "STEPCOUNTER":
                                iconName = focused ? "person-outline" : "person"
                                filePath = require('./assets/lottie/success.json');
                                break;
                            case "HOME":
                                iconName = focused ? "person-outline" : "person"
                                filePath = require('./assets/lottie/success.json');
                                break;
                            case "MONITOR":
                                iconName = focused ? "videocam-outline" : "videocam-sharp"
                                filePath = require('./assets/lottie/success.json');
                                break;
                            case "BMICalculator":
                                iconName = focused ? "person-outline" : "person"
                                filePath = require('./assets/lottie/success.json');
                                break;
                            case "SC":
                                iconName = focused ? "speedometer-outline" : "speedometer-sharp"
                                filePath = require('./assets/lottie/success.json');
                                break;
                        }
                        return <Ionicons name={iconName} size={35} color={"black"} />;
                        // return <LottieView source = {filePath} autoPlay = {focused} />
                    },
                })}
            >
                <Tab.Screen name="BMICalculator" component={BMICalculatorStack} />
                <Tab.Screen name="PROFILE" component={Profile} />
                <Tab.Screen name="MAIN" component={Main}  />
                <Tab.Screen name="MONITOR" component={Monitoring} />
                <Tab.Screen name="Steps" component={StepCounter} />
                
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default HomeScreen;