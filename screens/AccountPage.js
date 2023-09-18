import React, { useState, useEffect } from 'react';
import {Pressable, StyleSheet, Text, TextInput, View, Image, SafeAreaView} from 'react-native';
import TopBar from '../components/TopBar.js';
import BottomBar from '../components/BottomBar.js';
import user from '../assets/user.png';
import edit from '../assets/edit.png';
import location from '../assets/location.png';
import logout from '../assets/logout.png';
import {useNavigation} from "@react-navigation/native";
import { auth, signOut, onAuthStateChanged } from '../firebase';

function AccountPage() {
    const navigation = useNavigation();
    const [displayName, setDisplayName] = useState('Test');
    const [email, setEmail] = useState('example@email.com');
    const [phoneNumber, setPhoneNumber] = useState('9876543210');
    const [city, setCity] = useState('Bhopal');
    const [stateName, setStateName] = useState('Madhya Pradesh');
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user !== null) {
          setDisplayName(user.displayName);
          setEmail(user.email);
        }
      });
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigation.navigate('Login');
        } catch (error) {
            console.error(error);
        }
    };
    
    return (
        <SafeAreaView style={styles.mainContainer}>
        <TopBar />
            <View style={styles.container}>
                <Text style={styles.greeting}>Account</Text>
                <Text style={styles.problemContainerTitle}>Manage your account here</Text>
                <View style={styles.accountInfo}>
                    <View style={styles.accountPictureContainer}>
                        <Image style={styles.accountPicture} source={user}/>
                    </View>
                    <View style={styles.accountName}>
                        <Text style={styles.userName}>{displayName}</Text>
                    </View>
                    <View style={styles.accountCity}>
                        <Image source={location} style={styles.locationIcon}/>
                        <Text style={styles.locationName}>{city}, {stateName}</Text>
                    </View>
                    <Pressable style={styles.editInfo}>
                        <Text style={styles.editText}>Edit info</Text>
                        <Image style={styles.editIcon} source={edit}/>
                    </Pressable>
                    <Text style={styles.accountDetails}>Account details</Text>
                    <View style={styles.infoList}>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle}>
                                E-mail:
                            </Text>
                            <Text style={styles.infoContent}>
                                {email}
                            </Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle}>
                                Phone no:
                            </Text>
                            <Text style={styles.infoContent}>
                                {phoneNumber}
                            </Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle}>
                                City/Village:
                            </Text>
                            <Text style={styles.infoContent}>
                                {city}
                            </Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.infoTitle}>
                                State/province:
                            </Text>
                            <Text style={styles.infoContent}>
                                {stateName}
                            </Text>
                        </View>
                    </View>
                    
                    <Pressable onPress={handleSignOut} style={[styles.editInfo, {borderColor: '#c00'}]}>
                        <Text style={styles.editText}>Log out</Text>
                        <Image style={styles.editIcon} source={logout}/>
                    </Pressable>
                </View>
            </View>
        <BottomBar navigation={navigation} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 88,
        backgroundColor: '#fff',
    },
    container: {
        backgroundColor: '#fff',
        margin: 15,
        marginTop: 24,
        width: '100%',
        height: '100%',
    },
    greeting: {
        fontSize: 22,
        fontFamily: 'Poppins-Regular',
        paddingLeft: 30,
        paddingTop: 20,
    },
    problemContainer: {
        width: '92%',
        height: '60%',
        padding: 10,
        paddingLeft: 15,
        alignItems: 'center',
        paddingTop: 20,
    },
    problemContainerTitle: {
        color: '#888',
        fontFamily: 'Poppins-Regular',
        marginBottom: 4,
        paddingLeft: 30,
    },
    accountInfo: {
        flex: .33,
        alignItems: 'center',
        marginTop: 30,
        marginLeft: -30,
    },
    accountPictureContainer: {
        height: 100,
        width: 100,
        borderRadius: 100,
        overflow: 'hidden',
    },
    accountPicture: {
        height: '100%',
        width: '100%',
    },
    accountCity: {
        flexDirection: 'row',
        marginBottom: 22,
    },
    accountName: {
        marginTop: 10,
    },
    locationIcon: {
        height: 15,
        width: 15,
        marginRight: 5,
        opacity: .6,
        marginTop: 1,
    },
    locationName: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        color: '#999',
    },
    userName: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
    },
    editInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#2A6F97',
        borderRadius: 50,
        padding: 8,
        paddingLeft: 12,
        paddingRight: 12,
        marginBottom: 4,
    },
    editIcon: {
        height: 16,
        width: 16,
    },
    editText: {
        fontFamily: 'Poppins-Regular',
        marginRight: 8,
    },
    infoList: {
        width: '80%',
        marginTop: 12,
        marginBottom: 20,
    },
    infoItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderBottomWidth: .5,
        borderBottomColor: '#ccc',
    },
    infoTitle: {
        marginRight: 10,
        fontFamily: 'Poppins-SemiBold',
    },
    infoContent: {
        fontFamily: 'Poppins-Regular',
    },
    accountDetails: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
        marginTop: 20,
        color: '#888',
        borderBottomWidth: .8,
        borderBottomColor: '#ddd',
    },

});

export default AccountPage;