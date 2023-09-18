import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Pressable,
    Image,
} from 'react-native';
import googleIcon from '../assets/google.png';
import icon from '../assets/logoSmall.png';
import { auth, updateProfile, updatePhoneNumber, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, initializeApp, getReactNativePersistence, onAuthStateChanged } from '../firebase';



const SignupScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
            const user = userCredential.user;
    
            await updateProfile(user, {
                displayName: name,
                email: email,
            });
    
            await updatePhoneNumber(user, phoneNumber);
    
            navigation.navigate('Login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} />
            <View style={styles.heading}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={icon} />
                </View>
                <Text style={styles.headingTitle}>AquaResolve Admin</Text>
            </View>
            <Text style={styles.subHeading}>
                Create an account to get started
            </Text>
            <TextInput
                style={[{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }, styles.input]}
                placeholder='Enter your name'
                onChangeText={(text) => setName(text)}
                value={name}>
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='Enter your e-mail address'
                inputMode='email'
                onChangeText={(text) => setEmail(text)}
                value={email}>
            </TextInput>

            <TextInput
                style={styles.input}
                placeholder='Enter your mobile number'
                inputMode='tel'
                maxLength={10}
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}>
            </TextInput>

            <TextInput
                style={[{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }, styles.input]}
                placeholder='Create a password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry>
            </TextInput>

            <Text style={styles.orText}>
                OR
            </Text>

            <Pressable
                style={styles.googleBtn}
                onPress={() => navigation.navigate('Signup')}
            >
                <Image style={styles.googleLogo} source={googleIcon} />
                <Text style={styles.googleText}>Continue with Google</Text>
            </Pressable>


            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.userBtn}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.btnText}>Log in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.userBtn}
                    onPress={handleSignUp}>
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A9D6E5',
    },
    heading: {
        margin: 5,
        flexDirection: 'row',
        marginBottom: 18,
    },
    headingTitle: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        marginTop: 5,
    },
    logo: {
        height: 28,
        width: 28,
    },
    logoContainer: {
        backgroundColor: '#fff',
        padding: 7,
        height: 42,
        width: 42,
        borderRadius: 50,
        marginRight: 10,
    },
    subHeading: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 24,
        fontFamily: 'Poppins-Regular',
        width: '80%',
    },
    input: {
        width: '90%',
        backgroundColor: 'white',
        padding: 13,
        paddingLeft: 15,
        fontFamily: 'Poppins-Regular',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignItems: 'center',
        marginTop: 15,
    },
    userBtn: {
        backgroundColor: '#2C7DA0',
        padding: 15,
        width: '45%',
        marginBottom: 10,
        borderRadius: 50,
    },
    googleBtn: {
        backgroundColor: '#fff',
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 16,
        marginBottom: 10,
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleLogo: {
        height: 20,
        width: 20,
        marginRight: 10,
    },
    orText: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        marginTop: 15,
    },
    googleText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Poppins-Regular',
    },
    btnText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Poppins-Regular',
    },
})
export default SignupScreen;

