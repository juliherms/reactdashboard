import styled from 'styled-components';
import { shade } from 'polished';

//Templete literals

export const Title = styled.h1`
    font-size: 48;
    color:#3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;


export const Form = styled.form`
    margin-top: 40px;
    max-width:700px;
    display:flex;
   
    input : {
        flex: 1;
        height:170px;
        padding: 0 24px;
        border:0;
        border-radius: 5px 0 0 5px;
        color:#3a3a3a;

    }

    button {
        width:210px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border:0;
        color:#FFF;
        font-weight:bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2,'#04d361')};
        }
    }
`;

export const Repositories = styled.form`
    margin-top:80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration:none;
        display:flex;
        align-items:center;

        img {
            width:64px;
            height: 64px;
            border-radius: 50%;
        }

        div{
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color:#a8a8b3;
                margin-top:4px;
            }
        }
    }
`;