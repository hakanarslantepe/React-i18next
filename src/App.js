import { useTranslation } from "react-i18next";
import "./App.css";

const App = () => {
  const { t, i18n } = useTranslation();
  const clickHandle = async (lang) => {
    await i18n.changeLanguage(lang);
  };
  return (
    <div className="content">
      Aktif dil: <span className="language">{i18n.language}</span>
      <nav className="buttons">
        <button className="button" onClick={() => clickHandle("tr")}>Turkce</button>
        <button className="button" onClick={() => clickHandle("en")}>English</button>
        <button className="button" onClick={() => clickHandle("fr")}>France</button>
      </nav>
      <h3>{t("Welcome to React")}</h3>
    </div>
  );
};

export default App;
