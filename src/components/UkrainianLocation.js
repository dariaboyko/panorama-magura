import classes from "./AboutUs.module.css";
function UkrainianLocation() {
  return (
    <div className={classes.grid}>
      <img
        className={classes.winterPhoto}
        src={require("../img/image1.png")}
        alt="садиба взимку"
      />
      <h2 className={classes.title}>Місце знаходження:</h2>
      <p className={classes.text}>
        Садиба «ПАНОРАМА МАҐУРА» розташована в мальовничому місці, звідки
        відкривається чудова панорама Карпатських гір. У селі Татарів, на горі
        Маґура Надвірнянська, 1,2 км до центру села, 900 м від зупинкі на дорозі
        Татарів–Верховина–Косів, 14 км до гірськолижного комплексу "Буковель".
        Під'їзд — грунтова дорога.
      </p>
      <iframe
        className={classes.map}
        title="meme"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.668739299923!2d24.574122806688436!3d48.33253660627873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473721e4c073154d%3A0x233d13b2851d3cab!2z0J_QsNC90L7RgNCw0LzQsCDQnNCw0pHRg9GA0LA!5e0!3m2!1suk!2sie!4v1650912670079!5m2!1suk!2sie"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default UkrainianLocation;
