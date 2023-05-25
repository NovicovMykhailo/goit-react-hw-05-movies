import Logo from 'images/loader.gif';

const Loader = () => {
  return (
    <div
      style={{
        height:' calc(100vh - calc(100vh - 100%))',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'column',
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
