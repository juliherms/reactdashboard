import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

//define params
interface RepositoryParams {
    repository: string;
}

//react function component
const Repository: React.FC = () => {

    //capture param navigation
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src=".." alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Back
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img src="" alt="Rocketseat"/>
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Open Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>
            <Issues>
                <Link to="blablablac">
                    <div>
                        <strong>repository.full_name</strong>
                        <p>repository.description</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
}

export default Repository;