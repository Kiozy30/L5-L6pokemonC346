import React, { useState } from 'react';
import {SectionList, StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, Button,} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import {datasource} from "./Data";

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        textTransform: 'uppercase',
        textAlign: 'center',
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

const Home = ({navigation}) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
                onPress={() => {
                navigation.navigate("Edit", {index:index, type:section.title, name:item.name, cardImage:item.cardImage});
                }}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
            </TouchableOpacity>
        );
    };
    return (
        <View style={[styles.container, {marginTop: 30}]}>
            <StatusBar hidden={true}/>
            <Text style={styles.titleStyle}>Pokemon app</Text>
            <Button title="Add Pokemon" onPress={() => {navigation.navigate('Add')}} style={styles.addButton} />
            <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'left'}}>Here are the Different types of pokemon:</Text>
            <SectionList
                sections={datasource}
                keyExtractor={(item, index) => item.name + index}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, icon, bgColor } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={20} color="white" style={{ marginRight: 8 }} />
                        <Text style={styles.headerText}>{title}</Text>
                    </View>

                )}
            />
        </View>
    );
};

export default Home;
