import React from 'react';
import { StyleSheet, StatusBar } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(20, 20, 30)'
    },

    login_container: {
        borderColor: 'white',
        borderWidth: 1,
        width: 300,
        padding: 30,
        borderRadius: 10
    },

    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'white',
        textAlign: 'center'
    },

    input_name: {
        color: 'white'
    },

    input: {
        borderColor: 'white',
        borderWidth: 1,
        color: 'white',
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 10,
        marginBottom: 34,
        marginTop: 12
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

    
    input_image: {
        width: 200,
        height: 200,
        backgroundColor: 'gray',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    back_btn: {
        position: 'absolute',
        top: StatusBar.currentHeight + 12,
        left: 24,
        alignSelf: 'flex-start',
        width: 70,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1
    },
})

export default styles;