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
    skills: {
      title: "Fähigkeiten",
      icon: Laptop,
      left: ["Lorem ipsum dolor sit amet...", "Curabitur ac augue..."],
      right: ["Praesent suscipit diam...", "Morbi feugiat ligula..."],
    },
    experience: {
      title: "Berufserfahrung",
      icon: Briefcase,
      left: ["Lorem ipsum dolor sit amet...", "Donec dapibus odio..."],
      right: ["Pellentesque habitant...", "Vestibulum non velit..."],
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
    skills: {
      title: "Навички",
      icon: Laptop,
      left: ["Lorem ipsum dolor sit amet...", "Curabitur ac augue..."],
      right: ["Praesent suscipit diam...", "Morbi feugiat ligula..."],
    },
    experience: {
      title: "Досвід роботи",
      icon: Briefcase,
      left: ["Lorem ipsum dolor sit amet...", "Donec dapibus odio..."],
      right: ["Pellentesque habitant...", "Vestibulum non velit..."],
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
    skills: {
      title: "Skills",
      icon: Laptop,
      left: ["Lorem ipsum dolor sit amet...", "Curabitur ac augue..."],
      right: ["Praesent suscipit diam...", "Morbi feugiat ligula..."],
    },
    experience: {
      title: "Experience",
      icon: Briefcase,
      left: ["Lorem ipsum dolor sit amet...", "Donec dapibus odio..."],
      right: ["Pellentesque habitant...", "Vestibulum non velit..."],
    },
    projects: {
      title: "Personal Projects",
      icon: Rocket,
      left: ["Lorem ipsum dolor sit amet...", "Ut pretium justo..."],
      right: ["Aliquam erat volutpat...", "Morbi ac justo..."],
    },
  },
};