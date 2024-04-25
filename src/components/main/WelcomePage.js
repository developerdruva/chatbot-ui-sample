import React, { useEffect, useState } from 'react'
import NavbarHeader from './NavbarHeader'
import './CSS/WelcomeStyles.css'
import { Card, Container } from 'react-bootstrap';
import apiServices from '../utils/service-calls/apiServices';
import { useSelector } from 'react-redux';

const WelcomePage = ({ themeMode, setThemode }) => {
    const [myDevelopments, setMyDevelopments] = useState(null);
    const themeModeFrmRdx = useSelector(state => state?.themeModeState?.themeMode);

    const getMyDevelopments = () => {
        apiServices.getMyDevelopments().then(res => {
            console.log('res ', res)
            setMyDevelopments(res?.data);
        })
    }
    useEffect(() => {
        getMyDevelopments()
    }, [])
    return (
        <div >
            <Container className='vh-100'>
                <div className='d-flex justify-content-center'>
                    <div className='display-6 p-5 pb-3 mt-5 headerText'>
                        Welcome to <span className='fw-bold'>myspace</span>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='subHeadText'>
                        This is the e-website for all developments of myspace project by rajesh kumar.
                    </div>
                </div>
                <div className='mt-5 d-flex justify-content-start text-secondary lead fs-6'>Below are the sample projects of my:</div>

                <div className={`mt-4 d-flex  developmentsCard `}>

                    {
                        myDevelopments?.map((item, index) => (
                            <Card key={index} className={`m-1 col-md-4 eachCard ${themeModeFrmRdx ? 'bg-light' : 'bg-secondary'}`}>
                                {/* <Card.Header></Card.Header> */}
                                <Card.Title><a href={item?.blog_url} about='_blank' >{item?.blog_name}</a></Card.Title>
                                <div>{item?.blog_header}</div>
                                <Card.Body>
                                    {item?.blog_desc}
                                </Card.Body>
                            </Card>
                        ))
                    }

                </div>
            </Container>
        </div>
    )
}

export default WelcomePage