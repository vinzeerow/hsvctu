import React, { Component } from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon, Text, Button, Divider, Card, Layout, TopNavigation } from '@ui-kitten/components';
import { Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import HomeNavigator from './homeScreen/homeNavigator'

export default class HomeScreen extends Component {
    // switchUI = () => {
    //     console.log("HELLO");
    //     <HomeNavigator />
    // }
    render() {
        const Opinion = (props) => (
            <View {...props}>
                <MaterialCommunityIcons name="email-edit-outline" size={44} color="#02598C" />

            </View>
        );
        const Game = (props) => (
            <View {...props}>
                <Ionicons name="game-controller-outline" size={44} color="#02598C" />

            </View>
        );
        const ListActivity = (props) => (
            <View {...props}>
                <Ionicons name="md-list-circle-outline" size={44} color="#02598C" />

            </View>
        );
        const Trophy = (props) => (
            <View {...props}>
                <Ionicons name="md-trophy-outline" size={44} color="#02598C" />

            </View>
        );
        const FiveGoal = (props) => (
            <View {...props}>
                <MaterialCommunityIcons name="numeric-5-circle-outline" size={44} color="#02598C" />

            </View>
        );
        const Enroll = (props) => (
            <View {...props}>
                <AntDesign name="addusergroup" size={44} color="#02598C" />

            </View>
        );


        return (
            // <ScrollView>
            <View style={styles.container}>
                <View style={styles.eventContainer}>
                    <View style={styles.event}>
                        <Text style={styles.textNormalLight} category='s2' >Sự kiện sắp diễn ra</Text>
                        <Text style={styles.textHeadingLight} category='s1' >Tên sự kiện</Text>
                        <Text style={styles.textNormalLight} category='s2' >Thời gian: </Text>
                        <Text style={styles.textNormalLight} category='s2' >Địa điểm: </Text>
                    </View>

                </View>
                <View style={styles.function}>
                    <Layout style={styles.cardContainer} level='1'>
                        <Card
                            style={styles.card}
                            header={Enroll}
                            onPress={() => this.props.navigation.navigate('ENROLL')}
                        >
                            <Text style={styles.textNormalCenter} category='c1'>Đăng ký {"\n"}kết nạp Hội</Text>
                        </Card>

                        <Card
                            style={styles.card}
                            header={FiveGoal}
                            onPress={() => this.props.navigation.navigate('FIVE_GOOD')}
                        >
                            <Text style={styles.textNormalCenter} category='c1'>Xét sinh viên{"\n"}5 tốt</Text>
                        </Card>

                    </Layout>
                    <Layout style={styles.cardContainer} level='1'>

                        <Card
                            style={styles.card}
                            header={Trophy}
                            onPress={() => this.props.navigation.navigate('ARCHIVEMENT')}
                        >
                            <Text style={styles.textNormalCenter} category='c1'>Khen thưởng {"\n"}và kỷ luật</Text>
                        </Card>

                        <Card
                            style={styles.card}
                            header={ListActivity}
                            onPress={() => this.props.navigation.navigate('CALENDAR')}
                        >
                            <Text style={styles.textNormalCenter} category='c1'>Xem lịch sự kiện</Text>
                        </Card>

                    </Layout>
                    <Layout style={styles.cardContainer} level='1'>

                        <Card
                            style={styles.card}
                            header={Opinion}
                            onPress={() => this.props.navigation.navigate('OPINION')}
                        >
                            <Text style={styles.textNormalCenter} category='c1'>Đóng góp ý kiến</Text>
                        </Card>

                        <Card
                            style={styles.card}
                            header={Game}
                            onPress={() => this.props.navigation.navigate('GAME')}
                        >
                            <Text style={styles.textNormalCenter} category='c1'>Trò chơi lớn</Text>
                        </Card>

                    </Layout>
                </View>
            </View>
            // </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').height,

    },
    eventContainer: {
        borderRadius: 10,
        backgroundColor: "#02598C",
        color: '#fff',
        height: 160,
        width: '96%',
    },
    event: {
        margin: 16,
        // backgroundColor: 'red'
    },
    function: {
        backgroundColor: "#fff",
        height: Dimensions.get('window').height - 290,
        width: '92%',
        paddingTop: 10
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: (Dimensions.get('window').height - 310) / 3,
        backgroundColor: '#fff'
    },
    card: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

    },
    textNormalCenter: {
        textAlign: 'center',
        color: '#000'
    },
    textNormalLight: {
        textAlign: 'justify',
        color: '#fff',
        paddingBottom: 3,
        paddingTop: 3
    },
    textNormalDark: {
        textAlign: 'justify',
        color: '#000'
    },
    textHeadingLight: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        paddingTop: 14,
        paddingBottom: 14,
        fontWeight: 'bold'

    },
    textHeadingDark: {
        textAlign: 'center',
        color: '#000',
        textTransform: 'uppercase'
    },
})
