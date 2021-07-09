import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="camera" />

export default class ViewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Card>
                    <Card.Title title="WELCOME TO" subtitle="Money Balancer" left={LeftContent} />
                    <Card.Content>
                        <Title>Want To Manage Your Salary..?</Title>
                        <Paragraph>INCOME-EXPENSE TRACKER FOR YOU!</Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'http://st2.depositphotos.com/5677528/8319/i/450/depositphotos_83198804-Travel-expences.jpg' }} />
                    <Card.Actions>
                        <Pressable onPress={() => { this.props.navigation.navigate("LoginScreen") }}>
                            <Button >Let's Go!</Button>
                        </Pressable>
                    </Card.Actions>
                </Card>
            </View>
        );
    }
}

