import React from "react";
import s from './Contacts.module.css';
import c from '../common/styles/Container.module.css';
import {Title} from "../common/components/Title/Title";

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${c.container} ${s.container}`}>
                <Title title='My contacts'/>
                <form action="" className={s.form}>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='E-mail'/>
                    <textarea placeholder='Your message' name="" id="" cols="30" rows="10"></textarea>
                    <button className={s.submithBtn} type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}