import classes from "./css/Rooms.module.css";
import classNames from "classnames";
import ImageGallery from "react-image-gallery";
import ContentPageAnimation from "./ContentPageAnimation";
function UkrainianRoomsSecondFloor() {
    const images = [
      {
        original: require("../img/gallery/coupleroom2.png"),
      },
      {
        original: require("../img/gallery/coupleroom.png"),
      },
      {
        original: require("../img/gallery/2placesroom.png"),
      },
      {
        original: require("../img/gallery/2placesroomcloset.png"),
      },
      {
        original: require("../img/gallery/3placesroom.png"),
      },
      {
        original: require("../img/gallery/wc.png"),
      },
      {
        original: require("../img/gallery/wc2.png"),
      },
    ];
  return (
    <div className={classes.secondFloorBackground}>
      <ContentPageAnimation>
        <div className={classes.contentWrapper}>
          <p
            className={classNames(
              classes.mainText,
              classes.firstFloorDescription
            )}
          >
            На другому поверсі — 2 двомісні номери (двоспальне або 2 односпальні
            ліжка, шафа для одягу); тримісний номер (3 односпальні ліжка, шафа
            для одягу); 1 санвузол (душова кабіна, туалет, умивальник, фен).
            Опалення: автономне водяне. Водопостачання: холодна та гаряча вода
            постійно.
          </p>
          <section className={classes.gallery}>
            <ImageGallery items={images} />
          </section>
        </div>
      </ContentPageAnimation>
    </div>
  );
}
export default UkrainianRoomsSecondFloor;
