import React, {useState} from "react"
import {Button} from "antd"

//components
import {Icon} from "../../components/Icon"
import {Calculator} from "../../containers/Calculator/Calculator"
import "./creditCalculator.scss"

export const CreditCalculator = () => {

    const [visibleCalculate, setVisibleCalculate] = useState(false)

    const handleBack = () => {
        console.log("to application")
    }

    return (
        <div className={`${visibleCalculate ? "calculatorVisible" : ""} creditCalculator`}>
            {
                visibleCalculate ? <Calculator backFromCalculator={() => setVisibleCalculate(false)} /> :
                    <>
                        <div className="head">
                            <Button
                                icon={<Icon path="arrow"/>}
                                onClick={handleBack}
                            />
                            <h4>Онлайн микрозайм</h4>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <h3>Условия кредита</h3>
                                <div className="conditions">
                                    <div className="item">
                                        <span>Процентная ставка:</span>
                                        <div>
                                            <Icon path="percent" />
                                            23% годовых
                                        </div>
                                    </div>
                                    <div className="item">
                                        <span>Сумма:</span>
                                        <div>
                                            <Icon path="clock" />
                                            до 22 300 000 сум
                                        </div>
                                    </div>
                                    <div className="item">
                                        <span>Срок:</span>
                                        <div>
                                            <Icon path="dollar" />
                                            до 12 месяцев
                                        </div>
                                    </div>
                                    <div className="item attention">
                                        <span>Форма предоставления:</span>
                                        <div>
                                            <Icon path="attention" />
                                            Зачисление средств на пластиковую карту АКБ "Hamkorbank"
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="navigation">
                            <div className="dots">
                                <div className="active"/> <div/> <div/>
                            </div>
                            <Button className="next-btn" onClick={() => setVisibleCalculate(true)}>Далее</Button>
                        </div>
                    </>
            }
        </div>
    )
}