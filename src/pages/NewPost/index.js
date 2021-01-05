import React, { useState } from 'react';
import { View, Text, TouchableHighlight, TextInput, PermissionsAndroid, Platform, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import { useNavigation } from '@react-navigation/native'


import * as yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles';



export default function NewPost(){
    
    const navigate = useNavigation();



    // Check or get user permission
    async function hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
       
        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) {
          return true;
        }
       
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }



    const [ description, setDescription ] = useState('');



    const data = yup.object().shape({
        description: yup.string().min(2).required()
    })



    const [photo, setPhoto] = useState("");


    
    async function getImage(){
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }

        ImagePicker.openPicker({
            width: 600,
            height: 600,
            cropping: true,
            includeBase64: true
            }).then(image => {
                setPhoto({path: image.path, base64: image.data});
        });
    }



    function handleNewPost(){
        data.isValid({
            description: description
        }).then(function (valid) {

            if(photo != "" && valid){
                valid = true;
            }

            else{
                valid = false
            }
            
            alert(valid);
        })

    }
    

    return(
        <View style={styles.container}> 
            
            {/* Back Button */}
            <TouchableHighlight
                style={styles.back_btn}
                activeOpacity={0.6}
                underlayColor="none"
                onPress={() => navigate.goBack()}
            >
                <Text style={styles.input_name}>{'< Back'}</Text>
            </TouchableHighlight>

            
            <View style={styles.login_container}>
                <Text style={styles.title}>New Post</Text>

                {/* Photo */}
                <TouchableHighlight
                    style={styles.input_image}
                    activeOpacity={0.6}
                    underlayColor="rgba(255, 255, 255, 0.6)"
                    onPress={getImage}
                >
                    { photo === "" 
                        ?
                            <MaterialCommunityIcons name="camera" size={34} color="#000000"/>
                        :
                            <Image style={{width: 200, height: 200}} source={{uri: photo.path}}/>
                    }

                </TouchableHighlight>




                {/* Description */}
                <Text style={styles.input_name}>Description:</Text>
                <TextInput multiline={true} value={description} style={styles.input} onChangeText={(text) => { text.length >= 200 ? alert("You reached the max length!! 200 characters") : setDescription(text);}} keyboardType="default"/>



                {/* Post Button */}
                <TouchableHighlight
                    style={styles.btn}
                    activeOpacity={0.6}
                    underlayColor="none"
                    onPress={handleNewPost}
                >
                    <Text style={styles.input_name}>Post</Text>
                </TouchableHighlight>
            </View>


        </View>
    )
}