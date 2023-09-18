import { StatusBar } from 'expo-status-bar';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import icon from '../assets/logoSmall.png';
import { useFonts } from 'expo-font';
import poppinsRegular from '../assets/fonts/Poppins-Regular.ttf';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import settingsIcon from '../assets/settings.png';

export default function HomePage() {
    const insets = useSafeAreaInsets();
    const [fontsLoaded] = useFonts({
        'Poppins-Regular': poppinsRegular,
    });

    if (!fontsLoaded) {
        return null;
    }

    const dynamicStyles = {
        topBarContainer: {
            paddingTop: insets.top + 2,
            height: insets.top + 68,
        },
        settingsIcon: {
            position: "absolute",
            top: insets.top + 20,
        },
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden={false} />
            <View style={[styles.topBarContainer, dynamicStyles.topBarContainer]}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={icon} />
                </View>
                <Text style={styles.topbarTitle}>AquaResolve Admin</Text>
                <Image style={[styles.settingsIcon, dynamicStyles.settingsIcon]} source={settingsIcon} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 0,
    },
    settingsIcon: {
        height: 24,
        width: 24,
        position: "absolute",
        top: 62,
        right: 26,
    },
    topBarContainer: {
        width: '100%',
        backgroundColor: '#A9D6E5',
        zIndex: 10,
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 26,
        alignItems: 'center',
    },
    topbarTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        marginTop: 2,
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
});
