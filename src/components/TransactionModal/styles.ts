import styled from "styled-components";
import {darken, transparentize} from 'polished'

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;

        border: 1px solid #d7d7d7;
        border-radius: .25rem;
        background: #e7e9ee;

        &::placeholder {
            color: var(--text-body);

        }
        
        & + input {
            margin-top: 1rem;
        }

    }
    
    button[type="submit"] {
        width: 100%;
        margin-top: 1.5rem;
        padding: 0 1.5rem;
        height: 4rem;

        background: var(--green);
        color: #fff;

        border-radius: .25rem;
        border: 0;
        
        transition: 200ms;

        &:hover {
            filter: brightness(.9);
        }
    }
`

export const TransactionType = styled.div`
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`

interface RadioBoxProps {
    isActive: boolean
    activeColor: 'green' | 'red'
}

const colors = {
    green: '#33cc95',
    red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: .25rem;

    background: ${(props) => props.isActive 
        ? transparentize(0.8, colors[props.activeColor]) 
        : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 200ms;

    &:hover {
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img {
        height: 1.5rem;
        width: 1.5rem;
        margin-right: .5rem;
    }
`