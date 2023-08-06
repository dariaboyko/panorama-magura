function GalleryContent() {
  const pictures = [
    {
      id: 1,
      src: "/img/galleryPage/image1.jpg",
      alt: "козиний сир",
    },
    {
      id: 2,
      src: "/img/galleryPage/image2.jpg",
      alt: "кози на горі",
    },
    { id: 3, src: "/img/galleryPage/image3.jpg", alt: "вечеря" },
    { id: 4, src: "/img/galleryPage/image4.jpg", alt: "сир" },
    { id: 5, src: "/img/galleryPage/image5.jpg", alt: "козенята" },
    { id: 6, src: "/img/galleryPage/image6.jpg", alt: "мангал" },
    {
      id: 7,
      src: "/img/galleryPage/image7.jpg",
      alt: "козиний сир",
    },
    { id: 8, src: "/img/galleryPage/image8.jpg", alt: "ліс взимку" },
    { id: 9, src: "/img/galleryPage/image9.jpg", alt: "коза" },
    { id: 10, src: "/img/galleryPage/image10.jpg", alt: "кози" },
  ];
  return (
    <div className="picturesWrapper">
      {pictures.map((picture) => {
        return (
          <img
            key={picture.id}
            className="picture"
            src={picture.src}
            alt={picture.alt}
          />
        );
      })}
    </div>
  );
}
export default GalleryContent;
