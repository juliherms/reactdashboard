import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
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
                        src="https://avatars0.githubusercontent.com/u/37042672?s=460&u=dd7ea84516915c0b161d24fa7841a8f6cd9ca79b&v=4"
                        alt="Juliherms Vasconcelos">
                    </img>
                    <div>
                        <strong>Microservicos</strong>
                        <p>teste stes teste teste</p>
                    </div>
                    <FiChevronRight size={20}></FiChevronRight>
                </a>
                <a href="teste">
                    <img
                        src="https://avatars0.githubusercontent.com/u/37042672?s=460&u=dd7ea84516915c0b161d24fa7841a8f6cd9ca79b&v=4"
                        alt="Juliherms Vasconcelos">
                    </img>
                    <div>
                        <strong>Microservicos</strong>
                        <p>teste stes teste teste</p>
                    </div>
                    <FiChevronRight size={20}></FiChevronRight>
                </a>
                <a href="teste">
                    <img
                        src="https://avatars0.githubusercontent.com/u/37042672?s=460&u=dd7ea84516915c0b161d24fa7841a8f6cd9ca79b&v=4"
                        alt="Juliherms Vasconcelos">
                    </img>
                    <div>
                        <strong>Microservicos</strong>
                        <p>teste stes teste teste</p>
                    </div>
                    <FiChevronRight size={20}></FiChevronRight>
                </a>
            </Repositories>
        </>
    );
}

export default Dashboard;