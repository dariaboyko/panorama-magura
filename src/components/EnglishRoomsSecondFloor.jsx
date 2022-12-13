import ImageGallery from "react-image-gallery";
import ContentPageAnimation from "./ContentPageAnimation";
function EnglishRoomsSecondFloor() {
  const images = [
    {
      original: "../img/gallery/coupleroom2.png",
    },
    {
      original: "../img/gallery/coupleroom.png",
    },
    {
      original: "../img/gallery/2placesroom.png",
    },
    {
      original: "../img/gallery/2placesroomcloset.png",
    },
    {
      original: "../img/gallery/3placesroom.png",
    },
    {
      original: "../img/gallery/wc.png",
    },
    {
      original: "../img/gallery/wc2.png",
    },
  ];
  return (
    <div className="secondFloorBackground">
      <ContentPageAnimation>
        <div className="contentWrapper">
          <p className="mainText firstFloorDescription">
            On the second floor there are 2 double rooms (double or 2 single
            rooms) beds, wardrobe; triple room (3 single beds, wardrobe for
            clothes); 1 bathroom (shower, toilet, washbasin, hair dryer).
            Heating: autonomous water. Water supply: hot and cold water
            constantly.
          </p>
          <section className="gallery">
            <ImageGallery items={images} />
          </section>
        </div>
      </ContentPageAnimation>
    </div>
  );
}
export default EnglishRoomsSecondFloor;
