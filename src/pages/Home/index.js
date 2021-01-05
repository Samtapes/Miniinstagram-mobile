import React from 'react';
import { View, Text, Image, Dimensions, TouchableHighlight, FlatList, SafeAreaView, StatusBar } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import DoubleClick from 'rn-double-click'
import styles from './styles';


import { useNavigation } from '@react-navigation/native';



export default function Home(){
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width);
    const imageWidth = dimensions.width;



    const navigation = useNavigation();


    
    const [posts, setPosts] = React.useState([
        {
            id: '1',
            user: 'Samtapes',
            image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg0MDE5NTU4MTEx/john-locke-hero.jpg',
            description: 'Note: When using an implementation like this, your image will not automatically resize when rotating your device, using split screen, etc. You will have to take care of those actions as well if you support multiple orientations...',
            favorited: false
        },

        {
            id: '2',
            user: 'Samtapes',
            image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg0MDE5NTU4MTEx/john-locke-hero.jpg',
            description: 'Note: When using an implementation like this, your image will not automatically resize when rotating your device, using split screen, etc. You will have to take care of those actions as well if you support multiple orientations...',
            favorited: false
        },

        {
            id: '3',
            user: 'Samtapes',
            image: 'https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg0MDE5NTU4MTEx/john-locke-hero.jpg',
            description: 'Note: When using an implementation like this, your image will not automatically resize when rotating your device, using split screen, etc. You will have to take care of those actions as well if you support multiple orientations...',
            favorited: false
        }
    ]);



    // Refresh the page when navigate to it
    React.useEffect(() => {
        const refresh = navigation.addListener('focus', () => {
            // alert("Refresh");
        })

        return refresh;

    }, [navigation]);



    function Post({item}){

        function favorite(id){
            console.log("Favorited!");

            setPosts(    posts.map(item => 
                item.id === id 
                ? {...item, favorited : !item.favorited} 
                : item )
            );
        }


        
        return(
            <View style={styles.post}>
                
                {/* User */}
                <Text style={styles.user_name}>{item.user}</Text>
        
                {/* Image */}
                <DoubleClick onClick={() => favorite(item.id)}>
                    <Image style={{width: imageWidth, height: imageHeight}} source={{uri: item.image}}/>
                </DoubleClick>
        
                <TouchableHighlight
                    underlayColor="none"
                    onPress={() => favorite(item.id)}
                >
                    <MaterialCommunityIcons style={styles.post_icon} name={item.favorited ? "heart" : "heart-outline"} size={26} color="#ffffff" />
                </TouchableHighlight>
        
                {/* Description */}
                <Text style={styles.post_description}>{item.description}</Text>

            </View>
        )
    }



    return(
        <View style={styles.container}>

            <SafeAreaView style={{marginTop: StatusBar.currentHeight}}>
                <FlatList
                    data={posts}
                    renderItem={Post}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>

        </View>
    )
}