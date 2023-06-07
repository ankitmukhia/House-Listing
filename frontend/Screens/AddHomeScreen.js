import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator
} from "react-native";
import { Formik } from "formik";
import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import * as HouseAction from '../Redux/Action/HouseAction'
import { useState } from "react";

const formSchema = yup.object({
  title: yup.string().required().min(3).max(50),
  price: yup.number().required(),
  yearBuilt: yup.number().required(),
  image: yup.string().required(),
  address: yup.string().required().min(10).max(50),
  description: yup.string().required().min(10),
  homeType: yup.string().required()
})

const AddHomeScreen = () => {
  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(false)

 if(isLoading) {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" />
    </View>
  )
 }

  
  return (
    <KeyboardAvoidingView  keyboardVerticalOffset={100} style={{ flex: 1}}>
        <ScrollView>
          <Formik
            initialValues={{ title: "", image: "", homeType: "", price: "", yearBuilt: "", address: "", description: ""}}
            validationSchema={formSchema}
            onSubmit={(values) => {
              setIsLoading(true)
              dispatch(HouseAction.createHome(values))
              .then(() => {
                setIsLoading(false)
                Alert.alert('Created Successfully')
              }).catch(() => {
                setIsLoading(false)
                Alert.alert('An error occurred. Try Again', [{ text: 'OK'}])
              })
            }}
          >
            {(props) => (
              <View style={styles.form}>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Title</Text>
                  <TextInput onBlur={props.handleBlur('title')} value={props.values.title} onChangeText={props.handleChange('title')} style={styles.input} />
                  <Text style={styles.error}>{props.touched.title && props.errors.title}</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Image URL</Text>
                  <TextInput onBlur={props.handleBlur('image')} value={props.values.image} onChangeText={props.handleChange('image')} style={styles.input} />
                  <Text style={styles.error}>{props.touched.image && props.errors.image}</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Home Type</Text>
                  <TextInput onBlur={props.handleBlur('homeType')} value={props.values.homeType} onChangeText={props.handleChange('homeType')} style={styles.input} />
                  <Text style={styles.error}>{props.touched.image && props.errors.homeType}</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Price</Text>
                  <TextInput onBlur={props.handleBlur('price')} value={props.values.price} onChangeText={props.handleChange('price')} style={styles.input} keyboardType="numeric" />
                  <Text style={styles.error}>{props.touched.price && props.errors.price}</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Year Built</Text>
                  <TextInput onBlur={props.handleBlur('yearBuilt')} value={props.values.yearBuilt} onChangeText={props.handleChange('yearBuilt')} style={styles.input} keyboardType="numeric" />
                  <Text style={styles.error}>{props.touched.yearBuilt && props.errors.yearBuilt}</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Address</Text>
                  <TextInput onBlur={props.handleBlur('address')} value={props.values.address} onChangeText={props.handleChange('address')} style={styles.input} multiline />
                  <Text style={styles.error}>{props.touched.address && props.errors.address}</Text>
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.label}>Description</Text>
                  <TextInput onBlur={props.handleBlur('description')} value={props.values.description} onChangeText={props.handleChange('description')} style={styles.input} multiline />
                  <Text style={styles.error}>{props.touched.description && props.errors.description}</Text>
                </View>
                <View style={styles.buttonContainer}>
                  <Button title="Add Home" onPress={props.handleSubmit} color="orange" borderRadius="5px" />
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddHomeScreen;

const styles = StyleSheet.create({
  form: {
    margin: 20,
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
  },
  formGroup: {
    width: "100%",
  },
  label: {
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  error: {
    color: '#F15A59'
  },  
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
