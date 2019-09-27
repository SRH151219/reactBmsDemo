import React, { Component, Fragment } from 'react';
import { Progress } from 'antd'

class Four extends Component {
    constructor(props) {
        super(props)
        this.state = {
            precent: 0
        }
    }
    render() {
        let { precent } = this.state
        return (
            <Fragment>
                <div>
                    <Progress
                        percent={precent}
                        strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }}
                        title="这是进度条"
                        status="active"
                        showInfo={true}
                        strokeWidth='20px'
                    />
                    <Progress type="dashboard" percent={75}
                        strokeColor={{
                            '0%': '#ff0',
                            '100%': '#00f',
                        }}
                    />
                    <Progress type="circle" percent={75} />

                    <Progress type="circle" percent={70} status="exception" />
                    <Progress type="circle" percent={100} />
                    {/* <Progress percent={50} status="active" />
                    <Progress percent={70} status="exception" />
                    <Progress percent={100} />
                    <Progress percent={50} showInfo={false} /> */}
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        let timer = null;
        let pre = 10;
        timer = setInterval(() => {
            pre += 10;
            this.setState({
                precent: pre
            }, () => {
                if (this.state.precent == 100) {
                    clearInterval(timer)
                    console.log('结束')
                }
            })

        }, 1000)
    }
}

export default Four;