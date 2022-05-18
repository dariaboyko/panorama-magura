import ContentPageAnimation from "../../components/ContentPageAnimation";
import classes from "../../components/css/Contacts.module.css";
function EnglishContactsPage() {
  return (
    <ContentPageAnimation>
      <section className={classes.wrapper}>
        <a href="tel:+380 97 065 6767" className={classes.subTitle}>
          Phone number:<br></br> +380 97 065 6767
        </a>
        <a
          className={classes.subTitle}
          href="https://www.instagram.com/panorama_magura/"
        >
          Instagram: <br></br>panorama_magura
        </a>
        <iframe
          className={classes.map}
          title="meme"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.668739299923!2d24.574122806688436!3d48.33253660627873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473721e4c073154d%3A0x233d13b2851d3cab!2z0J_QsNC90L7RgNCw0LzQsCDQnNCw0pHRg9GA0LA!5e0!3m2!1suk!2sie!4v1650912670079!5m2!1suk!2sie"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </ContentPageAnimation>
  );
}
export default EnglishContactsPage;
