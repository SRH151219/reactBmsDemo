import React,{Component,Fragment} from 'react'

import './goods.scss'

import { Table, Divider, Tag } from 'antd';

class Goods extends Component{
    constructor(props){
        super(props)
        this.state = {
            columns:[
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    // render: text => <a>{text}</a>,
                    render: text => <span>{text}</span>,



                  },
                  {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                  },
                  {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                  },
                  {
                    title: 'Tags',
                    key: 'tags',
                    dataIndex: 'tags',
                    render: tags => (
                      <span>
                        {tags.map(tag => {
                          let color = tag.length > 5 ? 'geekblue' : 'green';
                          if (tag === 'loser') {
                            color = 'volcano';
                          }
                          return (
                            <Tag color={color} key={tag}>
                              {tag.toUpperCase()}
                            </Tag>
                          );
                        })}
                      </span>
                    ),
                  },
                  {
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                      <span>
                        <a href='##'>Invite {record.name}</a>
                        <Divider type="vertical" />
                        <a>Delete</a>
                      </span>
                    ),
                  },
            ],
            data:[
                {
                    key: '1',
                    name: 'John Brown',
                    age: 32,
                    address: 'New York No. 1 Lake Park',
                    tags: ['nice', 'developer'],
                  },
                  {
                    key: '2',
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 1 Lake Park',
                    tags: ['loser'],
                  },
                  {
                    key: '3',
                    name: 'Joe Black',
                    age: 32,
                    address: 'Sidney No. 1 Lake Park',
                    tags: ['cool', 'teacher'],
                  }
            ]
        }
    }
    render(){
        let {columns,data} = this.state
        return(
            <Fragment>
                <div className="goods">
                      <Table columns={columns} dataSource={data} pagination={false}   size="small" bordered />
                </div>
            </Fragment>
        )
    }
}

export default Goods;