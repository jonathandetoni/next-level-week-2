import React from 'react';

//components
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

//css
import './style.css';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Este são os proffys dísponiveis."> 
                <form id="search-teachers">
                    <Input name="subject" type="text" label="Matéria" />
                    <Input name="week_day" type="text" label="Dia da Semana" />
                    <Input name="time" type="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;