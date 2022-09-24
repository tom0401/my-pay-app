import React, {memo} from "react";
import {Card, Button} from 'antd';
import {useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom";

const IndexPage = memo(() => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // 点击支付
    const onPay = () => {
        dispatch({
            type: 'app/storeInPay',
            payload: true
        })
        navigate('/pay')
    }
    // 渲染
    return <Card title='支付首页'>
        <h3>欢迎使用xxx支付功能， 请点击按钮支付</h3>
        <Button type="primary" onClick={onPay}>
            支付
        </Button>
    </Card>
})
export default IndexPage
