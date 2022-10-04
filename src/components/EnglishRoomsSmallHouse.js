import classes from "./css/Rooms.module.css";
import classNames from "classnames";
import ContentPageAnimation from "./ContentPageAnimation";
import ImageGallery from "react-image-gallery";
function EnglishRoomsSmallHouse(props) {
  const images = [
    {
      original: require("../img/gallery/image10.jpg"),
    },
    {
      original: require("../img/gallery/image11.jpg"),
    },
    {
      original: require("../img/gallery/image15.jpg"),
    },
    {
      original: require("../img/gallery/image16.jpg"),
    },
  ];
  return (
    <div className={classes.smallHouseBackground}>
      <ContentPageAnimation>
        <div className={classes.contentWrapper}>
          <p
            className={classNames(
              classes.mainText,
              classes.firstFloorDescription
            )}
          >
            There is also a two-room cottage for 6 people. There are kitchen, induction
            stove, dining room, air conditioner that also works for heating, one
            toilet, shower, that is large with a warm floor. A wonderful view
          </p>
          <img
            className={classes.image13}
            src={require("../img/image13.jpg")}
            alt="вид з садиби"
          />
          <img
            className={classes.image8}
            src={require("../img/image12.jpg")}
            alt="вид з садиби"
          />
          <p className={classNames(classes.mainText, classes.roomPrices)}>
            You can rent a whole house for:<br></br>
            1800 ₴ per night <br></br>1500 ₴ per 7 nights <br></br>1100 $ per
            month
            <br></br>Arriving at 2 pm, leaving at 12 am, there can be other
            options.
          </p>
          <img
            className={classes.image9}
            src={require("../img/image14.jpg")}
            alt="вид з садиби"
          />
        </div>
        <div className={classes.smallHouseBackgroundStairs}>
          <div className={classes.contentWrapper}>
            <p
              className={classNames(
                classes.mainText,
                classes.firstFloorDescription
              )}
            >
              There are two rooms for three people. Each one includes one bad
              for two, one bad for one, table and wardrobe.
            </p>
            <section className={classes.gallery}>
              <ImageGallery items={images} />
            </section>
          </div>
        </div>
      </ContentPageAnimation>
    </div>
  );
}
export default EnglishRoomsSmallHouse;
