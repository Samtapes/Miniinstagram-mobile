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

    title: {
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 18,
        marginBottom: 5,
        color: 'white',
        textAlign: 'center'
    },

    sub_title: {
        fontSize: 18,
        marginTop: 5,
        marginBottom: 24,
        color: 'white',
        textAlign: 'center'
    },

    post: {
        marginBottom: 64
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

    plus_btn: {
        position: 'absolute',
        bottom: 10,
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRadius: 100,
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },

    plus_btn_text: {
        position: 'relative',
        fontSize: 38,
        color: '#ffffff'
    }
});

export default styles;