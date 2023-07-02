


import React from 'react'
import { ElementAlertConteinerStyle } from './styles'
import {AiOutlineNotification} from 'react-icons/ai'
import { GoAlert } from "react-icons/go";
const ElemetAlert = ({ text }) => {
    return (
        <ElementAlertConteinerStyle>
            <p>
                <strong>
                    <u>{text}</u>
                </strong>
            </p>

            <div className='iconBox'><GoAlert className='icon'/></div>
        </ElementAlertConteinerStyle>
    )
}

export default ElemetAlert