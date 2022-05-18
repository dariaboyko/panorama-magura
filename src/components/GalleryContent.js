import classes from "./Gallery.module.css";
function GalleryContent() {
    const pictures = [
      { id: 1, src: require("../img/galleryPage/image1.jpg"), alt: "козиний сир" },
      { id: 2, src: require("../img/galleryPage/image2.jpg"), alt: "кози на горі" },
      { id: 3, src: require("../img/galleryPage/image3.jpg"), alt: "вечеря" },
      { id: 4, src: require("../img/galleryPage/image4.jpg"), alt: "сир" },
      { id: 5, src: require("../img/galleryPage/image5.jpg"), alt: "козенята" },
      { id: 6, src: require("../img/galleryPage/image6.jpg"), alt: "мангал" },
      { id: 7, src: require("../img/galleryPage/image7.jpg"), alt: "козиний сир" },
      { id: 8, src: require("../img/galleryPage/image8.jpg"), alt: "ліс взимку" },
      { id: 9, src: require("../img/galleryPage/image9.jpg"), alt: "коза" },
      { id: 10, src: require("../img/galleryPage/image10.jpg"), alt: "кози" },
    ];
  return (
    <div className={classes.picturesWrapper}>
      {pictures.map((picture) => {
        return (
          <img
          key={picture.id}
            className={classes.picture}
            src={picture.src}
            alt={picture.alt}
          />
        );
      })}
    </div>
  );
}
export default GalleryContent;
