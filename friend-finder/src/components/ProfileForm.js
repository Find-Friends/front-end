import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


const ProfileForm = ({values, touched, errors, status}) => {

    const [user, setUser] = useState([]); 
    useEffect(()=>{
        status && setUser(user => [...user, status])
    }, [status])


    const handleChange = e => {
        console.log(e.target.value);
        setUser(e.target.value);
    };

    return (

<div className='FormContainer'>

    <Form>
        {/* FIRST NAME */}
        <Field className='input'
        type='text'
        placeholder='Enter First Name'
        name='firstname'/>
          {touched.firstname && errors.firstname && (
         <p className='error'>{errors.firstname}</p>
        )}

        {/* LAST NAME */}
        <Field className='input'
        type='text'
        placeholder='Enter Last Name'
        name='lastname'/>
          {touched.lastname && errors.lastname && (
         <p className='error'>{errors.lastname}</p>
        )}

        {/* AGE */}  
        <Field className='input'
        type='text'
        placeholder='Enter Age'
        name='age'/>
          {touched.age && errors.age && (
         <p className='error'>{errors.age}</p>
        )}

          {/* LOCATION */}  
          <Field className='input'
        type='text'
        placeholder='Enter Location'
        name='location'/>
          {touched.location && errors.location && (
         <p className='error'>{errors.location}</p>
        )}

    </Form>

</div>
    );
 };

const FormikProfile = withFormik({
    mapPropsToValues({firstname, lastname, age, location}) {
        return {
            firstname: firstname || "",
            lastname: lastname || "",
            age: age || "",
            location: location || ""
        };
    },

    validationSchema: Yup.object().shape({
        firstname: Yup.string().required('Please Enter First Name'),
        lastname: Yup.string().required('Please Enter Last Name'),
        age: Yup.string().required('Please Enter age'),
        location: Yup.string().required('Please Enter location')
    }),

    handleSubmit(values, {setStatus}) {
        axios.post('', values)
        .then(res => {setStatus(res.data); })
        .catch(err => console.log(err.response));
    }

})(ProfileForm);
export default FormikProfile;
console.log('formik profile', FormikProfile)