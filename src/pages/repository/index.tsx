import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './styles';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import  api  from '../../services/api';

//define params
interface RepositoryParams {
    repository: string;
}

interface Repository {
    full_name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
      login: string;
      avatar_url: string;
    };
  }
  
  interface Issue {
    id: number;
    title: string;
    html_url: string;
    user: {
      login: string;
    };
  }

//react function component
const Repository: React.FC = () => {

    //capture param navigation
    const { params } = useRouteMatch<RepositoryParams>();

    //list of repository
    const [repository, setRepository] = useState<Repository | null>(null);
    //list of issues
    const [issues, setIssues] = useState<Issue[]>([]);

    //init
    useEffect(() => {

        //find repository
        api.get(`repos/${params.repository}`).then(response => {
          setRepository(response.data);
        });
        //find issues by repository
        api.get(`repos/${params.repository}/issues`).then(response => {
          setIssues(response.data);
        });

      }, [params.repository]);

    return (
        <>
            <Header>
                <img src=".." alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Back
                </Link>
            </Header>
            {repository && (
            <RepositoryInfo>
                <header>
                    <img
                        src={repository.owner.avatar_url}
                        alt={repository.owner.login}
                    />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>{repository.stargazers_count}</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>{repository.forks_count}</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>{repository.open_issues_count}</span>
                    </li>
                </ul>
            </RepositoryInfo>
            )}
            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    );
}

export default Repository;