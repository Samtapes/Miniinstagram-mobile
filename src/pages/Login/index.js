import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';
import styles from './styles';
import  * as yup from 'yup';


export default function index(){
    const navigate = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const schema = yup.object().shape({
        email: yup.string().max(150).email().required(),
        password: yup.string().min(6).max(100).required()
    })

    function handleLogin(){
        schema.isValid({
            email: email,
            password: password
        }).then(function (valid) {
            if(valid) { 
                console.log("Can Navigate");
                navigate.navigate('Home');
            }

            else{
                alert("Invalid email or password")
            }
        })
        
        navigate.navigate('Home');
        console.log(email, password);
    }



    return(
        <View style={styles.container}>
            
            <View style={styles.login_container}>
                <Text style={styles.title}>Login</Text>


                {/* Email */}
                <Text style={styles.input_name}>Email:</Text>
                <TextInput autoCapitalize="none" value={email} style={styles.input} onChangeText={(text) => setEmail(text)} keyboardType="email-address" textContentType="emailAddress" placeholder="example@gmail.com" placeholderTextColor="gray"/>


                {/* Password */}
                <Text style={styles.input_name}>Password:</Text>
                <TextInput value={password} style={styles.input} onChangeText={(text) => setPassword(text)} textContentType="password" secureTextEntry={true} placeholder="Min 6 characters" placeholderTextColor="gray"/>



                {/* Button */}
                <TouchableHighlight
                    style={styles.btn}
                    activeOpacity={0.6}
                    underlayColor="none"
                    onPress={handleLogin}
                >
                    <Text style={styles.input_name}>Login</Text>
                </TouchableHighlight>
                
                <Link style={styles.link} to="/Register">Don't have an account?</Link>
            </View>


        </View>
    );
}