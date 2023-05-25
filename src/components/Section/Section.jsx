import styled from 'styled-components';

const Section = ({ children, title = '' }) => {
  return (
    <main>
      <section>
        <h1 className="visually-hiddn">{title}</h1>
        {children}
      </section>
      
    </main>
  );
};

export const StyledSection = styled(Section)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0;
`;
