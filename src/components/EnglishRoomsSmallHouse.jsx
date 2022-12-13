import ContentPageAnimation from "./ContentPageAnimation";
import ImageGallery from "react-image-gallery";
function EnglishRoomsSmallHouse(props) {
  const images = [
    {
      original: "../img/gallery/image10.jpg",
    },
    {
      original: "../img/gallery/image11.jpg",
    },
    {
      original: "../img/gallery/image15.jpg",
    },
    {
      original: "../img/gallery/image16.jpg",
    },
  ];
  return (
    <div className="smallHouseBackground">
      <ContentPageAnimation>
        <div className="contentWrapper">
          <p className="mainText firstFloorDescription">
            There is also a two-room cottage for 6 people. There are kitchen,
            induction stove, dining room, air conditioner that also works for
            heating, one toilet, shower, that is large with a warm floor. A
            wonderful view
          </p>
          <img
            className="image13"
            src={"../img/image13.jpg"}
            alt="вид з садиби"
          />
          <img
            className="image8"
            src={"../img/image12.jpg"}
            alt="вид з садиби"
          />
          <p className="mainText roomPrices">
            You can rent a whole house for:<br></br>
            2200 ₴ per night <br></br>
            2000 ₴({"> "}7 days) per night<br></br>1100 ₴(
            {"> "}1 month) per night
            <br></br>Holidays price:<br></br>4000 ₴ per night(min 5 days)
            <br></br>Arriving at 2 pm, leaving at 12 am, there can be other
            options.
          </p>
          <img
            className="image9"
            src={"../img/image14.jpg"}
            alt="вид з садиби"
          />
        </div>
        <div className="smallHouseBackgroundStairs">
          <div className="contentWrapper">
            <p className="mainText firstFloorDescription">
              There are two rooms for three people. Each one includes one bad
              for two, one bad for one, table and wardrobe.
            </p>
            <section className="gallery">
              <ImageGallery items={images} />
            </section>
          </div>
        </div>
      </ContentPageAnimation>
    </div>
  );
}
export default EnglishRoomsSmallHouse;
