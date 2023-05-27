import css from './Cast.module.css'
const CastCard = ({ item, index }) => {
    const { name, popularity, character } = item
    

  return (
    <li className={css.actorCard}>
      <p className={css.index}>{index + 1}</p>
      <h3 className={css.name}>{`${name}`}</h3>
      {character && (
        <h4 className={css.character} title={character}>
          as: {character}
        </h4>
      )}
      <p className={css.popularity}>{Number.parseFloat(popularity).toFixed(1)} ☆</p>
    </li>
  );
};

export default CastCard;
