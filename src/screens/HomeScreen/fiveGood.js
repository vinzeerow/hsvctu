import React, { Component } from 'react';
import { SafeAreaView, View, Button, ScrollView } from 'react-native';
import { Avatar, Icon, Text, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
export default class FiveGoodScreen extends Component {

    render() {
        const Demo = () => {
            React.useEffect(
                () => this.props.navigation.addListener('focus', () => {
                    alert('Screen was focused')
                    // this.props.navigation.getParent()?.setOptions({
                        
                    //     tabBarStyle: {
                    //         display: "none"
                    //     }
                    // });
                }),
                []
            );
            React.useEffect(() => {
                console.log(this.props.navigation.getParent());
                this.props.navigation.getParent()?.setOptions({ tabBarStyle: { display: 'none' }, tabBarVisible: false });
                return () =>
                this.props.navigation.getParent()?.setOptions({ tabBarStyle: undefined, tabBarVisible: undefined });
            }, [this.props.navigation]);

            React.useEffect(
                () => this.props.navigation.addListener('blur', () => alert('Screen was unfocused')),
                []
            );

            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Archivement Screen</Text>
                    <Button
                        title="Go to Settings"
                        onPress={() => this.props.navigation.navigate('Settings')}
                    />
                </View>
            );
        }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <Button title="Go back" onPress={() => this.props.navigation.goBack()} /> */}
                <Demo />
            </View>
        );
    }
}