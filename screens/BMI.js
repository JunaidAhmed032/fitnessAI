import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [category, setCategory] = useState('');
  const navigation = useNavigation();

  let [fontsloaded] = useFonts({
    orbitron: require('./assets/fonts/Orbitron.ttf'),
    orbitron_bold: require('./assets/fonts/static/Orbitron-Bold.ttf')
  });
  
  if (!fontsloaded) {
    return <AppLoading/>;
  }
  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      const bmiCategory = getCategory(bmiValue);
      setBMI(bmiValue.toFixed(2));
      setCategory(bmiCategory);
    }
  };

  const getCategory = (bmiValue) => {
    if (bmiValue < 18.5) {
      return 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      return 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  const handleDietSuggestion = () => {
    if (category === 'Underweight') {
      navigation.navigate('WeightGain');
    } else if (category === 'Normal weight') {
      navigation.navigate('Shreaded');
    } else if (category === 'Overweight') {
      navigation.navigate('Obese');
    }
  };

  return (
    <ImageBackground style={styles.homecontainer} source={require("./assets/liquid.jpg")}>
      <View style={styles.container}>
        <Text style={styles.title}>BMI Calculator</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Weight (kg)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={weight}
            onChangeText={(text) => setWeight(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Height (cm)</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={height}
            onChangeText={(text) => setHeight(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>
        {bmi ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>BMI: {bmi}</Text>
            <Text style={styles.resultText}>Category: {category}</Text>
          </View>
        ) : null}
        {bmi ? (
          <TouchableOpacity style={styles.button} onPress={handleDietSuggestion} disabled={!category}>
            <Text style={styles.buttonText}>Suggest Diet</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={{ flex: 1 }}>
        <LottieView
          autoPlay
          style={styles.loginlottie}
          source={require('./assets/lottie/walk2.json')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "orbitron_bold",
    marginTop : 30
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 5,
    fontFamily: "orbitron"
  },
  input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#FFFF",
    fontFamily: "orbitron",
    borderRadius: 15
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
  },
  homecontainer: {
    flex: 1,
    backgroundColor: "#538FFB"
  },
  resultText: {
    color: "#FFFFFF",
    fontFamily: "orbitron_bold",
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});

export default BMICalculator;
