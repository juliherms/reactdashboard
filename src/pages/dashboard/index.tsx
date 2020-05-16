import React from 'react';

import { Title,Form,Repositories } from './styles';
//react function component

const Dashboard: React.FC = () => {
    return (
        <>
            <Title>Find Repositories in the Github</Title>
            <Form>
                <input placeholder="input here" />
                <button type="submit">Search</button>
            </Form>
            <Repositories>
                <a href="teste">
                    <img
                        src="#"
                        alt="Juliherms Vasconcelos">
                    </img>
                    <div>
                        <strong>Microservicos</strong>
                        <p>teste stes teste teste</p>
                    </div>
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;