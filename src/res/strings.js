import { Link } from "react-router-dom";
import { languageStore } from "../redux/store/store";


export const lang = {
  en: {
    greeting: {
      greetingTitle: () => (
        <h1>
          Merry Christmas
          <br />
          and Happy New Year!
        </h1>
      ),
      greetingText1:
        "The whole GMS team wishes you prosperity and happiness in the year to come.",
      greetingText2:
        "Treat your loved ones with a custom Holiday card. Share the love with GMS.",
      greetingCTA: "CREATE YOUR HOLIDAY CARD",
    },

    printDataPage: {
      ctaTitle: "Please add the address",
      message: () => (
        <p>
          We’ll print your card and deliver it to
          <br />
          the address
        </p>
      ),
      back: "Back",
      firstName: "First Name",
      lastName: "Last Name",
      address: "Address",
      city: "City",
      zip: "Zip Code",
      email: "Email",
      submit: "Submit",
    },

    emailSendPage: {
      ctaTitle: "Send via email",
      message: () => (
        <p>
          Email will be sent from
          <br />
          happy2022@gms-worldwide.com and your
          <br />
          card will be added as an attachment
        </p>
      ),
      submit: "Submit",
      sendTo: "Send to",
      messageText: "Message",
      back: "Back",
    },

    sharepage: {
      ctaTitle: () => (
        <h1>
          Great job!
          <br />
          Now share your postcard
        </h1>
      ),
      message: () => (
        <p>
          To make another one, just
          <br />
          go back to
          <b onClick={() => window.location.href = `http://165.232.112.117/drawer/#/${languageStore.getState()}`} style={{ color: "#56B763", fontWeight: "normal"}}>
            &nbsp;editor
          </b>
        </p>
      ),
      download: "Download",
      print: "Print",
    },
    notFoundPage: {
      title: "The page was not found ☹️",
      message: "You are trying to access the page that does not exist",
      ctaText: "TO MAIN PAGE",
    },
    successPage: {
      title: "Success! 👍🏻 ",
      message: "Your postcard has been sent",
      ctaText: "TO MAIN PAGE",
    },
  },

  uk: {
    greeting: {
      greetingTitle: () => (
        <h1>
          З Новим роком
          <br />
          та Різдвом Христовим!
        </h1>
      ),
      greetingText1: "Команда GMS бажає достатку й щастя в наступному році.",
      greetingText2:
        "Порадуйте своїх близьких оригінальною святковою листівкою. Поділіться любов'ю з GMS.",
      greetingCTA: "СТВОРІТЬ СВЯТКОВУ ЛИСТІВКУ",
    },

    printDataPage: {
      ctaTitle: "Додайте адресу",
      message: () => (
        <p>
          Ми роздрукуємо вашу картку та доставимо
          <br />
          за вказаною адресою
        </p>
      ),
      firstName: "Імʼя",
      lastName: "Прізвище",
      address: "Адреса",
      city: "Місто",
      zip: "Індекс",
      email: "Email",
      submit: "Надіслати",
      back: "Назад",
    },

    emailSendPage: {
      ctaTitle: "Надіслати електронною поштою",
      message: () => (
        <p>
          Електроний лист буде надісланий з
          <br />
          happy2022@gms-worldwide.com і ваша листівка буде прикріплена як файл
        </p>
      ),
      submit: "Надіслати",
      sendTo: "Кому",
      messageText: "Повідомлення",
      back: "Назад",
    },

    sharepage: {
      ctaTitle: () => (
        <h1>
          Чудова робота!
          <br />
          Тепер поділіться вашою листівкою
        </h1>
      ),
      message: () => (
        <p>
          Якщо хочете створити ще одну,
          <br />
          перейдіть до
          <b onClick={() => window.location.href = `http://165.232.112.117/drawer/#/${languageStore.getState()}`} style={{ color: "#56B763", fontWeight: "normal"}}>
            &nbsp;редактора
          </b>
        </p>
      ),
      download: "Завантажити",
      print: "Роздрукувати",
    },
    notFoundPage: {
      title: "Сторінку не знайдено ☹️",
      message: "Ви намагаєтеся отримати доступ до неіснуючої сторінки",
      ctaText: "НА ГОЛОВНУ",
    },
    successPage: {
      title: "Успіх! 👍🏻 ",
      message: "Вашу листівку надіслано",
      ctaText: "НА ГОЛОВНУ",
    },
  },
};
