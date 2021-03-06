import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {
    Avatar,
    Text,
    Card,
    Title,
    Paragraph,
    IconButton,
    Colors,
} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

export default class ViewCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'Gimhan',
            totalPrice: 0,
            expense: 0,
        };
    }

    render() {
        return (
            <View style={styles.back}>
                <View style={styles.BoxModel}>
                    <View style={styles.Box}>
                        <View style={styles.txtBox}>
                            <Text style={styles.txt1}>Balance</Text>
                            <Text style={styles.txt1}>Rs. {this.props.balance}</Text>
                        </View>
                        <View style={styles.txtBox}>
                            <Text style={styles.txt2}>Total Income</Text>
                            <Text style={styles.txt2}>Rs. {this.props.totIncome}</Text>
                        </View>
                        <View style={styles.txtBox}>
                            <Text style={styles.txt3}>Total Expense</Text>
                            <Text style={styles.txt3}>Rs. {this.props.totExpense}</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    Box: {
        width: '95%',
        height: 195,
        backgroundColor: '#0c2461',
        borderRadius: 35,
        padding: 35,
        marginVertical: 10,
        shadowColor: '#3c6382',
        textShadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.28,
        shadowRadius: 5.46,
        elevation: 9,
    },
    BoxModel: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    txt1: {
        color: 'white',
        fontSize: 20,
    },
    txt2: {
        color: 'white',
        fontSize: 15,
    },
    txt3: {
        color: 'white',
        fontSize: 15,
    },
    back: {
        backgroundColor: "#b71540"
    }
});
