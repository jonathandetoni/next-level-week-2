import React from 'react';

//components
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

//css
import './styles.css';

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas." 
                description="O primeiro passo é preencher esse formulário de inscrição."    
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" type="text" label="Nome Completo" />
                    <Input name="avatar" type="text" label="Avatar" />
                    <Input name="whatsapp" type="text" label="WhatsApp" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input name="subject" type="text" label="Matéria" />
                    <Input name="cost" type="text" label="Cursto da sua hora por aula" />
                </fieldset>
            </main>
        </div>
    );
}

export default TeacherForm;