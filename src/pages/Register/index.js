import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import  * as yup from 'yup';


export default function index(){
    const navigate = useNavigation();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");



    // Pre defining data entry
    const schema = yup.object().shape({
        name: yup.string().max(200).required(),
        email: yup.string().max(150).email().required(),
        password: yup.string().min(6).max(100).required(),
        confirmPassword: yup.string().min(6).max(100).required()
    })



    // Register function
    function handleRegister(){
        schema.isValid({
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }).then(function (valid) {
            if(valid) { 
                if(password === confirmPassword){
                    navigate.navigate('Home');
                    console.log("Can Navigate");
                }

                else{
                    alert("The passwords does not matches")
                }
            }

            else{
                alert("Invalid credentials");
            }
        })
    }



    return(
        <View style={styles.container}>
                        
            {/* Button */}
            <TouchableHighlight
                style={styles.back_btn}
                activeOpacity={0.6}
                underlayColor="none"
                onPress={() => navigate.goBack()}
            >
                <Text style={styles.input_name}>{'< Back'}</Text>
            </TouchableHighlight>

            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center'}}>
                <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center'}}>
                    <View style={styles.login_container}>
                        <Text style={styles.title}>Register</Text>


                        {/* Name */}
                        <Text style={styles.input_name}>Full Name:</Text>
                        <TextInput value={name} style={styles.input} onChangeText={(text) => setName(text)} textContentType="name" placeholder="Your name" placeholderTextColor="gray"/>


                        {/* Email */}
                        <Text style={styles.input_name}>Email:</Text>
                        <TextInput autoCapitalize="none" value={email} style={styles.input} onChangeText={(text) => setEmail(text)} keyboardType="email-address" textContentType="emailAddress" placeholder="example@gmail.com" placeholderTextColor="gray"/>


                        {/* Password */}
                        <Text style={styles.input_name}>Password:</Text>
                        <TextInput value={password} style={styles.input} onChangeText={(text) => setPassword(text)} textContentType="password" secureTextEntry={true} placeholder="Min 6 characters" placeholderTextColor="gray"/>


                        {/* Confirm Password */}
                        <Text style={styles.input_name}>Confirm Password:</Text>
                        <TextInput value={confirmPassword} style={styles.input} onChangeText={(text) => setConfirmPassword(text)} textContentType="password" secureTextEntry={true} placeholder="Min 6 characters" placeholderTextColor="gray"/>



                        {/* Button */}
                        <TouchableHighlight
                            style={styles.btn}
                            activeOpacity={0.6}
                            underlayColor="none"
                            onPress={handleRegister}
                        >
                            <Text style={styles.input_name}>Register</Text>
                        </TouchableHighlight>

                    </View>
                </KeyboardAvoidingView>
            </ScrollView>


        </View>
    );
}