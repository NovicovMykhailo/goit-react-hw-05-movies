import css from './Gallery.module.css'

const Gallery = ({ children }) => {

  return (
    <section>
      <h1 className={`${css.title} ${'visually-hidden'}`}>Gallery</h1>
      <ul className={css.galleryList}>{children}</ul>
    </section>
  );
};

export default Gallery;
