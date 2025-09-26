import { GraduationCap, Laptop, Briefcase, Rocket } from "lucide-react";
import BlockInfo from "../components/BlockInfo.jsx";
import BlockInfo2 from "../components/BlockInfo2.jsx";
import BlockInfo3 from "../components/BlockInfo3.jsx";
import Rating from "../components/Rating.jsx";

export const sections = {
  de: {
    education: {
      title: "AUS- UND FORTBILDUNG",
      icon: GraduationCap,
      
      left: [
        <BlockInfo 
          header="TEILNAHME AN DER MASSNAHME P.I.A. W.E.B."
          period="08.2025 – heute"
          description="bfz gGmbH Bad Kissingen"
        />,
        <BlockInfo 
          header="SPRACH- UND INTEGRATIONSKURS"
          period="07.2024 – 07.2025"
          description="bfz gGmbH Bad Kissingen"
          list={[
            "Erwerb des Deutsch-Zertifikates B1", 
            "Leben in Deutschland"
          ]}
        />,
      ],
      right: [
        <BlockInfo 
          header="STUDIUM COMPUTER-INGENIEURWESEN"
          period="09.2011 – 05.2015"
          description="Nationale technische Universität Saporischja, Ukraine"
          list={[
            "Abschluss: Diplom", 
            "Schwerpunkt auf Programmiersprachen C und Java",
            "Digitale Automatisierung"
          ]}
        />,    
        <BlockInfo 
          header="KURS PROGRAMMIERUNG IN C"
          period="07.2002 – 08.2002"
          description="Zentrum für Computerausbildung an der staatlichen technischen Universität Moskau, Russland"
        />,
        <BlockInfo 
          header="KURS DATENBANKPROGRAMMIERUNG MIT DELPHI 4.0/5.0"
          period="06.2001 – 07.2001"
          description="Zentrum für Computerausbildung an der staatlichen technischen Universität Moskau, Russland"
        />
      ]
    },
    experience: {
      title: "BERUFLICHE ERFAHRUNGEN",
      icon: Briefcase,
      left: [
        <BlockInfo 
          header="SOFTWARE-INGENIEUR UND SYSTEMADMINISTRATOR"
          period="01.2015 – heute (Remote-Tätigkeit seit 2022)"
          description="Fa. PRAT ZZRK, Prospekt Sobornij 158-210, Saporischschja 69005, Ukraine"
          list={[
            "Entwicklung und Betreuung einer Anwendung zur Arbeitszeiterfassung (Delphi, Firebird Database)", 
            "Pflege der Unternehmens-Website (HTML, CSS, Javascript, PHP)",
            "Zusätzliche Tätigkeit als Systemadministrator ab 02.2017"
          ]}
        />,
        <BlockInfo 
          header="SOFTWARENTWICKLER"
          period="10.2011 – 12.2014"
          description="Malenkij Paris GmbH Moskau, Russland"
          list={[
            "Entwicklung einer Online-Shop-Anwendung (PHP, HTML, CSS, Javascript)", 
          ]}
        />,
        <BlockInfo 
          header="SYSTEMADMINISTRATOR"
          period="12.2007 – 07.2011"
          description="Kommunales Eigenunternehmen Nasch Dim der Stadt Dniprorudne, Ukraine"
          list={[
            "Pflege der lokalen Netzwerke (FoxPro)", 
            "Zuständig für ca. 50 Computer-Arbeitsplätze", 
            "FoxPro Software", 
            "Teilzeitbeschäftigung", 
          ]}
        />,
        <BlockInfo 
          header="SOFTWARENTWICKLER"
          period="11.2006 – 10.2009"
          description="Fa. Arkob Dniprorudne, Ukraine"
          list={[
            "Entwicklung und Pflege von Anwendungen zur Stromverbrauchberechnung im Architekturbereich (Delphi, Firebird Database)", 
          ]}
        />,
      ],
      right: [
        <BlockInfo 
          header="SOFTWAREENTWICKLER"
          period="09.2000 – 07.2006"
          description="Werkol GmbH Moskau, Russland"
          list={[
            "Entwicklung und Betreuung eines Online-Shops zum Vertrieb von Hygiene- und Kosmetikartikeln (Delphi, Interbase)", 
          ]}
        />,
        <BlockInfo 
          header="IT-SYSTEMASSISTENT UND SOFTWAREENTWICKLER"
          period="09.1994 – 05.2000"
          description="Fa. Wotinov Moskau, Russland"
          list={[
            "Einsatz im Lager- und Verpackungsbereich des Unternehmens", 
            "Einstieg in die Arbeit mit FoxPro", 
            "Entwicklung von Bestell- und Lagerverwaltungssoftware im Kosmetik-Großhandel", 
          ]}
        />,
        <BlockInfo 
          header="ELEKTRIKER"
          period="07.1990 – 08.1994"
          description="Fa. PRAT ZZRK Mala Biloserka, Ukraine"
          list={[
            "Allgemeine Wartungs- und Reparaturarbeiten", 
            "Installation von Beleuchtungsanlagen", 
          ]}
        />,
        <BlockInfo 
          header="ELEKTRIKER"
          period="06.1989 – 05.1990"
          description="Molkerei Dniprorudne, Ukraine"
          list={[
            "Wartung und Reparatur von Maschinen und Anlagen zur Milchbearbeitung und Käseherstellung", 
            "Austausch von Ersatzteilen", 
          ]}
        />,
      ],
    },
    skills: {
      title: "SKILLS",
      icon: Laptop,
      left: [
        <BlockInfo2 
          title="Programmiersprachen"
          list={[
            "Javascript, Delphi, C",
            "MySQL, Firebird Database",
            "Node.js, Express.js, React",
            "HTML, CSS"
          ]}
        />,
        <BlockInfo2 
          title="Berufskenntnisse"
          list={[
            "Web-Applikationen (Backend und Frontend)",
            "SQL, Relations, Stored Procedures, Triggers esw.",
            "Objektorientierte Programmierung",
            "Git"
          ]}
        />,
      ],
      right: [
        <BlockInfo3 
          title="Sprachen"
          list={[
            { title: "Deutsch", rating: 4 },
            { title: "Ukrainisch", rating: 6 },
            { title: "Russisch", rating: 6 },
            { title: "Englisch", rating: 3 },
          ]}
        />,
        <BlockInfo3 
          title="IT allgemein"
          list={[
            { title: "MS-Office", rating: 5 },
            { title: "Photoshop", rating: 4 },
          ]}
        />,
      ],
    },
    
    projects: {
      title: "Persönliche Projekte",
      icon: Rocket,
      left: [
        <BlockInfo2 
          title="FREIBERUFLICHE TÄTIGKEIT ALS PROGRAMMIERER"
          description="Derzeit arbeite ich an dem Projekt Finping. Es handelt sich um einen SaaS-Service zur Beobachtung von Devisen- und Rohstoffmärkten. Dabei verwende ich Node.js, Sequelize, Express.js, React und Tailwind CSS. Als Market Data APIs arbeite
            ich mit Yahoo Finance, CoinGecko und FXRates"
          list={[
            <a className="text-red-700" href="https://www.finping.space" target="_blank">https://www.finping.space</a>,
            <a className="text-red-700" href="https://github.com/StrekanovAlexander/saas-finping" target="_blank">https://github.com/StrekanovAlexander/saas-finping</a>
          ]}
        />,
      ],
      right: ["..."],
    },
  },
  ua: {
    education: {
      title: "Освіта",
      icon: GraduationCap,
      left: ["Далі буде...", "Далі буде..."],
      right: ["Далі буде...", "Далі буде..."],
    },
    experience: {
      title: "Досвід роботи",
      icon: Briefcase,
      left: ["Далі буде...", "Далі буде..."],
      right: ["Далі буде...", "Далі буде..."],
    },
    skills: {
      title: "Навички",
      icon: Laptop,
      left: ["Далі буде...", "Далі буде..."],
      right: ["Далі буде...", "Далі буде..."],
    },
    
    projects: {
      title: "Особисті проєкти",
      icon: Rocket,
      left: ["Далі буде...", "Далі буде..."],
      right: ["Далі буде...", "Далі буде..."],
    },
  },
  en: {
    education: {
      title: "Education",
      icon: GraduationCap,
      left: ["To be continued...", "To be continued..."],
      right: ["To be continued...", "To be continued..."],
    },
    experience: {
      title: "Experience",
      icon: Briefcase,
      left: ["To be continued...", "To be continued..."],
      right: ["To be continued...", "To be continued..."],
    },
    skills: {
      title: "Skills",
      icon: Laptop,
      left: ["To be continued...", "To be continued..."],
      right: ["To be continued...", "To be continued..."],
    },
    
    projects: {
      title: "Personal Projects",
      icon: Rocket,
      left: ["To be continued...", "To be continued..."],
      right: ["To be continued...", "To be continued..."],
    },
  },
};