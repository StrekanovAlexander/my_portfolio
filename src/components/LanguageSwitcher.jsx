import ReactCountryFlag from "react-country-flag";

const languages = [
  { code: "de", label: "DE", countryCode: "DE" },
  { code: "ua", label: "UA", countryCode: "UA" },
  { code: "en", label: "EN", countryCode: "GB" },
];

export default function LanguageSwitcher({ currentLanguage, onChange }) {
  return (
    <div className="flex gap-4 justify-start items-center">
      {languages.map((lang) => (
        <ReactCountryFlag
          key={lang.code}
          countryCode={lang.countryCode}
          svg
          title={lang.label}
          style={{
            width: "28px",
            height: "28px",
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
