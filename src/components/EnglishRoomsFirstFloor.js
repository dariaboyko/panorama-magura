import classes from "./css/Rooms.module.css";
import classNames from "classnames";
import ContentPageAnimation from "./ContentPageAnimation";
function EnglishRoomsFirstFloor(props) {
  return (
    <div className={classes.firstFloorBackground}>
      <ContentPageAnimation>
        <div className={classes.contentWrapper}>
          <p
            className={classNames(
              classes.mainText,
              classes.firstFloorDescription
            )}
          >
            There is a two-storey house with 3 rooms (7-8 places) with a
            terrace, a sauna on firewood, a place for a fireplace and a pond.
            Behind the gate is a forest, nearby is a river. On the ground floor
            there is a living room (table with benches, exit to the terrace);
            kitchen (electric stove, microwave, refrigerator, electric kettle,
            sink, dishes); bathroom (toilet, washbasin).
          </p>
          <img
            className={classes.image8}
            src={require("../img/image8.png")}
            alt="вид з садиби"
          />
          <img
            className={classes.image7}
            src={require("../img/image7.png")}
            alt="вид з садиби"
          />
          <p className={classNames(classes.mainText, classes.roomPrices)}>
            You can rent a whole house for: <br></br>3300 ₴ per night <br></br>
            2200 $ per month
            <br></br>
            Arriving at 2 pm, leaving at 12 am, there can be other options.
          </p>
          <img
            className={classes.image9}
            src={require("../img/image9.png")}
            alt="вид з садиби"
          />
        </div>
      </ContentPageAnimation>
    </div>
  );
}
export default EnglishRoomsFirstFloor;
