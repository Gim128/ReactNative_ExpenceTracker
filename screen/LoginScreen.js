import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Pressable } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowHeight = Dimensions.get('window').height;

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            showPassword: true,
            pass: 'Show'

        };
    }

    // componentDidMount() {
    //     if (this.getData() != undefined || this.getData() != null) {
    //         this.props.navigation.navigate('Home');
    //     }
    // }


    getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('logins');
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
            console.log(e);
        }
    };


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


    checkData(data) {
        console.log('start login-click');
        fetch('http://192.168.1.2:3000/api/v1/userRoute/login', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                if (json.message == 'success') {
                    this.storeData(json);
                }
            })
            .catch(console.error);
        console.log('end login-click');
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row1}>
                    <TextInput
                        label="email"
                        value={this.state.email}
                        onChangeText={(e) => {
                            this.setState({ email: e })
                        }}
                    />

                    <TextInput
                        label="Password"
                        secureTextEntry={this.state.showPassword}
                        // right={<TextInput.Icon name="eye" />}
                        value={this.state.password}
                        onChangeText={value => {
                            this.setState({
                                password: value,
                            });
                        }}

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


                </View>

                <View style={styles.main}>
                    <Button
                        style={styles.btn}
                        icon="login" mode="contained" color="green" onPress={this.checkData.bind(this)}>

                        Log In
                    </Button>
                </View>

                <View style={styles.click}>
                    <Text>Don't Have Account ? </Text>
                    <Pressable onPress={() => { this.props.navigation.navigate("SignUpScreen") }}>
                        <Text>Register Here</Text>
                    </Pressable>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    row1: {
        marginTop: 150,
        padding: 8,
    },
    main: {
        marginTop: 50,
        display: "flex",
        alignItems: "center"
    },
    container: {
        display: "flex",
        backgroundColor: "#2c3e50",
        height: windowHeight
    },
    btn: {
        width: 120,
    },
    click: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20
    }
})