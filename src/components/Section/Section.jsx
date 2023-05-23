import styled from 'styled-components';

const Section = ({ children, title ='' }) => {
    return <section>
        <h1 className='visually-hiddn'>{title}</h1>
        {children}</section>;
};

export const StyledSection = styled(Section)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 24px;
`;

