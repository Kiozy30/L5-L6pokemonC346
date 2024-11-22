import React, {useState} from 'react'
import {datasource} from "./Data";
import {TextInput, View, Text, Button, StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

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

const Add = ({navigation}) => {
    const [name, setName] = useState('');
    const [card, setCard] = useState('');
    const [type, setType] = useState('Water');
    return (
        <View style={styling.container}>
            <Text style={styling.title}>Adding New Pokemon</Text>
            <Text></Text>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>What pokemon you are going to put in?:</Text>
                <TextInput style={{borderWidth: 1}} onChangeText= {(text)=> setName(text)}/>
            </View>
            <View style={{padding: 10}}>
                <Text style={{ fontWeight: 'bold' }}>Add the Image URL:</Text>
                <TextInput
                    style={{ borderWidth: 1, marginVertical: 10 }}
                    placeholder="Image URL"
                    onChangeText={setCard}
                />
            </View>
            <View style={{padding: 10}}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value)=>setType(value)}
                    items={[
                        {label:"Water", value:"Water"},
                        {label:"Fire", value:"Fire"},
                        {label:"Electric", value:"Electric"}
                    ]}
                />
                <Text></Text>
                <Text></Text>
            <Button title="SUBMIT"
                    onPress={() => {
                        let item = {name: name, cardImage: card};
                        let indexNum = 1;
                        if (type == 'Water') {
                            indexNum = 0;
                        }
                        datasource[indexNum].data.push(item);
                        navigation.navigate("Home");
                    }
                    }
            />
                <Text></Text>
                <Text></Text>
            <Button title="Back" onPress={() => {
                navigation.navigate("Home");
            }}/>
            </View>
        </View>
    );
};
export default Add;
