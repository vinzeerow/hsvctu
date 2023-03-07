import React, { Component } from 'react';
import { SafeAreaView, View, Button,ScrollView } from 'react-native';
import { Avatar, Icon, Text, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
export default class EnrollScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}
