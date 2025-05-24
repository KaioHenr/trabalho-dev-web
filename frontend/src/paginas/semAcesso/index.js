import React from 'react';
import { PageContainer, Message, ButtonContainer } from './styles.js';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    return (
        <>
            <PageContainer>
                <Message>Ops, página não encontrada!</Message>
                <ButtonContainer onClick={() => { navigate('/') }}>
                    Retornar
                </ButtonContainer>
            </PageContainer>
        </>
    );
};
export default NotFound;