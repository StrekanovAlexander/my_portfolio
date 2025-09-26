import { GraduationCap, Laptop, Briefcase, Rocket } from "lucide-react";

export const sections = {
  de: {
    education: {
      title: "AUS- UND FORTBILDUNG",
      icon: GraduationCap,
      
      left: [
        <>
          <h3 className="font-roboto font-extrabold mb-1">
            TEILNAHME AN DER MASSNAHME P.I.A. W.E.B. (Wiedereingliederung in das Berufsleben)
          </h3>
          <span className="text-gray-500">bfz gGmbH Bad Kissingen 08.2025 – heute</span>
        </>, 
        <>
          <h3 className="font-roboto font-extrabold">
            SPRACH- UND INTEGRATIONSKURS
          </h3>
          <span className="text-gray-500">bfz gGmbH Bad Kissingen 07.2024 – 07.2025</span>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 my-1">
            <li>Erwerb des Deutsch-Zertifikates B1</li>
            <li>Leben in Deutschland</li>
          </ul>
        </>,
        <>
          <h3 className="font-roboto font-extrabold">
            STUDIUM COMPUTER-INGENIEURWESEN
          </h3>
          <span className="text-gray-500">Nationale technische Universität Saporischja, Ukraine 09.2011 – 05.2015</span>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 my-1">
            <li>Abschluss: Diplom</li>
            <li>Schwerpunkt auf Programmiersprachen C und Javascript</li>
            <li>Digitale Automatisierung</li>
          </ul>
        </>,
      ],
      right: [
        <>
          <h3 className="font-roboto font-extrabold mb-1">
            KURS "PROGRAMMIERUNG IN C"
          </h3>
          <span className="text-gray-500">
            Zentrum für Computerausbildung an der staatlichen technischen Universität Moskau, Russland 07.2002 – 08.2002
          </span>
        </>,
        <>
          <h3 className="font-roboto font-extrabold mb-1">
            KURS "DATENBANKPROGRAMMIERUNG MIT DELPHI 4.0/5.0"
          </h3>
          <span className="text-gray-500">
            Zentrum für Computerausbildung an der staatlichen technischen Universität Moskau, Russland 06.2001 – 07.2001
          </span>
        </>,
      ],
    },
    experience: {
      title: "BERUFLICHE ERFAHRUNGEN",
      icon: Briefcase,
      left: [
        <>
          <h3 className="font-roboto font-extrabold mb-1">
            FREIBERUFLICHE TÄTIGKEIT ALS PROGRAMMIERER
          </h3>
          <span className="text-gray-500">
            Bad Kissingen 09.2025 – heute
          </span>
          <p className="text-gray-700 text-sm py-2">
            Derzeit arbeite ich an dem Projekt Finping. Es handelt sich um einen SaaS-Service zur Beobachtung von Devisen- und Rohstoffmärkten. Dabei verwende ich Node.js, Sequelize, Express.js, React und Tailwind CSS. Als Market Data APIs arbeite
            ich mit Yahoo Finance, CoinGecko und FXRates. 
            <span className="block my-1"><a className="text-red-700" href="https://www.finping.space">https://www.finping.space</a></span>
            <span className="block my-1">https://github.com/StrekanovAlexander/saas-finping</span>
          </p>
        </>,
        <>
          <h3 className="font-roboto font-extrabold mb-1">
            SOFTWARE-INGENIEUR UND SYSTEMADMINISTRATOR
          </h3>
          <span className="text-gray-500">
            Fa. PRAT ZZRK Mala Biloserka, Ukraine 01.2015 – 02.2022
          </span>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 my-1">
            <li>Entwicklung und Betreuung einer Anwendung zur Arbeitszeiterfassung (Delphi, Firebird Database)</li>
            <li>Pflege der Unternehmens-Website (HTML, CSS, Java Script, PHP)</li>
            <li>Zusätzliche Tätigkeit als Systemadministrator ab 02.2017</li>
          </ul>
        </>,
      ],
      right: [
        <>
          <h3 className="font-roboto font-extrabold mb-1">
            SOFTWARENTWICKLER
          </h3>
          <span className="text-gray-500">
            Malenkij Paris GmbH Moskau, Russland 10.2011 – 12.2014
          </span>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 my-1">
            <li>Entwicklung einer Online-Shop-Anwendung (PHP, HTML, CSS, Java Script)</li>
          </ul>
        </>,
        <>
          <h3 className="font-roboto font-extrabold mb-1">
            SYSTEMADMINISTRATOR
          </h3>
          <span className="text-gray-500">
            Kommunales Eigenunternehmen „Nasch Dim“ der Stadt Dniprorudne, Ukraine 12.2007 – 07.2011
          </span>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 my-1">
            <li>Pflege der lokalen Netzwerke (FoxPro)</li>
            <li>Zuständig für ca. 50 Computer-Arbeitsplätze</li>
            <li>Teilzeitbeschäftigung</li>
          </ul>
        </>,
        <>
          <h3 className="font-roboto font-extrabold mb-1">
            SOFTWARENTWICKLER
          </h3>
          <span className="text-gray-500">
            Fa. Arkob Dniprorudne, Ukraine 11.2006 – 10.2009
          </span>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 my-1">
            <li>
              Entwicklung und Pflege von Anwendungen zur Stromverbrauchberechnung im Architekturbereich (Delphi, Firebird Database)
            </li>
          </ul>
        </>,
      ],
    },
    skills: {
      title: "Fähigkeiten",
      icon: Laptop,
      left: [
        
        <>
         
        </>, 
        
        
        "Curabitur ac augue..."
      ],
      right: ["Praesent suscipit diam...", "Morbi feugiat ligula..."],
    },
    
    projects: {
      title: "Persönliche Projekte",
      icon: Rocket,
      left: ["Lorem ipsum dolor sit amet...", "Ut pretium justo..."],
      right: ["Aliquam erat volutpat...", "Morbi ac justo..."],
    },
  },
  ua: {
    education: {
      title: "Освіта",
      icon: GraduationCap,
      left: ["Lorem ipsum dolor sit amet...", "Fusce non massa in tortor..."],
      right: ["Nullam dignissim...", "Sed commodo lorem..."],
    },
    experience: {
      title: "Досвід роботи",
      icon: Briefcase,
      left: ["Lorem ipsum dolor sit amet...", "Donec dapibus odio..."],
      right: ["Pellentesque habitant...", "Vestibulum non velit..."],
    },
    skills: {
      title: "Навички",
      icon: Laptop,
      left: ["Lorem ipsum dolor sit amet...", "Curabitur ac augue..."],
      right: ["Praesent suscipit diam...", "Morbi feugiat ligula..."],
    },
    
    projects: {
      title: "Особисті проєкти",
      icon: Rocket,
      left: ["Lorem ipsum dolor sit amet...", "Ut pretium justo..."],
      right: ["Aliquam erat volutpat...", "Morbi ac justo..."],
    },
  },
  en: {
    education: {
      title: "Education",
      icon: GraduationCap,
      left: ["Lorem ipsum dolor sit amet...", "Fusce non massa in tortor..."],
      right: ["Nullam dignissim...", "Sed commodo lorem..."],
    },
    experience: {
      title: "Experience",
      icon: Briefcase,
      left: ["Lorem ipsum dolor sit amet...", "Donec dapibus odio..."],
      right: ["Pellentesque habitant...", "Vestibulum non velit..."],
    },
    skills: {
      title: "Skills",
      icon: Laptop,
      left: ["Lorem ipsum dolor sit amet...", "Curabitur ac augue..."],
      right: ["Praesent suscipit diam...", "Morbi feugiat ligula..."],
    },
    
    projects: {
      title: "Personal Projects",
      icon: Rocket,
      left: ["Lorem ipsum dolor sit amet...", "Ut pretium justo..."],
      right: ["Aliquam erat volutpat...", "Morbi ac justo..."],
    },
  },
};