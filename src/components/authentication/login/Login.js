import axios from 'axios';
import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as Yup from 'yup';

const Login = () => {
    const [initialValues, setInitialValues] = useState({
        email: '',
        password: '',
    });

    const submitForm = (values, resetForm) => {
        console.log(' form values are here ', values);
        resetForm();
        axios.post('http://localhost:6969/chatbotuserlogin', values).then(res => {
            console.log(' res from the call ', res);
        })
    }
    return (
        <div>
            <Container >
                <Row >
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >Login Here</Col>
                </Row>
            </Container>
            <Container>
                <Formik
                    initialValues={initialValues} enableReinitialize={true}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().required("This field is Required!"),
                        password: Yup.string().required("This field is Required!"),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        submitForm(values, resetForm);
                    }}
                >
                    {({ errors, handleChange, setFieldValue, touched, handleSubmit, values }) => (
                        <form noValidate onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                                    <div >
                                        <label htmlFor="email">Email</label>
                                        <Field type="text" className="form-control" name="email" />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} >
                                    <label htmlFor="passw">Password</label>
                                    <Field type="password" className="form-control" name="password" />
                                </Col>
                            </Row>
                            <Button type="submit">Login</Button>
                        </form>
                    )}
                </Formik>
            </Container>
        </div>
    )
}

export default Login