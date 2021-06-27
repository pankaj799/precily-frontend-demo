import React, {useState, useEffect} from 'react'
import { Table, Tag, Space } from 'antd';
import instance from '../axiosInstance';
import { Link } from "react-router-dom";

function Alldata() {

    const [alldata, setAllData] = useState([]);

    useEffect(() => {
            allDataSet()
      },[setAllData]);

      const allDataSet = () => {
        instance.get('allData')
            .then(response => {
                console.log(response)
                setAllData(response.data.data)
                
            })
            .catch(err =>{
                console.log(err)
            })
      };

    console.log(alldata)

    const  datarr = alldata.map(alldata => ({
            key: alldata._id,
            name: alldata.name,
            username: alldata.username,
        }));

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            render: text => <a>{text}</a>,
          },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
              // console.log(record)
              // console.log(text.username)
            <Space size="middle">
              <Link to={`/edit-data/${text.username}`} >Update</Link>
            </Space>
          ),
        },
      ];
      
    //   const datarr = [];

    
    return (
        <div className="col-12 col-sm-8 pt-5 m-auto">
            <h3 className="text-center">Update Data</h3>
            <Table columns={columns} dataSource={datarr} className="mt-5"/>
        </div>
    )
}

export default Alldata
