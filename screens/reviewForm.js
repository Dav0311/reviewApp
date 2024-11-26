import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { formik } from 'formik';
import { TextInput } from 'react-native-gesture-handler';
import * as yup from 'yup';
import FlatButton from '../shared/bottom';

const ReviewSchema = yup.object ({
    title: yup.string().required().min(4),
    body: yup.string().require().min(20),
    rating: yup.string().required().test(
        'is-num-1-5',
        'rating must be a number 1-5',
        (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        }
    ),

});

 export default function ReviewForm( {addReview} ) {

    return(
        <View style={globalStyles.container}>
            <Formik
            initialValues={{ title:'', body:'', rating:'' }}
            validationSchema={ReviewSchema}
            onSubmit={(values, actions) => {
                actions.resetForm();
                addReview(values);
                //console.log(values);
            }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handChange('title')}
                            value={props.values.title}
                            onBlur = {props.handleBlur('title')}
                        />
                        <Text style={StyleSheet.errortext}>{ props.touched.title && props.error.title }</Text>

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handChange('body')}
                            value={props.values.body}
                            onBlur = {props.handleBlur('body')}
                        />
                        <Text style={StyleSheet.errortext}>{ props.touched.body && props.error.body }</Text>


                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handChange('rating')}
                            value={props.values.rating}
                            onBlur = {props.handleBlur('rating')}
                            keyboardType='numeric'
                        />
                        <Text style={StyleSheet.errortext}>{ props.touched.rating && props.error.rating }</Text>


                        {/* <Button title='submit' color='maroon' onPress={props.handleSubmit}/> */}
                        <FlatButton text='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )

 }