import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
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
        this.setState({ date: nextDate});
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

        const renderItem = (info) => {
            return (
                <Card
                    style={styles.item}
                    status='basic'
                    header={headerProps => renderItemHeader(headerProps, info)}
                >
                    <Text style={styles.textNormalLight} category='s2' >Thời gian: {info.item.ThoiGian}</Text>
                    <Text style={styles.textNormalLight} category='s2' >Địa điểm: {info.item.DiaDiem}</Text>
                </Card>

            )
        }

        return (
            <View style={styles.container} >
                <Text category='h6'>
                    Selected date: {this.state.date.toLocaleDateString()}
                </Text>
                <Calendar
                    date={this.state.date}
                    onSelect={this.showEvent.bind(this)}
                    style={styles.calendarContainer}
                />
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
    calendarContainer: {
        backgroundColor: '#fff',
        height: '50%',
        width: '96%',
        borderRadius: 0
    },
    event: {
        backgroundColor: '#02598C',
        height: '30%',
        width: '96%',
        borderRadius: 10,
        padding: 20,

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
    headerCalendar: {
        backgroundColor: '#fff',
        height: '10%',
        width: '96%',
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: '#02598C',
        // borderWidth: 1
        // padding: 20,
        // marginTop: 20
    },
    containerList: {
        maxHeight: 320,
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