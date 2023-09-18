import React,{ useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
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
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, getAuth, signInWithEmailAndPassword, initializeApp, getReactNativePersistence, onAuthStateChanged } from '../firebase';

export default function Login({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            navigation.navigate('Home');
          }
          else {
            console.error("Logged out");
          }
        });
      }, []);


            
    const signInUser = async (email, password) => {
        try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User authenticated:', user);
        } catch (error) {
        console.error('Authentication error:', error);
        }
    };

    const handleSignIn = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        await AsyncStorage.setItem('authToken', 'yourAuthTokenHere');
        navigation.navigate('Home');
      } catch (error) {
        console.error(error);
      }
    };


    return(
        <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        <View style={styles.heading}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={icon} />
                </View>
                <Text style={styles.headingTitle}>AquaResolve Admin</Text>
        </View>
            <Text style={styles.subHeading}>
                    Enter your credentials to get back in
            </Text>
            <TextInput
                style={[{borderTopLeftRadius: 20, borderTopRightRadius: 20}, styles.input]}
                placeholder='Enter your e-mail'
                onChangeText={(text) => setEmail(text)}
                value={email}>
            </TextInput>

            <TextInput
                style={[{borderBottomLeftRadius: 20, borderBottomRightRadius: 20}, styles.input]}
                placeholder='Enter your password'
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
                    onPress={()=> navigation.navigate('Signup')}
                >
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.userBtn}
                    onPress={handleSignIn}
                >
                    <Text style={styles.btnText}>Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#A9D6E5',
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
    subHeading:{
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 34,
        fontFamily: 'Poppins-Regular',
    },
    input:{
        width:'90%',
        backgroundColor:'white',
        padding: 13,
        fontFamily: 'Poppins-Regular',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        alignItems:'center',
        marginTop:15,
    },
    userBtn:{
        backgroundColor: '#2C7DA0',
        padding: 15,
        width: '45%',
        marginTop: 15,
        borderRadius: 50,
    },
    btnText:{
        fontSize:16,
        textAlign:'center',
        color: '#fff',
        fontFamily: 'Poppins-Regular',
    },
    googleBtn: {
        backgroundColor: '#fff',
        padding: 15,
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
})