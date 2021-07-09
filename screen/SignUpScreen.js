import React, { Component } from 'react';
import {
    View, StyleSheet, Dimensions, Pressable, Text, ScrollView,
    KeyboardAvoidingView,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get('window').height;

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            userState: true,
            showPassword: true,
            pass: 'Show',

        };
    }


    storeData = async value => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('logins', jsonValue);
            console.log('Saved Logins');
            this.props.navigation.navigate('Home');
        } catch (e) {
            // saving error
            console.log(e);
        }
    };



    addData(data) {
        console.log('start signup-click');
        fetch('http://192.168.1.2:3000/api/v1/userRoute/registerUser', {
            method: 'POST',
            body: JSON.stringify({
                fName: this.state.firstName,
                lName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                userState: this.state.userState,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                // if (json.message == 'success') {
                //   console.log('New Data Saved');
                //   this.storeData(json);
                // }
                this.storeData(json); //Test
            })
            .catch(console.error);
        console.log('end signup-click');
    }




    render() {
        return (
            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.user}>
                        <KeyboardAvoidingView>

                            <TextInput style={styles.IT}
                                mode="outlined"
                                label="First Name"
                                value={this.state.firstName}
                                onChangeText={value => {
                                    this.setState({
                                        firstName: value,
                                    });
                                }}

                                placeholder="Type something"
                                right={<TextInput.Affix text="/100" />}
                            />

                            <TextInput style={styles.IT}
                                mode="outlined"
                                label="Last Name"
                                value={this.state.lastName}
                                onChangeText={value => {
                                    this.setState({
                                        lastName: value,
                                    });
                                }}

                                placeholder="Type something"
                                right={<TextInput.Affix text="/100" />}
                            />

                            <TextInput style={styles.IT}
                                mode="outlined"
                                label="Email"
                                value={this.state.email}
                                onChangeText={value => {
                                    this.setState({
                                        email: value,
                                    });
                                }}

                                placeholder="Type something"
                                right={<TextInput.Affix text="/100" />}
                            />

                            <TextInput style={styles.IT}
                                mode="outlined"
                                label="Password"
                                value={this.state.password}
                                onChangeText={value => {
                                    this.setState({
                                        password: value,
                                    });
                                }}

                                secureTextEntry={this.state.showPassword}
                                placeholder="Type something"
                                right={<TextInput.Affix text="/100" />}
                            />


                            <Pressable
                                onPress={() => {
                                    this.setState({
                                        showPassword: !this.state.showPassword,
                                        pass: this.state.showPassword == true ? 'Hide' : 'Show',
                                    });
                                }}>
                                <Text style={{ textAlign: 'right' }}>{this.state.pass} Password</Text>
                            </Pressable>
                        </KeyboardAvoidingView>

                        <View style={styles.slg}>
                            <Button
                                style={styles.click}
                                icon="login" mode="contained" onPress={this.addData.bind(this)}>
                                Sign Up
                            </Button>
                        </View>

                    </View>
                </View>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    user: {
        marginTop: 100,
        marginVertical: 10
    },
    main: {
        height: windowHeight,
        backgroundColor: "#34495e",

    },
    click: {
        display: "flex",
        width: 120,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 35
    },
    IT: {
        padding: 6,
    },
    pd: {
        padding: 6,
    },
    slg: {
        display: "flex",
        alignItems: "center"
    }

})