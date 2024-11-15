import React, { useState } from 'react';
import {SectionList, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, Button,} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const datasource = [
    {
        title: "Water",
        bgColor: "blue",
        icon: "droplet",
        data: [
            { name: 'Psyduck', cardImage: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_175-2x.png" },
            { name: 'Poliwhirl', cardImage: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_176-2x.png" },
        ],
    },
    {
        title: "Fire",
        bgColor: "red",
        icon: "fire",
        data: [
            { name: 'Charmander', cardImage: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_168-2x.png" },
            { name: 'Charmeleon', cardImage: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_169-2x.png" },
        ],
    },
    {
        title: "Electric",
        bgColor: "yellow",
        icon: "bolt",
        data: [
            { name: 'Pikachu', cardImage: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_173-2x.png" },
            { name: 'Zaptos', cardImage: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_202-2x.png" },
        ],
    },
];
const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 15,
        margin: 70,
        textAlign: 'left',
        fontWeight: 'bold'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black',
        padding: 10,
    },
    container: {
        padding: 20,
        flexDirection: 'column',
        backgroundColor: 'lightblue',
    },
    cardImage: {
        width: 180,
        height: 250,
    },
    addButton: {
        marginTop: 20,
    }});
const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
    </TouchableOpacity>);
const App = () => {
    return (
        <View style={[styles.container, {marginTop: 30}]}>
            <StatusBar hidden={true} />
            <Button title="Add Pokemon" onPress={() => {}} style={styles.addButton} />
            <Text></Text>
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, icon, bgColor } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={20} color="white" style={{ marginRight: 8 }} />,
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}/>
        </View>
    );
};

export default App;
