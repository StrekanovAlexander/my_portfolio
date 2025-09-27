import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "de", label: "DE", countryCode: "DE" },
  { code: "ua", label: "UA", countryCode: "UA" },
  { code: "en", label: "EN", countryCode: "GB" },
  { code: "ru", label: "RU", countryCode: "RU" },
];

export default function LanguageSwitcher({ currentLanguage, onChange }) {
  return (
    <div className="flex gap-3 justify-start items-center">
      {languages.map((lang) => (
        <ReactCountryFlag
          key={lang.code}
          countryCode={lang.countryCode}
          svg
          title={lang.label}
          style={{
            width: "25px",
            height: "25px",
            cursor: "pointer",
            opacity: currentLanguage === lang.code ? 1 : 0.5,
            transition: "transform 0.2s",
          }}
          onClick={() => onChange(lang.code)}
          className="hover:scale-110"
        />
      ))}
    </div>
  );
}
