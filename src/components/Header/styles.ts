import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 1.25rem 1rem 7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: .25rem;
        height: 3rem;

        &:hover {
            filter: brightness(0.9);
            transition: 200ms;
        }
    }
`