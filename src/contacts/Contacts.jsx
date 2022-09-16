import React from "react";
import s from './Contacts.module.css';
import c from '../common/styles/Container.module.css';

export const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={`${c.container} ${s.container}`}>
                <h3 className={s.title}>My contacts</h3>
                <form action="" className={s.form}>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='e-mail'/>
                    <textarea placeholder='your message' name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    )
}