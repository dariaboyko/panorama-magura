import ContentPageAnimation from "./ContentPageAnimation";
import ImageGallery from "react-image-gallery";
const UkrainianRoomsSmallHouse = () => {
  const images = [
    {
      original: "/img/gallery/image10.jpg",
    },
    {
      original: "/img/gallery/image11.jpg",
    },
    {
      original: "/img/gallery/image15.jpg",
    },
    {
      original: "/img/gallery/image16.jpg",
    },
  ];
  return (
    <div className="smallHouseBackground">
      <ContentPageAnimation>
        <div className="contentWrapper">
          <p className="mainText firstFloorDescription">
            Також є котедж на дві кімнати, 6 місць. Кухня, індукційна плита,
            столова, кондиціонер, що працює і на опалення. Вбиральня одна,
            душова велика з теплою підлогою. Чудовий краєвид
          </p>
          <img
            className="image13"
            src={"/img/image13.jpg"}
            alt="вид з садиби"
          />
          <img className="image8" src={"/img/image12.jpg"} alt="вид з садиби" />
          <p className="mainText roomPrices">
            Сдається весь котедж:<br></br>
            3500 ₴ за ніч <br></br>3000 ₴({"> "}7 діб) за ніч
            <br></br>Вартість у новорічний період:<br></br>4000 ₴ за ніч(мінімум
            5 діб)<br></br>Заїзд о 14:00, виїзд о 12:00, можуть бути виключення.
          </p>
          <img className="image9" src={"/img/image14.jpg"} alt="вид з садиби" />
        </div>
        <div className="smallHouseBackgroundStairs">
          <div className="contentWrapper">
            <p className="mainText firstFloorDescription">
              На другому поверсі — 2 тримісні номери (двоспальне ліжко,
              односпальне ліжко, шафа для одягу, стіл)
            </p>
            <section className="gallery">
              <ImageGallery items={images} />
            </section>
          </div>
        </div>
      </ContentPageAnimation>
    </div>
  );
};
export default UkrainianRoomsSmallHouse;
