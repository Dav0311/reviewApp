import React, { useState } from 'react';
import Card from '../shared/card';
import { StyleSheet, View, Text, Button,TouchableWithoutFeedback, Keyboard, FlatList, Modal, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from './reviewForm';


export default function Home ( {navigation} ) {

    const [reviews, setReviews ] = useState ([

        {
            title: 'Zelda, Breath of Fresh Air', rating: 5, body:'ipsum', key:'1'
        },
        {
            title: 'Zelda, Breath of Fresh Air 2', rating: 4, body:'ipsum', key:'2'
        },
        {
            title: 'Gotta catch them all (again) ', rating: 3, body:'ipsum', key:'3'
        },
        {
            title: 'Not so "Final" fantasy', rating: 2, body:'ipsum', key:'4'
        }

    ]);

    const [modalOpen, setModalOpen] = useState(false);

    const addReview = (review) => {

        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);

    }

    // const pressHandler = () => {

    //     navigation.navigate('ReviewDetails');
    //     //navigation.push('ReviewDetails');

    // }

     return (
        <View style={globalStyles.container}>

            {/* modal visibity is based on the modal of the boolean */}
            <Modal visible ={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                        <MaterialIcons
                        name='close'
                        size={24}
                        style={{ ...styles.modalToggle, ...styles.modalClose }}
                        onPress={() => setModalOpen(false)}
                        />
                    <ReviewForm addReview= { addReview } />
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList

            data={reviews}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item )}>
                    <Card>
                    <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </Card>
                </TouchableOpacity>
            )}
            
            />
            {/* <Button title='go to review dets' onPress={pressHandler}/> */}
        </View>
     )
}

const styles = StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center',
    },
    modalClose: {
        marginTop:20,
        marginBottom:0,
    },
    modalContent: {
        flex:1,
    }
})