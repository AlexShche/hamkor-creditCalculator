import React from "react"
import {Button} from "antd"

export const Success = ({creditId}) => {

    const backToApplication = () => {
        console.log("to application")
    }

    return(
        <div className="successRequest">
            <h3>Спасибо</h3>
            <p>
                Ваша заявка №{creditId} принята. <br/>
                Мы свяжемся с вами <br/> в ближайшее время
            </p>
            <div className="navigation">
                <div className="dots">
                    <div className="active"/>
                    <div className="active"/>
                </div>
                <Button onClick={backToApplication} className="next-btn">Вернуться на главную</Button>
            </div>
        </div>
    )
}