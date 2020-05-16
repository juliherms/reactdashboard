import styled from 'styled-components';

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
        height:70px;
        padding: 0 24px;
        border:0;
        border-radius: 5px 0 0 5px;
    }

    button {
        width:210px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border:0;
        color:#FFF;
        font-weight:bold;

        &:hover {
            
        }
    }
`;