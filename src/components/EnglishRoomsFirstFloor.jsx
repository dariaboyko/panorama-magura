import ContentPageAnimation from "./ContentPageAnimation";
function EnglishRoomsFirstFloor() {
  return (
    <div className="firstFloorBackground">
      <ContentPageAnimation>
        <div className="contentWrapper">
          <p className="mainText firstFloorDescription">
            There is a two-storey house with 3 rooms (7-8 places) with a
            terrace, a sauna on firewood, a place for a fireplace and a pond.
            Behind the gate is a forest, nearby is a river. On the ground floor
            there is a living room (table with benches, exit to the terrace);
            kitchen (electric stove, microwave, refrigerator, electric kettle,
            sink, dishes); bathroom (toilet, washbasin).
          </p>
          <img
            className="image8"
            src={"../img/image8.png"}
            alt="вид з садиби"
          />
          <img
            className="image7"
            src={"../img/image7.png"}
            alt="вид з садиби"
          />
          <p className="mainText roomPrices">
            You can rent a whole house for: <br></br> 2900 ₴ per night <br></br>
            2500 ₴({"> "}7 days) per night<br></br>1900 ₴(
            {"> "}1 month) per night
            <br></br>Holidays price:<br></br>5100 ₴ per night(min 5 days)
            <br></br>
            Arriving at 2 pm, leaving at 12 am, there can be other options.
          </p>
          <img
            className="image9"
            src={"../img/image9.png"}
            alt="вид з садиби"
          />
        </div>
      </ContentPageAnimation>
    </div>
  );
}
export default EnglishRoomsFirstFloor;
