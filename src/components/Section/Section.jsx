import styled from 'styled-components';

export const StyledSection = ({ children, title = '' }) => {
  return (
    <main>
      <section style={{ width: '100%', padding: '20px' }}>
        <h1 className="visually-hiddn">{title}</h1>
        {children}
      </section>
    </main>
  );
};
