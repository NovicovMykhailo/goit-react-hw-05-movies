import Logo from 'images/loader.gif';

const Loader = () => {
  return (
    <div
      style={{
        height:'100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={Logo}
        alt="Loading"
        width="400"
        style={{ filter: 'invert(1)', mixBlendMode: 'multiply', objectFit: 'contain' }}
      />
    </div>
  );
};
export default Loader;
