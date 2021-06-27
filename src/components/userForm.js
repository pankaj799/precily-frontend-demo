import React, {useState, useEffect} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import instance from '../axiosInstance';
import swal from 'sweetalert';

import {
    useParams
  } from "react-router-dom";

function UserForm() {

    const [valueparam, setValueparam] = useState('');
    const [inputusername, setInputusername] = useState('');
    var [count, setCount] = useState(0);

    let { value } = useParams();

    useEffect(() => {
        if(value)
        {
            setValueparam(value)
        }
        else{
            setValueparam('')
        }
    }, [value])



    const onAddFinish = (values) => {
        console.log('Success:', values);
        
        instance.post('createUser', {name : values.name , username : values.username})
                .then(response => {
                //   console.log(response)
                  swal("Good job!", "User Created!", "success");
                })
                .catch(err =>{
                //   console.log(err)
                  swal("Error Occured!", "Data is not saved!", "error");
                })
      };

      const onUpdateFinish = (values) => {
        console.log('Success:', values);
       
        instance.post('updateData', {name : values.name , username : values.username})
                .then(response => {
                //   console.log(response)
                  swal("Good job!", "User Updated!", "success");
                })
                .catch(err =>{
                //   console.log(err)
                  swal("Error Occured!", "Data is not saved!", "error");
                })
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      const valid = (valueparam) =>{
          
        return valueparam  ? String(valueparam.valueparam) : ''  
      }

    return (
        <div className="col-12 col-sm-8 pt-5 m-auto  ml-5 mr-5">
            <h3 className="text-center">{valueparam ? 'Edit': 'Add'} Data</h3>
            <Form
                className="mt-5"
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                // initialValues={{
                //     ["username"]: String(valueparam.valueparam) || ''
                //   }}
                fields={[
                    {
                      name: ["username"],
                      value: valueparam   ? String(valueparam) : inputusername,
                    },
                  ]}
                onFinish={valueparam ? onUpdateFinish : onAddFinish }
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                    
                >
                    <Input autoComplete="off" />
                </Form.Item>

                <Form.Item
                    label="Username"
                    name="username"
                    
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!'
                    },
                    ]}
                >
                    <Input autoComplete="off" onChange={(e)=>setInputusername(e.target.value)}/>
                </Form.Item>

                

                <Form.Item
                    wrapperCol={{
                    offset: 8,
                    span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={()=>setCount(count+1)}>
                    Submit
                    </Button>
                </Form.Item>
                </Form>

                <h3>Count : {count}</h3>
        </div>
    )
}

export default UserForm
