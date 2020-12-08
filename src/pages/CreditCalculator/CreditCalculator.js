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
        <div className="creditCalculator">
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
                            <h3>Условия кредита</h3>
                            <div className="conditions">
                                <div>
                                    <span>Процентная ставка:</span>
                                    <span>23% годовых</span>
                                </div>
                                <div>
                                    <span>Сумма:</span>
                                    <span>до 22 300 000 сум</span>
                                </div>
                                <div>
                                    <span>Срок:</span>
                                    <span>до 12 месяцев</span>
                                </div>
                            </div>
                            <div className="prompt">
                                <p>Форма предоставления:</p>
                                <span>Зачисление средств на пластиковую карту АКБ "Hamkorbank"</span>
                            </div>
                        </div>
                        <Button className="next-btn" onClick={() => setVisibleCalculate(true)}>Далее</Button>
                    </>
            }
        </div>
    )
}