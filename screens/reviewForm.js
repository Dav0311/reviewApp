import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/bottom';
import { globalStyles } from '../styles/global';

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(10),
  rating: yup.string().required().test(
    'is-num-1-5',
    'rating must be a number 1-5',
    (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }
  ),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={styles.errortext}>
              {props.touched.title && props.errors.title}
            </Text>

            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.input}
              placeholder='Review body'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={styles.errortext}>
              {props.touched.body && props.errors.body}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder='Rating (1-5)'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              onBlur={props.handleBlur('rating')}
              keyboardType='numeric'
            />
            <Text style={styles.errortext}>
              {props.touched.rating && props.errors.rating}
            </Text>

            <FlatButton text='submit' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  errortext: {
    color: 'red',
    fontSize: 12,
  },
});
