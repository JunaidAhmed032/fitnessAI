import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Keyboard } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressCircle from 'react-native-progress-circle';

const STEP_GOAL = 10000;
const WALKING_THRESHOLD = 1.18;

export default function App() {
  const [data, setData] = useState({});
  const [stepCount, setStepCount] = useState(0);
  const [stepGoal, setStepGoal] = useState(STEP_GOAL);
  const [lastReset, setLastReset] = useState(Date.now());
  const [distanceCovered, setDistanceCovered] = useState(0);
  const [caloriesBurnt, setCaloriesBurnt] = useState(0);

  useEffect(() => {
    (async () => {
      const storedStepCount = await AsyncStorage.getItem('stepCount');
      const storedLastReset = await AsyncStorage.getItem('lastReset');
      if (storedStepCount !== null) setStepCount(Number(storedStepCount));
      if (storedLastReset !== null) setLastReset(Number(storedLastReset));
    })();
    Accelerometer.addListener(_handleData);
    return () => {
      Accelerometer.removeAllListeners();
    };
  }, []);

  useEffect(() => {
    if (Date.now() - lastReset >= 24 * 60 * 60 * 1000) {
      resetStepCount();
    }
  }, [stepCount, lastReset]);

  useEffect(() => {
    AsyncStorage.setItem('stepCount', String(stepCount));
    AsyncStorage.setItem('lastReset', String(lastReset));
    calculateDistanceCovered();
    calculateCaloriesBurnt();
  }, [stepCount, lastReset]);

  const _handleData = (accelData) => {
    setData(accelData);
    const { x, y, z } = accelData;
    const acceleration = Math.sqrt(x * x + y * y + z * z);
    if (acceleration > WALKING_THRESHOLD) {
      setStepCount((prevCount) => prevCount + 1);
    }
  };

  const resetStepCount = () => {
    setStepCount(0);
    setLastReset(Date.now());
  };

  const handleSetGoal = () => {
    Keyboard.dismiss();
    setStepGoal(Number(stepGoal));
  };

  const calculateDistanceCovered = () => {
    const distance = (stepCount / STEP_GOAL) * 1800;
    const distanceInKm = distance / 1000;
    setDistanceCovered(distanceInKm.toFixed(4));
  };

  const calculateCaloriesBurnt = () => {
    const calories = distanceCovered * 60;
    setCaloriesBurnt(calories.toFixed(4));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Step Count: {stepCount}</Text>
      <ProgressCircle
        percent={(stepCount / stepGoal) * 100}
        radius={50}
        borderWidth={8}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff"
      >
        <Text style={styles.progressText}>{stepCount}</Text>
      </ProgressCircle>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>Step Goal:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={String(stepGoal)}
          onChangeText={(text) => setStepGoal(text)}
        />
        <Button title="Set Goal" onPress={handleSetGoal} />
      </View>
      <Text style={styles.text}>Distance Covered: {distanceCovered} km</Text>
      <Text style={styles.text}>Calories Burnt: {caloriesBurnt} cal</Text>
      <Button title="Reset Steps" onPress={resetStepCount} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
  },
  progressText: {
    fontSize: 24,
  },
  goalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  goalText: {
    fontSize: 18,
    marginRight: 8,
  },
  input: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    marginTop: 15,
    paddingHorizontal: 8,
  },
});
