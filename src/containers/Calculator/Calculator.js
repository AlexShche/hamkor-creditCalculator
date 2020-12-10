import React, {useState} from "react"
import {Form, Checkbox, Button, Radio, Select, Slider} from "antd"

// components
import {Icon} from "../../components/Icon"
import {Success} from "../Success/Success"
import "./calculator.scss"

export const Calculator = ({backFromCalculator, successPage}) => {

    const {Option} = Select

    const [offer, setOffer] = useState(false)
    const [credit, setCredit] = useState(2300000)
    const [month, setMonth] = useState(3)
    const [typePayment, setTypePayment] = useState("annuity")
    const [creditView, setCreditView] = useState(796229)
    const [success, setSuccess] = useState(false)
    const [monthPayment, setMonthPayment] = useState([])

    const onFinish = (values) => {
        console.log('Success:', values)
        successPage()
        setSuccess(true)
    }

    const backToApplication = () => {
        console.log("back to application")
    }

    const result = (paramMonth, paramCredit, typeCredit) => {
        const percent = Number((23 / 12).toFixed(4)) / 100

        if (typeCredit === "annuity") {
            const numerator = Number((percent * Math.pow((1 + percent), paramMonth)).toFixed(5))
            const denominator = Number((Math.pow((1 + percent), paramMonth) - 1).toFixed(5))
            setCreditView(Math.round(paramCredit * (numerator / denominator)))
        } else {
            setMonthPayment([])
            for (let i = 0; i < paramMonth; i++) {
                const mainMonthlyDebt = Number((paramCredit / paramMonth).toFixed(4))
                const allRemainingDebt = Number(paramCredit - mainMonthlyDebt * i)
                setMonthPayment(prevState => {
                    return [
                        ...prevState,
                        Math.round(mainMonthlyDebt + allRemainingDebt * percent)
                    ]
                })
            }
        }
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
                                    <span
                                        className="credit">{String(credit).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}</span>
                                </span>
                                <Slider
                                    onChange={e => {
                                        result(month, e)
                                        setCredit(e)
                                    }}
                                    tooltipVisible={false}
                                    step={1000000}
                                    defaultValue={2300000}
                                    min={2300000}
                                    max={22300000}
                                />
                                <div className="range_slider">
                                    <span>2 300 000</span>
                                    <span>22 300 000</span>
                                </div>
                                <div className="month">
                                    <Radio.Group
                                        defaultValue="3"
                                        buttonStyle="solid"
                                        onChange={e => {
                                            result(+e.target.value, credit, typePayment)
                                            setMonth(+e.target.value)
                                        }}>
                                        <Radio.Button value="3">3 мес</Radio.Button>
                                        <Radio.Button value="6">6 мес</Radio.Button>
                                        <Radio.Button value="9">9 мес</Radio.Button>
                                        <Radio.Button value="12">12 мес</Radio.Button>
                                    </Radio.Group>
                                </div>
                                <span className="param_name">
                                    <Icon path="list"/>
                                    Ежемесячный платеж:
                                    <span className="month-payment">
                                        {
                                            typePayment !== "annuity" ?
                                                String(monthPayment[0]).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ") :
                                                String(creditView).replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ")
                                        }
                                        &nbsp;сум
                                    </span>
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
                                <Select
                                    defaultValue="annuity"
                                    showArrow={false}
                                    onChange={e => {
                                        result(month, credit, e)
                                        setTypePayment(e)
                                    }}
                                >
                                    <Option value="annuity">Аннуитет</Option>
                                    <Option value="differentiated">Диференцированный</Option>
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
                        <div className="navigation">
                            <div className="dots">
                                <div className="active"/>
                                <div/>
                            </div>
                            <Button disabled={!offer} onClick={onFinish} className="next-btn">Отправить заявку</Button>
                        </div>
                    </>
            }
        </div>
    )
}