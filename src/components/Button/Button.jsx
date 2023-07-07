 const Button = ({onClick}) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
        <button
          style={{
            padding: '10px 25px',
            backgroundColor: 'rgb(52, 152, 219)',
            color: 'white',
            borderColor: 'white',
            borderRadius: 8,
            borderWidth: 1,
            fontSize: 20,
            outline: 'none',
            cursor: 'pointer',
          }}
          onClick={onClick}
        >
          Load More
        </button>
      </div>
    );
} 

export default Button