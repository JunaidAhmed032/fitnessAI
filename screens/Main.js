import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import LottieView from 'lottie-react-native';

function Main(props) {
    return (
        <ImageBackground source={require('./assets/liquid.jpg')} style={styles.homecontainer}>
            <View style={styles.container}>
                <View style={styles.overlay} />
                <View style={styles.content}>
                    <View style={styles.boxContainer}>
                        <View style={styles.box}>
                            <LottieView
                                autoPlay
                                style={styles.loginlottie}
                                source={require('./assets/lottie/scanbody.json')}
                            />
                            <View style={styles.bottomTextContainer}>
                                <Text style={styles.bottomText}>Physique Type</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <LottieView
                                autoPlay
                                style={styles.loginlottie}
                                source={require('./assets/lottie/workout.json')}
                            />
                            <View style={styles.bottomTextContainer}>
                                <Text style={styles.bottomText}>Monitor Workout</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.box}>
                            <LottieView
                                autoPlay
                                style={styles.loginlottie}
                                source={require('./assets/lottie/report.json')}
                            />
                            <View style={styles.bottomTextContainer}>
                                <Text style={styles.bottomText}>Progress Report</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <LottieView
                                autoPlay
                                style={styles.loginlottie}
                                source={require('./assets/lottie/pedometer.json')}
                            />
                            <View style={styles.bottomTextContainer}>
                                <Text style={styles.bottomText}>Pedometer</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0)', // Adjust the opacity as desired
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(255, 255, 255, 0)', // Adjust the opacity as desired
    },
    content: {
        width: '90%',
        height: '75%',
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the opacity as desired
        alignItems: 'center',
        justifyContent: 'center',
    },
    homecontainer: {
        flex: 1,
        backgroundColor: "#538FFB"
    },
    boxContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    box: {
        flex: 1,
        margin: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the opacity as desired
        borderRadius: 8,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      bottomTextContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 255)', // Adjust the background color as desired
        paddingVertical: 10,
      },
      bottomText: {
        color: 'white', // Adjust the text color as desired
        fontSize: 16, // Adjust the font size as desired
      },
});

export default Main;
