import css from './Gallery.module.css'

const Gallery = ({ children }) => {

  return (
    <div className={css.section}>
      <h1 className={`${css.title} ${'visually-hidden'}`}>Gallery</h1>
      <ul className={css.galleryList}>{children}</ul>
    </div>
  );
};

export default Gallery;
