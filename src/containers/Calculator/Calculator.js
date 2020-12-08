import React, {useState} from "react"
import {Form, Checkbox, Button, Radio, Select} from "antd"

// components
import {Icon} from "../../components/Icon"
import {Success} from "../Success/Success"
import "./calculator.scss"

export const Calculator = ({backFromCalculator}) => {

    const {Option} = Select

    const [offer, setOffer] = useState(false)
    const [success, setSuccess] = useState(false)

    const onFinish = (values) => {
        console.log('Success:', values)
        setSuccess(true)
    }

    return (
        <div className="calculator">
            {
                success ? <Success/> :
                    <>
                        <div className="head">
                            <Button
                                icon={<Icon path="arrow"/>}
                                onClick={() => backFromCalculator()}
                            />
                            <h4>Кредитный калькулятор</h4>
                        </div>
                        <Form>
                            <h3>Калькулятор</h3>
                            <div className="params">
                                <span className="param_name">
                                    <Icon path="dollar"/>
                                    Сумма кредита:
                                </span>
                                <Select defaultValue="22300000">
                                    <Option value="22300000">22 300 000</Option>
                                    <Option value="20300000">20 300 000</Option>
                                    <Option value="15300000">15 300 000</Option>
                                    <Option value="10300000">10 300 000</Option>
                                    <Option value="2300000">2 300 000</Option>
                                </Select>
                                <div className="month">
                                    <Radio.Group defaultValue="3" buttonStyle="solid">
                                        <Radio.Button value="3">3 мес</Radio.Button>
                                        <Radio.Button value="6">6 мес</Radio.Button>
                                        <Radio.Button value="9">9 мес</Radio.Button>
                                        <Radio.Button value="12">12 мес</Radio.Button>
                                    </Radio.Group>
                                </div>
                                <span className="param_name">
                                    <Icon path="list"/>
                                    Ежемесячный платеж:
                                    <span className="month-payment">640 000 сум</span>
                                </span>
                                <span className="param_name">
                                    <Icon path="percent"/>
                                    Процентная ставка:
                                    <span>23%</span>
                                </span>
                            </div>

                            <div className="typePayment">
                                <span className="param_name">
                                    <Icon path="listSuccess"/>
                                    Вид платежа:
                                </span>
                                <Select defaultValue="annuity">
                                    <Option value="annuity">Аннуитет</Option>
                                    <Option value="Differentiated">Диференцированный</Option>
                                </Select>
                            </div>

                            <Form.Item
                                name="offer"
                                valuePropName="checked"
                                className="offer"
                            >
                                <Checkbox onChange={(e) => setOffer(e.target.checked)}>
                                    Я принимаю условия <span>договора оферты</span>
                                </Checkbox>
                            </Form.Item>
                        </Form>
                        <Button disabled={!offer} onClick={onFinish} htmlType="submit" className="next-btn">
                            Далее
                        </Button>
                    </>
            }
        </div>
    )
}