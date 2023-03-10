import React, { Component } from 'react';
import { SafeAreaView, Image,View, StyleSheet } from 'react-native';
// import { ApplicationProvider, BottomNavigation, BottomNavigationTab, Icon, Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { Calendar, Text, Card, List } from '@ui-kitten/components';
import { Dimensions } from 'react-native';

export default class EventScreen extends Component {
    constructor(probs) {
        super(probs);
        this.state = {
            date: new Date(),
            dataEvent: [
                {
                    TenSuKien: "Sự kiện a",
                    ThoiGian: "07/03/2023",
                    DiaDiem: "minivan"
                },
                {
                    TenSuKien: "Sự kiện b",
                    ThoiGian: "07/03/2023",
                    DiaDiem: "minivan"
                },
                {
                    TenSuKien: "Sự kiện c",
                    ThoiGian: "07/03/2023",
                    DiaDiem: "minivan"
                }
            ]
        }
    }

    showEvent = (nextDate) => {
        console.log('Tên sự kiện của ngày ' + nextDate);
        this.setState({ date: nextDate });
    }

    render() {
        // const dataFromMySql = this.state.dataEvent.map((item, index) => {
        //     var arrayEvent = [
        //         {
        //             TenSuKien: item.TenSuKien,
        //             ThoiGian: item.ThoiGian,
        //             DiaDiem: item.DiaDiem
        //         }
        //     ]
        //     return arrayEvent
        // })


        const renderItemHeader = (headerProps, info) => {
            return (
                <View {...headerProps}>
                    <Text category='h6'>
                        {info.item.TenSuKien}
                    </Text>
                </View>
            )
        }
        const renderItemFooter = (footerProps, info) => {
            return (
                <View {...footerProps}>
                    <Text style={styles.textNormalLight} category='s2' >Thời gian: {info.item.ThoiGian}</Text>
                    <Text style={styles.textNormalLight} category='s2' >Địa điểm: {info.item.DiaDiem}</Text>
                </View>
            )
        }

        const renderItem = (info) => {
            return (
                <Card
                    style={styles.item}
                    status='basic'
                    header={headerProps => renderItemHeader(headerProps, info)}
                    footer={footerProps => renderItemFooter(footerProps, info)}
                >
                    <Image
                        style={styles.image}
                        source={require('../../../assets/img-event-1.jpg')}
                    />
                </Card>

            )
        }

        return (
            <View style={styles.container} >
                <List
                    style={styles.containerList}
                    contentContainerStyle={styles.contentList}
                    data={this.state.dataEvent}
                    renderItem={renderItem}
                />
            </View>
        );
    }

};

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
        width: '100%'
    },
    contentList: {
        // paddingHorizontal: 8,
        // paddingVertical: 4,
    },
    item: {
        // marginVertical: 4,
    },
    image:{
        width: '100%'
    }
})