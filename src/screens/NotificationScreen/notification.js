import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon, Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { Calendar, Text, Card, List } from '@ui-kitten/components';
import { Dimensions } from 'react-native';

export default class NotificationScreen extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            dataNotification: [
                {
                    TieuDe: "Thông báo số 1",
                    NoiDung: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
                    ThoiGian: "07/03/2023",
                },
                {
                    TieuDe: "Thông báo số 2",
                    NoiDung: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
                    ThoiGian: "07/03/2023",
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
                <Card
                    style={styles.item}
                    status='basic'
                    header={headerProps => renderItemHeader(headerProps, info)}
                >
                    <Text style={styles.textNormalLight} category='s2' >Thời gian: {info.item.NoiDung}</Text>
                    <Text style={styles.textNormalLight} category='s2' >Địa điểm: {info.item.ThoiGian}</Text>
                </Card>
            )
        }
        return (
            <View style={styles.container} >
                <List
                    style={styles.containerList}
                    contentContainerStyle={styles.contentList}
                    data={this.state.dataNotification}
                    renderItem={renderItem}
                />
            </View>
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
    textNormalLight: {
        textAlign: 'justify',
        color: '#000',
        paddingBottom: 3,
        paddingTop: 3
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
        maxHeight: Dimensions.get('window').height,
        width: '96%'
    },
    contentList: {
        // paddingHorizontal: 8,
        paddingVertical: 4,
    },
    item: {
        marginVertical: 4,
    },
})