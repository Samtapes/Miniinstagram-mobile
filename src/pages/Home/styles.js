import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(20, 20, 30)'
    },

    post: {
        marginBottom: 64,
        marginTop: 10
    },

    user_name: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 10,
        color: 'white',
        textAlign: 'left'
    },

    post_description: {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        color: 'white',
        textAlign: 'left'
    },

    post_icon: {
        marginTop: 10,
        marginLeft: 10,
    },

    input_name: {
        color: 'white'
    },

    btn: {
        alignSelf: 'center',
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1
    },

    link: {
        textAlign: 'center',
        color: 'white',
        marginTop: 10
    },
});

export default styles;