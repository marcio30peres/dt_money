import styled from "styled-components";

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