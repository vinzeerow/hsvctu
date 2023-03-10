import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { IndexPath, Icon, Button, Modal, Avatar, Input, Text, Select, RadioGroup, Radio, SelectItem, Layout, Datepicker } from '@ui-kitten/components';
import { Formik } from 'formik';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Alert, PermissionsAndroid, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default class EnrollScreen extends Component {
    render() {
        return (
            <Formik
                style={styles.background}
                // validationSchema={formSchema}
                initialValues={{
                    opinion: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {(props) => (
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.form}>
                                <Text style={styles.text}>Hãy nêu lên những ý kiến đóng góp của bạn về ứng dụng</Text>
                                <Input
                                    multiline={true}
                                    numberOfLines={20}
                                    style={styles.input}
                                    onChangeText={props.handleChange('opinion')}
                                    value={props.values.opinion}
                                />
                                <View style={styles.submit}>
                                    <TouchableOpacity
                                        onPress={props.handleSubmit}
                                        style={styles.btnSend}
                                        activeOpacity={0.5}>
                                        <Text style={styles.txtSend}>Gửi</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* {props.errors.opinion && props.touched.opinion ? <Text style={styles.error}>{props.errors.address}</Text> : null} */}
                            </View>
                        </View>

                    </ScrollView>
                )}
            </Formik>
        );
    }
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: Dimensions.get('window').height,
    },
    form: {
        width: '94%',
        padding: 6,
    },
    error: {
        color: '#DB2A30'
    },
    input: {
        borderColor: '#02598C',
        paddingTop: 5,
        paddingBottom: 5,
    },
    text: {
        fontSize: 14,
        color: '#8F9BB3',
        fontWeight: 400,
        paddingTop: 6,
        paddingBottom: 6,
    },
    submit: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff'
    },
    btnSend: {
        width: '30%',
        borderRadius: 4,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: "#00649F",

    },
    txtSend: {
        color: '#fff'
    },
})
