import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Avatar, Icon, Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { Calendar, Text, Card, List } from '@ui-kitten/components';
import { Dimensions } from 'react-native';
// import { ScrollView } from 'react-navigation';

export default class NotificationScreen extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            dataNotification: [
                {
                    TieuDe: "Khen thưởng",
                    NoiDung: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
                    ThoiGian: "07/03/2023",
                },
                {
                    TieuDe: "Thông báo số 2",
                    NoiDung: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
                    ThoiGian: "09/03/2023",
                },
                {
                    TieuDe: "Thông báo số 3",
                    NoiDung: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
                    ThoiGian: "07/03/2023",
                },
                {
                    TieuDe: "Thông báo số 4",
                    NoiDung: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
                    ThoiGian: "07/03/2023",
                },
            ]
        }
    }
    render() {
        const renderItemHeader = (headerProps, info) => {
            return (
                <View {...headerProps}>
                    <Text category='h6'>
                        {info.item.TieuDe}
                    </Text>
                </View>
            )
        }

        const renderItem = (info) => {
            return (
                <Card style={styles.item}>
                    <View style={styles.frame}>
                        <Text style={styles.textRed} category='s2' >KHEN THƯỞNG</Text>
                        <Text style={styles.textNormalLight} category='s2' >{info.item.TieuDe}</Text>
                        <Text style={styles.textNormalLight} category='s2' >Thời gian: {info.item.NoiDung}</Text>
                        <Text style={styles.textNormalLight} category='s2' >Địa điểm: {info.item.ThoiGian}</Text>
                    </View>

                </Card>
            )
        }
        return (
            <ScrollView>
                <View style={styles.container} >
                    <View style={styles.coverHeader}>
                        <Button style={styles.btnLogout}>Đăng xuất</Button>
                    </View>
                    <View style={styles.headerProfile}>
                        <Avatar style={styles.avatar} shape='round' source={require('../../../assets/avatar-1.jpg')} />
                        <Text style={styles.textHeadingLight} category='h6' >Trương Phúc Vĩnh</Text>
                    </View>

                    <View style={styles.archivement}>

                    </View>
                </View>
            </ScrollView>

        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02598C',
        alignItems: 'center',
        justifyContent: 'center',
        // height: Dimensions.get('window').height,
    },
    headerProfile: {
        height: 180,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#02598C'
    },
    archivement: {
        height: Dimensions.get('window').height,
        width: '100%',
        backgroundColor: '#fff',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    avatar: {
        margin: 8,
        height: 100,
        width: 100
    },
    textNormalLight: {
        textAlign: 'justify',
        color: '#000',
        paddingBottom: 3,
        paddingTop: 3
    },
    textRed: {
        color: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeadingLight: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        paddingTop: 14,
        paddingBottom: 14,
        fontWeight: 'bold'

    },
    textHeadingLight: {
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        paddingTop: 14,
        paddingBottom: 14,
        fontWeight: 'bold',
    },
    containerList: {
        height: Dimensions.get('window').height,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    contentList: {
        // paddingHorizontal: 8,
        paddingVertical: 4,
    },
    item: {
        marginVertical: 0,
        borderRadius: 0,
        borderWidth: 0,

    },
    coverHeader: {
        backgroundColor: "#02598C",
        color: '#fff',
        height: 50,
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    btnLogout: {
        textAlign: 'center',
        color: '#000',
        backgroundColor: '#02598C',
        borderWidth: 0,
        borderRadius: 4,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
})
