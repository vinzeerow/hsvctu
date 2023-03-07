import React, { Component } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';
import { Avatar, Icon, Button, Text, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.coverHeader}>
                        <Button style={styles.btnLogout}>Đăng xuất</Button>
                    </View>
                    <View style={styles.headerProfile}>
                        <Avatar style={styles.avatar} shape='round' source={require('../../../assets/avatar-1.jpg')} />
                        <Text style={styles.textHeadingLight} category='h6' >Trương Phúc Vĩnh</Text>
                    </View>
                    <View style={styles.contentProfile}>
                        <Text style={styles.textLabel} category='s2' >Mã số sinh viên:
                            <Text style={styles.textNormalDark} category='s2' > B1906809</Text>
                        </Text>


                        <Text style={styles.textLabel} category='s2' >Ngành, khóa:
                            <Text style={styles.textNormalDark} category='s2' > Kỹ thuật phần mềm K45</Text>
                        </Text>
                        <Text style={styles.textLabel} category='s2' >Đơn vị:</Text>
                        <Text style={styles.textLabel} category='s2' >Ngày sinh:</Text>
                        <Text style={styles.textLabel} category='s2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
                        <Text style={styles.textLabel} category='s2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
                        <Text style={styles.textLabel} category='s2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
                        <Text style={styles.textLabel} category='s2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
                        <Text style={styles.textLabel} category='s2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
                        <Text style={styles.textLabel} category='s2' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</Text>
                    </View>
                </View>


                {/* <View style={styles.profile}>

                </View> */}
            </ScrollView>

        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        // maxHeight: Dimensions.get('window').height,

    },
    headerProfile: {
        height: 180,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#02598C'
    },
    avatar: {
        margin: 8,
        height: 100,
        width: 100
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
        textTransform: 'uppercase',
        paddingTop: 6,
        paddingBottom: 6,
        fontWeight: 'bold'

    },
    textLabel: {
        color: '#000',
        paddingTop: 6,
        paddingBottom: 6,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    textNormalDark: {
        color: '#000',
        paddingBottom: 14,
        textAlign: 'justify'
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
    contentProfile: {
        // height: '70%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '90%',
        paddingTop: 10
    }

});