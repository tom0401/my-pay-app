import React, {memo, useEffect, useMemo, useRef} from "react";
import { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {InputNumber, Input, Card, Button, message, Modal} from 'antd';

const IndexPage = memo(() => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {inPay} = useSelector(state => state.app)
    const [loaded, setLoaded] = useState(false)
    const [inputVal, setInputVal] = useState()
    const password = useRef()

    const btnDisabled = useMemo(() => {
        return inputVal === undefined || inputVal <= 0
    }, [inputVal])

    // 初始化页面
    useEffect(() => {
        if (!loaded) return
        if (inPay) {
            dispatch({
                type: 'app/storeInPay',
                payload: false
            })
        } else { // 不是从首页进来的返回首页
            navigate('/', {replace: true})
        }
    }, [inPay])
    // 密码弹窗确认
    const onConfirm = () => {
        return new Promise((resolve, reject) => {
            const pwd = password.current
            if (!pwd) { // 没输入密码
                message.error('请输入支付密码');
                reject()
            } else if (pwd !== '123456') { // 密码不正确
                message.error('支付密码不正确')
                reject()
            } else {
                const msg = message.loading('支付中...', 3, () => { // 模拟异步请求结束
                    const randomNum = Math.random()
                    if (randomNum < 0.1) { // 小概率失败（模拟超时、断网等情况）
                        message.warn('网络异常，请稍后重试！')
                        reject()
                    } else {
                        dispatch({
                            type: 'app/storePayNumber',
                            payload: inputVal
                        })
                        navigate('/success')
                        resolve()
                    }
                })
            }
        })
    }
    // 确定支付
    const onSubmit = () => {
        Modal.confirm({
            title: '请输入支付密码',
            content: <Input onChange={e => {
                password.current = e.target.value
            }}/>,
            onOk: onConfirm
        })
    }
    // 渲染
    return <Card title='支付页面'>
        <h3>请输入支付金额</h3>
        <InputNumber onChange={val => setInputVal(val)} step={1} precision={2} min={0.01} style={{width: 200}} placeholder='请输入金额'/>
        <Button type="primary" onClick={onSubmit} disabled={btnDisabled}>确定</Button>
    </Card>
})
export default IndexPage
