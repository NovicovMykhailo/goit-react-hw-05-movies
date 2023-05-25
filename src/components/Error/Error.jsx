const Error = ({message}) => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1>Oops somethin went wrong...</h1>
      {message && <p>••• {message}•••</p>}
    </div>
  );
};
export default Error;
