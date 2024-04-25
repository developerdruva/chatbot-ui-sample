import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TodosItems from './TodosItems'
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import apiServices from '../utils/service-calls/apiServices';

const apiCall = 'https://chatbot-sample-58fa0276ef71.herokuapp.com/addTodo'

const TodosMainpage = () => {
    const [todoData, setTodoData] = useState(null);
    const [todosList, setTodosList] = useState(null);
    const [btnIndicator, setBtnIndicator] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const handleSubmit = () => {
        console.log('handle submit ', todoData);
        apiServices.todoAdd(todoData).then(res => {
            if (res.data?.status === 'success') {
                getTodos()
            }
        })
    }
    useEffect(() => {
        getTodos()
    }, [])
    const getTodos = () => {
        apiServices.getAllTodos().then(res => {
            if (res?.data) {
                setTodosList(res?.data)
            }
        })
    }
    const editTodo = (item) => {
        console.log(' item ', item)
        setBtnIndicator(true);
        setEditItem(item)
        return document.getElementById('todoDesc').value = item?.tododesc;
    }
    const updateTodo = (desc) => {
        apiServices?.updateTodoItem(editItem?.itemid,todoData?.todoDesc).then(res => {
            if (res) {
                alert(res?.data)
            }
        })
    }
    return (
        <div>
            <Container >
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <div className='fs-1 lead'>Todo Page</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                        <div className=''>
                            <input type="text" className="form-control" id='todoDesc' name='todoDesc' maxLength={32} placeholder='Describe your todo here'
                                onChange={(e) => {
                                    if (e?.target?.value != null) {
                                        setTodoData({ todoDesc: e?.target?.value })
                                        // e.target?.value = ''
                                    }
                                }}
                            />
                        </div>
                        <div>
                            {
                                btnIndicator ?
                                    <button onClick={() => { updateTodo(); document.getElementById('todoDesc').value = '' }} >Update</button>
                                    :
                                    <button onClick={() => { handleSubmit(); document.getElementById('todoDesc').value = '' }} >Submit</button>
                            }
                            {
                                btnIndicator ?
                                    <button onClick={() => { setBtnIndicator(false); document.getElementById('todoDesc').value = '' }}>Reset</button>
                                    : null
                            }
                        </div>
                    </Col>
                </Row>
                <TodosItems todoItems={todosList} getTodos={getTodos} editTodo={editTodo} />
            </Container>

        </div>
    )
}

export default TodosMainpage