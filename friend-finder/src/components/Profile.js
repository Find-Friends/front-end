import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

export default function Profile() {

    const [search, setSearch] = useState([]); 

    const handleChange = e => {
        console.log(e.target.value);
        setSearch(e.target.value);
    };



    return (

<section classname='FormContainer'>

    <Form>
        <input className='input'
        type='text'
        placeholder='Enter First Name'
        name='firstname'
        onChange={handleChange}
        />
    </Form>
</section>

    );

}
