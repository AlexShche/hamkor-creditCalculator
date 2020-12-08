import React, {useState} from "react"
import {Form, Checkbox, Button, Radio, Modal} from "antd"

// components
import {Icon} from "../../components/Icon"
import "./calculator.scss"
import {Success} from "../Success/Success";

export const Calculator = ({backFromCalculator}) => {

    const [offer, setOffer] = useState(false)
    const [annuity, setAnnuity] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [changeAnnuity, setChangeAnnuity] = useState(null)

    const [success, setSuccess] = useState(false)

    const onFinish = (values) => {
        console.log('Success:', values)
        setSuccess(true)
    }

    const handleOk = () => {
        setIsModalVisible(false)
        changeAnnuity === 1 ? setAnnuity(false) : setAnnuity(true)
    }

    const handleCancel = () => setIsModalVisible(false)

    return (
        <div className="calculator">
            {
                success ? <Success/> :
                    <>
                        <Modal
                            className="modalAnnuity"
                            title="Вид платежа"
                            visible={isModalVisible}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            style={{bottom: 0}}
                            footer={[
                                <Button className="next-btn" key="change" onClick={handleOk}>
                                    Изменить
                                </Button>,
                            ]}
                        >
                            <Radio.Group defaultValue={1} onChange={e => setChangeAnnuity(e.target.value)}>
                                <Radio value={1}>Аннуитет</Radio>
                                <Radio value={2}>Дифференцированный</Radio>
                            </Radio.Group>
                        </Modal>
                        <div className="head">
                            <Button
                                icon={<Icon path="arrow"/>}
                                onClick={() => backFromCalculator()}
                            />
                            <h4>Онлайн микрозайм</h4>
                        </div>
                        <Form onFinish={onFinish}>
                            <div className="fields">
                                <div>
                                    <span className="name">Сумма кредита:</span>
                                    <span className="result">22 300 000 сум</span>
                                </div>
                                <div>
                                    <span className="name">Срок кредита:</span>
                                    <Radio.Group defaultValue="3" buttonStyle="solid">
                                        <Radio.Button value="3">3 мес</Radio.Button>
                                        <Radio.Button value="6">6 мес</Radio.Button>
                                        <Radio.Button value="9">9 мес</Radio.Button>
                                        <Radio.Button value="12">12 мес</Radio.Button>
                                    </Radio.Group>
                                </div>
                                <div>
                                    <span className="name">Ежемесячный платеж:</span>
                                    <span className="result month-payment">640 000 сум</span>
                                </div>
                                <div>
                                    <span className="name">Процентная ставка:</span>
                                    <span className="result">23%</span>
                                </div>
                            </div>

                            <div className="typePayment">
                                <span>Вид платежа</span>
                                <div onClick={() => setIsModalVisible(true)}>
                                    {annuity ? "Дифференцированный" : "Аннуитет"}
                                    <Icon path="downArrow"/>
                                </div>
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

                            <Form.Item>
                                <Button disabled={!offer} htmlType="submit" className="next-btn">
                                    Далее
                                </Button>
                            </Form.Item>
                        </Form>
                    </>
            }
        </div>
    )
}