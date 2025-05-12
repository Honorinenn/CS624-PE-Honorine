import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image
                            style={styles.cardImage}
                            source={require('../../assets/images/user.png')}
                        />
                    </View>
                    <Text style={styles.cardName}>John Doe</Text>
                    <Text style={styles.cardTitle}>React Native Developer</Text>
                    <Text style={styles.cardDescription}>
                        John is a really great JavaScript developer. He loves using JS to build
                        React Native applications for iOS and Android.
                    </Text>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
    },
    cardImageContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30,
        justifyContent: 'center',
    },
    cardImage: {
        width: 80,
        height: 80,
    },
    cardName: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
        textDecorationLine: 'underline',
    },
    cardDescription: {
        marginTop: 10,
        paddingHorizontal: 20,
        textAlign: 'center',
        fontSize: 12,
        color: 'black',
    },
});
