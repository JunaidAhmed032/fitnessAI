import Svg, { Rect } from 'react-native-svg';
import * as tf from '@tensorflow/tfjs';
import { fetch, bundleResourceIO } from '@tensorflow/tfjs-react-native';
import * as jpeg from 'jpeg-js';
import React, { useRef, useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Pressable,
    Modal,
    Text,
    ActivityIndicator,
} from 'react-native';

import {
    getModel,
    convertBase64ToTensor,
    startPrediction,
} from '../helpers/tensor-helper.js';
import { cropPicture } from '../helpers/image-helper';

import { Camera } from 'expo-camera';

const RESULT_MAPPING = ['Healthy', 'OverWeight', 'UnderWeight'];
function physique_recognition({ navigation }) {
    const cameraRef = useRef();
    const [isProcessing, setIsProcessing] = useState(false);
    const [presentedShape, setPresentedShape] = useState('');
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);

    // State for handling camera permissions
    const [permission, setPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setPermission(status === 'granted');
        })();
    }, []);

    if (permission === null) {
        // Permission request pending
        return <View />;
    }

    if (permission === false) {
        // Permission denied
        return <Text>No access to camera</Text>;
    }

    const handleImageCapture = async () => {
        if (!permission) {
            return;
        }

        setIsProcessing(true);
        const imageData = await cameraRef.current.takePictureAsync({
            base64: true,
        });
        processImagePrediction(imageData);
    };

    const processImagePrediction = async (base64Image) => {
        const croppedData = await cropPicture(base64Image, 300);
        const model = await getModel();
        const tensor = await convertBase64ToTensor(croppedData.base64);

        const prediction = await startPrediction(model, tensor);

        const highestPrediction = prediction.indexOf(
            Math.max.apply(null, prediction),
        );
        setPresentedShape(RESULT_MAPPING[highestPrediction]);
    };

    const toggleCameraType = () => {
        setCameraType(
            cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    return (
        <View style={styles.container}>
            <Modal visible={isProcessing} transparent={true} animationType="slide">
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text>Your Physique falls in {presentedShape} category</Text>
                        {presentedShape === '' && <ActivityIndicator size="large" />}
                        <Pressable
                            style={styles.dismissButton}
                            onPress={() => {
                                setPresentedShape('');
                                setIsProcessing(false);
                            }}>
                            <Text>Dismiss</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            <Camera
                ref={cameraRef}
                style={styles.camera}
                type={cameraType}
                autoFocus={true}
                whiteBalance={Camera.Constants.WhiteBalance.auto}></Camera>
            <Pressable
                onPress={() => handleImageCapture()}
                style={styles.captureButton}></Pressable>
            <Pressable onPress={toggleCameraType} style={styles.switchButton}>
                <Text>Switch Camera</Text>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    captureButton: {
        position: 'absolute',
        left: Dimensions.get('screen').width / 2 - 50,
        bottom: 40,
        width: 100,
        zIndex: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    modal: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
        borderRadius: 24,
        backgroundColor: 'gray',
    },
    dismissButton: {
        width: 150,
        height: 50,
        marginTop: 60,
        borderRadius: 24,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    switchButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
});

export default physique_recognition;
