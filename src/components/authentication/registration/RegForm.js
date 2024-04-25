import React from 'react'
import { Field, Formik } from 'formik';
import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import './RegStyles.css';

const RegForm = () => {
    const [initialValues, setInitialValues] = useState({
        firstName: '',
        lastName: '',
        logPassword: '',
        emailId: '',
        mobileNumber: '',
        city: '',
        country: '',
        pincode: ''
    });

    const submitForm = (values, resetForm) => {
        console.log('hi in submitform')
        console.log('values -> ', values)
    }
    return (
        <div>
            <div className='container pt-3'>

                <Formik
                    initialValues={initialValues} enableReinitialize={true}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required("This field is Required!"),
                        password: Yup.string().required("This field is Required!"),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        console.log(' hi in on submit')
                        submitForm(values, resetForm);
                    }}
                >
                    {({ errors, handleChange, setFieldValue, touched, handleSubmit, values }) => (
                        <form onSubmit={handleSubmit} noValidate className="regform w-25 " >
                            {JSON.stringify(values)}
                            <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 form-floating ">
                                <Field type="text" className="form-control " name="firstName" placeholder='' />
                                <label htmlFor="firstName" >First Name</label>
                            </Col>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                                    <label htmlFor="email">Email</label>
                                    <Field type="text" className="form-control" name="email" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                                    <label htmlFor="passw">Password</label>
                                    <Field type="password" className="form-control" name="password" />
                                </Col>
                            </Row>
                            <Button type='submit' className="btn btn-primary" >Submit</Button>
                            {/* <Button type="submit">Login</Button> */}
                        </form>
                    )}
                </Formik>
            </div>

            {/* 
                        <div className="col-md-7 p-5" style={{ borderLeft: "0px solid darkgrey" }}>
                            <div className="card-body">
                                <h5 className=" display-4 text-info">Welcome to myspace</h5>
                                <p className="card-text lead mt-4 ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text mt-5"><small className="text-muted">If you new user ? please <NavLink className="btn btn-link" to='/'>login</NavLink></small></p>
                            </div>
                        </div> */}
        </div>
    )
}

export default RegForm

// <div>
// <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 form-floating ">
//     <Field type="text" className="form-control " name="firstName" placeholder='' />
//     <label htmlFor="firstName" >First Name</label>
// </Col>
// <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 form-floating ">
//     <Field type="text" className="form-control " name="lastName" placeholder='' />
//     <label htmlFor="lastName" >Last Name</label>
// </Col>
// <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 form-floating " >
//     <Field type="password" className="form-control" name="logPassword" placeholder='' />
//     <label htmlFor="logPassword" >Password</label>
// </Col>
// <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 form-floating ">
//     <Field type="email" className="form-control" name="emailId" placeholder='email Id' />
//     <label htmlFor="emailId" >Email id</label>
// </Col>
// <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 form-floating ">
//     <Field type="tel" className="form-control" name="mobileNumber" placeholder="umobile" />
//     <label htmlFor="mobileNumber" >Mobile number</label>
// </Col>
// <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 form-floating ">
//     <Field type="text" className="form-control " name="city" placeholder='' />
//     <label htmlFor="city" >City</label>
// </Col>
// <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 form-floating ">
//     <Field type="text" className="form-control " name="country" placeholder='' />
//     <label htmlFor="country" >Country</label>
// </Col>
// <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 form-floating ">
//     <Field type="text" className="form-control " name="pincode" placeholder='' />
//     <label htmlFor="pincode" >Pincode</label>
// </Col>
// <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="mb-1 mt-2  ">
//     <button type="reset" className="btn btn-warning align-items-right">Reset</button>
//     &nbsp;
//     <Button type='submit' className="btn btn-primary" >Submit</Button>
// </Col>
// </div>


// <div className='d-flex justify-content-left border border-primary p-3'>

// </div>