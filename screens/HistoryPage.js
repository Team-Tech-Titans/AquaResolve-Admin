import {Pressable, StyleSheet, Text, TextInput, View, Image, Button, SafeAreaView} from 'react-native';
import TopBar from '../components/TopBar.js';
import BottomBar from '../components/BottomBar.js';
import newIcon from '../assets/new.png';
import {useNavigation} from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';

function HistoryPage() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.mainContainer}>
        <TopBar />
            <ScrollView style={styles.container}>
                <Text style={styles.greeting}>History</Text>
                <Text style={styles.problemContainerTitle}>All of your past submissions here</Text>
                <View style={styles.historyCardsContainer}>
                    <View style={styles.historyContainer}>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                        <View style={styles.historyCard}>
                            <View style={styles.historyCardImageContainer}></View>
                            <View style={styles.historyCardInfo}>
                                <View style={styles.historyCardTitle}></View>
                                <View style={styles.historyCardLocation}></View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        flex: 1,
        alignItems: 'center',
    },
    problemContainerTitle: {
        color: '#888',
        fontFamily: 'Poppins-Regular',
        marginBottom: 4,
        paddingLeft: 30,
    },
    textInput: {
        height: 100,
        backgroundColor: '#e7e6e6',
        width: '90%',
        borderRadius: 14,
        padding: 16,
        fontFamily: 'Poppins-Regular',
    },
    cameraButton: {
        height: 30,
        width: '90%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 14,
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    cameraImage: {
        opacity: .4,
        marginBottom: 20,
    },
    cameraText: {
        opacity: .5,
        fontSize: 12,
    },
    buttonStyle: {
        width: '90%',
        height: 50,
        backgroundColor: '#2A6F97',
        borderRadius: 40,
        flex: .08,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'Poppins-Regular',
    },
    historyCardsContainer: {
        flex: 1,
        marginLeft: -30,
        alignItems: 'center',
        paddingBottom: 60,
    },
    historyContainer: {
        flex: 1,
        marginTop: 20,
    },
    historyCard: {
        height: 100,
        width: 340,
        backgroundColor: '#ddd',
        borderRadius: 12,
        marginBottom: 15,
        overflow: 'hidden',
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    historyCardImageContainer: {
        height: 100,
        width: 100,
        backgroundColor: '#bbb',
    },
    historyCardInfo: {
        marginLeft: 10,
    },
    historyCardTitle: {
        height: 12,
        width: 200,
        backgroundColor: '#bbb',
        marginBottom: 10,
        borderRadius: 20,
    },
    historyCardLocation: {
        height: 12,
        width: 120,
        backgroundColor: '#bbb',
        borderRadius: 20,
    },
});

export default HistoryPage;