import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title,Form,Repositories, Error } from './styles';
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

    //responsible to control inputError
    const [inputError, setInputError] = useState('');
    //responsible to manipulate input searh
    const [newRepo,setNewRepo] = useState('');
    //responsible to storage repositories
    const [repositories, setRepositories] = useState<Repository[]>(() => {

        const storageRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if(storageRepositories){
            return JSON.parse(storageRepositories);
        } else {
            return [];
        }
    });

    /**
     * Monitor any change in repositories and save in the localstorage
     */
    useEffect(() => {
        localStorage.setItem('@GithubExplorer:repositories',JSON.stringify(repositories));
    }, [repositories])

    /**
     * Method responsible to add repositories
     * @param event 
     */
    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {

        event.preventDefault(); //block refresh form

        if(!newRepo){
            setInputError('Please input author/name from repository');
            return;
        }

        try{
            //call web api
            const response = await api.get<Repository>(`repos/${newRepo}`);
            const repository = response.data;

            //add response in my repositories
            setRepositories([... repositories, repository]);
            //clean input
            setNewRepo('');
            setInputError('');
        } catch (err){
            setInputError('Error with repository search');
        }
    }

    return (
        <>
            <Title>Find Repositories in the Github</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)} 
                    placeholder="input here" />
                <button type="submit">Search</button>
            </Form>

        {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}>
                        </img>
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight size={20}></FiChevronRight>
                    </Link>
                ))}
            </Repositories>
        </>
    );
}

export default Dashboard;