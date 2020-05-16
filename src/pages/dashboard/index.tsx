import React from 'react';

import { Title,Form } from './styles';
//react function component

const Dashboard: React.FC = () => {
    return (
        <>
            <Title>Find Repositories in the Github</Title>
            <Form>
                <input placeholder="input here" />
                <button type="submit">Search</button>
            </Form>
        </>
    );
}

export default Dashboard;