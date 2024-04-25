import React from 'react'
import { Col, Row } from 'react-bootstrap'
import axiosLoaderCall from '../utils/api-utils/axiosLoaderCall'
import apiServices from '../utils/service-calls/apiServices'

const TodosItems = ({ todoItems, getTodos, editTodo }) => {
    const deleteItem = (item) => {
        apiServices?.deleteTodo(item?.itemid).then(res => {
            if (res) {
                getTodos();
                alert(res?.data?.message)
            }
        })
    }
    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}   >
                    <div>
                        {
                            todoItems?.map(item => {
                                return <div > {item?.tododesc} <button onClick={() => deleteItem(item)} >Delete</button>
                                    <button onClick={() => editTodo(item)}    >Edit</button>
                                </div>
                            })
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default TodosItems