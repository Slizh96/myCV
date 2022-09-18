import React from "react";
import s from './Udalenno.module.css'
import c from '../common/styles/Container.module.css'

export const Udalenno = ()=>{
    return(
        <div className={s.udalenno}>
            <div className={`${c.container} ${s.container}`}>
                <h3 className={s.title}>Рассматриваю вариант удаленной работы</h3>
                <a href='' className={s.button}>Нанять меня</a>
            </div>
        </div>
    )
}