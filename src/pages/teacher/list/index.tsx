import React from 'react';
import PageHeader from '../../../components/PageHeader';
import TeacherItem from '../../../components/TeacherItem';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" >
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da Semana</label>
                        <input type="text" id="week-day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Horário</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>
            <main>
                <TeacherItem name="Luís Baldissera" subject="Matemática">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    <br/> <br/>
                    Aliquid, dolor. Dolore nemo explicabo praesentium eos culpa reiciendis
                    quas repellat officiis similique autem non laborum, aut corporis quidem
                    quam, minus magni!
                </TeacherItem>
            </main>
        </div>
    );
}

export default TeacherList;