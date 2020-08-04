import React from 'react';

import wppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

interface TeacherItemProps {
    name: string;
    subject: string;
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/13373295?s=460&v=4" alt="luisbaldissera"/>
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.subject}</span>
                </div>
            </header>
            <p>{props.children}</p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;