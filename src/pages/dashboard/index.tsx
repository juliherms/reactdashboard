import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title,Form,Repositories } from './styles';
import api from '../../services/api';

/**
 * using github api return fields 
 */
interface Repository {
    full_name: string;
    description: string;
    owner:{
        login: string;
        avatar_url:string;
    };
}

//react function component
const Dashboard: React.FC = () => {

    //responsible to manipulate input searh
    const [newRepo,setNewRepo] = useState('');
    //responsible to storage repositories
    const [repositories, setRepositories] = useState<Repository[]>([]);

    /**
     * Method responsible to add repositories
     * @param event 
     */
    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {

        event.preventDefault(); //block refresh form

        //call web api
        const response = await api.get<Repository>(`repos/${newRepo}`);
        const repository = response.data;

        //add response in my repositories
        setRepositories([... repositories, repository]);

        //clean input
        setNewRepo('');
    }


    return (
        <>
            <Title>Find Repositories in the Github</Title>
            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)} 
                    placeholder="input here" />
                <button type="submit">Search</button>
            </Form>

            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}>
                        </img>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20}></FiChevronRight>
                    </a>
                ))}
            </Repositories>
        </>
    );
}

export default Dashboard;