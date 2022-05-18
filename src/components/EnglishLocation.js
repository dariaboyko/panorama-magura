import classes from "./css/AboutUs.module.css";
function EnglishLocation() {
  return (
    <div className={classes.grid}>
      <img
        className={classes.winterPhoto}
        src={require("../img/image1.png")}
        alt="садиба взимку"
      />
      <h2 className={classes.title}>Location</h2>
      <p className={classes.text}>
        The abbey "PANORAMA MAGURA" is located in a picturesque place, from
        where a magnificent panorama of the Carpathian Mountains opens. In the
        village of Tatariv, on the mountain Magura Nadvirnyanska, 1.2 km from
        the village center, 900 m from the bus stop on the road Tatariv – Verkhovyna –
        Kosiv, 14 km to the ski complex "Bukovel". 
      </p>
      <iframe
        className={classes.map}
        title="meme"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.668739299923!2d24.574122806688436!3d48.33253660627873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473721e4c073154d%3A0x233d13b2851d3cab!2z0J_QsNC90L7RgNCw0LzQsCDQnNCw0pHRg9GA0LA!5e0!3m2!1suk!2sie!4v1650912670079!5m2!1suk!2sie"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
export default EnglishLocation;
