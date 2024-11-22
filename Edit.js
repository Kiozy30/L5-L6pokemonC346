import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button, Alert, StyleSheet} from "react-native";

const styling = StyleSheet.create({
    container: {
        backgroundColor: 'turquoise',
        flex:2,
        justifyContent: 'center',
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 30,
        textAlign: 'center',
    }
})

const Edit = ({navigation, route}) => {
    const [name, setName] = useState(route.params.name)
    const [cardImage, setCardImage] = useState(route.params.cardImage)
    return (
        <View style={styling.container}>
            <Text style={styling.title}>Editing or deleting the pokemon</Text>
            <Text></Text>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Pokemon Name:</Text>
                <TextInput value={name} style={{borderWidth: 1}} onChangeText= {(text)=> setName(text)}/>
                <Text style={{fontWeight: 'bold'}}>Pokemon Image:</Text>
                <TextInput value={cardImage} style={{borderWidth: 1}} onChangeText= {setCardImage}/>
            </View>
            <View style={ {padding: 10, flexDirection: 'row' , justifyContent: 'space-between'} }>
                <Button title="Save"
                        onPress={() => {
                            let item = {name: name, cardImage:cardImage};
                            let indexNum = 1;
                            if (route.params.type == 'Water') {
                                indexNum = 0;
                            }
                            datasource[indexNum].data[route.params.index].name=name;
                            datasource[indexNum].data[route.params.index].cardImage=cardImage;
                            navigation.navigate("Home");
                        }
                        }/>
                <Button title="Delete"
                        onPress={() => {
                            let indexnum = 1;
                            if (route.params.type === 'Water') {
                                indexnum = 0;
                            }
                            Alert.alert("Are you sure?", '',
                                [{text: 'Yes', onPress: () => {
                                        datasource[indexnum].data.splice(route.params.index, 1);
                                        navigation.navigate("Home");
                                    }},
                                    {text: 'No'}]);
                        }}/>

            </View>
            <Button title="Back" onPress={() => {
            navigation.navigate("Home");
        }}/>
        </View>

    );
};

export default Edit
