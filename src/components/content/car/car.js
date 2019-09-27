import React, { Component, } from 'react'
import { Table, Button, Row, Col, Popconfirm, Icon, Spin } from 'antd';
import './car.scss'

class Car extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // 表格数据,获取数据放入data中
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Jim Red',
          age: 32,
          address: 'London No. 2 Lake Park',
        }
      ],
      filteredInfo: null,
      sortedInfo: null
    }
  }
  // 条件发生变化时执行
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    // pagination:当前页,总页数; filters:筛选相关的数据;sorter:数据
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };
  // 导出当前页
  handleOnePage() {
    console.log('导出当前页')
  }

  // 导出所有数据
  handleAllPage() {
    console.log('导出所有数据')
  }

  // 删除数据
  handleDelData(){
    console.log('删除')
  }
  render() {
    let { sortedInfo, filteredInfo, data } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    // 表头
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        // 指定需要筛选菜单的列
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        // 筛选当前数据
        onFilter: (value, record) => record.name.includes(value),
        // 排序,a、b 为比较的两个行数据。
        sorter: (a, b) => a.name.length - b.name.length,
        // 
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      }
    ]

    return (
      <div className='car'>
        <Row className='bread'>
          <Col span={24}>面包屑</Col>
        </Row>
        <Spin tip='加载中......' spinning={false}>
          <Row className='btnCon'>
            <Col span={18}></Col>
            <Col span={6}>
              <Popconfirm
                title="Are you sure？"
                icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                cancelText='当前页'
                okText='所有数据'
                onCancel={this.handleOnePage}
                onConfirm={this.handleAllPage}
              >
                <Button type="primary" className='outputData'>导出数据</Button>
              </Popconfirm>

              <Popconfirm
                title="Are you sure？"
                icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                cancelText='取消'
                okText='确定'
                onConfirm={this.handleDelData}
              >
                <Button type="danger">删除数据</Button>
              </Popconfirm>
            </Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={20} className='tableStyle' >
              <div className="table-operations">
                <Button onClick={this.setAgeSort}>Sort age</Button>
                <Button onClick={this.clearFilters}>Clear filters</Button>
                <Button onClick={this.clearAll}>Clear filters and sorters</Button>
              </div>
              <Table columns={columns} dataSource={data} onChange={this.handleChange} pagination={false} bordered />
            </Col>
            <Col span={2}></Col>
          </Row>
        </Spin>


      </div>
    )
  }
}

export default Car;