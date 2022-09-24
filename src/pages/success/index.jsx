import React, {memo} from "react";
import {Result, Card, Button} from 'antd'
import moment from 'moment'
import {useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";

const IndexPage = memo(() => {
    const navigate = useNavigate()
    const {payNumber} = useSelector(state => state.app)
    return <Card title='成功页面'>
        <Result
            status="success"
            title="支付成功！"
            subTitle={`订单号:  ${moment().format('YYYYMMDDHHmmss')}${Math.floor(Math.random()*100)  } 支付金额：￥${payNumber}`}
            extra={[
                <Button type="primary" key="console" onClick={() => {
                    navigate('/', {replace: true})
                }}>
                    确认
                </Button>
            ]}
        />
    </Card>
})
export default IndexPage
