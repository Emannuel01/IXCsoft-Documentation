import Styled from "styled-components";
import SideBar from '../components/SideBar';
import TitleComponent from '../components/titleComponent';
import ParagraphComponent from '../components/paragraphComponent';
import CodeComponent from '../components/codeComponent';

import getData from './index.js'
import { api, useFetch } from "../hooks/useEffect";
import { useState } from "react";
import { useEffect } from "react";

function ReferencesPage() {

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic <Token Base64>',
        'ixcsoft': 'listar'
    };
    const { data: menu, isFetching: loadingMenu } = useFetch('/menu');

    return (
        <>
            <SideBar />
            <ContentContainer >
                <TextsContainer>

                    <TitleComponent text="Cliente" />
                    <ParagraphComponent text="Endpoint referente a requisições realizadas sobre a tabela cliente no banco de dados." />

                    <TitleComponent text="Headers" />

                    <CodeComponent {...headers} />

                    <TitleComponent text="Dados do body" />
                    {loadingMenu == true ? <p>carregando...</p> : <CodeComponent {...menu} />}
                </TextsContainer>
            </ContentContainer >
        </>
    )
};

const ContentContainer = Styled.div`
    width: calc(100% - 300px);
    height: 100vh;
    display: flex;
    float: right;
    justify-content: center;
    background-color: #fffff;
`
const TextsContainer = Styled.div`
    width: calc(100% - 30%);
    height: 100vh;
    margin-top: 100px;
    margin-bottom: 100px;
    float: right;
`

export default ReferencesPage; 