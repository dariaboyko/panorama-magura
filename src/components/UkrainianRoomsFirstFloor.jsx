import ContentPageAnimation from "./ContentPageAnimation";
function UkrainianRoomsFirstFloor(props) {
  return (
    <div className="firstFloorBackground">
      <ContentPageAnimation>
        <div className="contentWrapper">
          <p className="mainText firstFloorDescription">
            На території розташований двоповерховий будинок на 3 кімнати (7-8
            місць) з терасою, окремою сауною на дровах, місцем для вогнища та
            ставком. За хвірткою ліс, неподалік — річка. На першому поверсі —
            вітальня (стіл з лавами, вихід на терасу); кухня (електрична плита,
            мікрохвильова піч, холодильник, електрочайник, мийка, посуд);
            санвузол (туалет, умивальник).
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
            Сдається вся садиба:<br></br>
            2900 ₴ за ніч <br></br>2500 ₴({"> "}7 діб) за ніч<br></br>1900 ₴(
            {"> "}1 місяця) за ніч
            <br></br>Вартість у новорічний період:<br></br>5100 ₴ за ніч(мінімум
            5 діб)<br></br>
            Заїзд о 14:00, виїзд о 12:00, можуть бути виключення.
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
export default UkrainianRoomsFirstFloor;
