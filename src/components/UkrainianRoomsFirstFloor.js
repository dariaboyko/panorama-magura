import classes from "./Rooms.module.css";
import classNames from "classnames";
import ContentPageAnimation from "./ContentPageAnimation";
function UkrainianRoomsFirstFloor(props) {
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
            На території розташований двоповерховий будинок на 3 номери (7-8
            місць) з терасою, сауною на дровах, місцем для вогнища та ставком.
            За хвірткою ліс, неподалік — річка. На першому поверсі — вітальня
            (стіл з лавами, вихід на терасу); кухня (електрична плита,
            мікрохвильова піч, холодильник, електрочайник, мийка, посуд);
            санвузол (туалет, умивальник).
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
            Можно зняти окрему кімнату або усю садибу: <br></br>двомісний номер
            - 900 ₴ за ніч <br></br>тримісний номер - 1200 ₴ за ніч <br></br>
            садиба - 2500 ₴ за ніч
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
export default UkrainianRoomsFirstFloor;
