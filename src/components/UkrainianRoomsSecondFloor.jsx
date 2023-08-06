import ImageGallery from "react-image-gallery";
import ContentPageAnimation from "./ContentPageAnimation";
function UkrainianRoomsSecondFloor() {
  const images = [
    {
      original: "/img/gallery/coupleroom2.png",
    },
    {
      original: "/img/gallery/coupleroom.png",
    },
    {
      original: "/img/gallery/2placesroom.png",
    },
    {
      original: "/img/gallery/2placesroomcloset.png",
    },
    {
      original: "/img/gallery/3placesroom.png",
    },
    {
      original: "/img/gallery/wc.png",
    },
    {
      original: "/img/gallery/wc2.png",
    },
  ];
  return (
    <div className="secondFloorBackground">
      <ContentPageAnimation>
        <div className="contentWrapper">
          <p className="mainText firstFloorDescription">
            На другому поверсі — 2 двомісні номери (двоспальне або 2 односпальні
            ліжка, шафа для одягу); тримісний номер (3 односпальні ліжка, шафа
            для одягу); 1 санвузол (душова кабіна, туалет, умивальник, фен).
            Опалення: автономне водяне. Водопостачання: холодна та гаряча вода
            постійно.
          </p>
          <section className="gallery">
            <ImageGallery items={images} />
          </section>
        </div>
      </ContentPageAnimation>
    </div>
  );
}
export default UkrainianRoomsSecondFloor;
