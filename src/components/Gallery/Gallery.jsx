import css from './Gallery.module.css';

const Gallery = ({ children }) => {
  return <ul className={css.galleryList}>{children}</ul>;
};

export default Gallery;
