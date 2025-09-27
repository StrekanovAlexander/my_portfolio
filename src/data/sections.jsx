import { GraduationCap, Laptop, Briefcase, Rocket } from "lucide-react";
import BlockInfo from "../components/BlockInfo.jsx";
import BlockInfo2 from "../components/BlockInfo2.jsx";
import BlockInfo3 from "../components/BlockInfo3.jsx";
import Rating from "../components/Rating.jsx";

export const sections = {
  de: {
    education: {
      title: "AUSBILDUNG",
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
      title: "ERFAHRUNGEN",
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
      title: "Meine Projekte",
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
      right: [
        <BlockInfo2 
          title="Kurze Videos zur Theorie digitaler Automaten. Karnaugh-Diagramme usw."
          list={[
            <a className="text-red-700" href="https://www.youtube.com/channel/UCBcRsyBaLDJLvkBYpMF9oFA" target="_blank">Mein YouTube-Kanal</a>,
          ]}
        />,
      ],
    },
  },
  ua: {
    education: {
      title: "ОСВІТА ТА КУРСИ",
      icon: GraduationCap,
      left: [
        <BlockInfo 
          header="УЧАСТЬ У ПРОГРАМІ P.I.A. W.E.B."
          period="08.2025 – сьогодні"
          description="bfz gGmbH Бад-Кіссінген"
        />,
        <BlockInfo 
          header="МОВНИЙ ТА ІНТЕГРАЦІЙНИЙ КУРС"
          period="07.2024 – 07.2025"
          description="bfz gGmbH Бад-Кіссінген"
          list={[
            "Отримання сертифіката німецької мови B1", 
            "Життя в Німеччині"
          ]}
        />,
      ],
      right: [
        <BlockInfo 
          header="НАВЧАННЯ ЗА СПЕЦІАЛЬНІСТЮ КОМП'ЮТЕРНА ІНЖЕНЕРІЯ"
          period="09.2011 – 05.2015"
          description="Національний технічний університет, Запоріжжя, Україна"
          list={[
            "Диплом",
            "Акцент на мовах програмування C та Java",
            "Цифрова автоматизація"
          ]}
        />,    
        <BlockInfo 
          header="КУРС ПРОГРАМУВАННЯ НА C"
          period="07.2002 – 08.2002"
          description="Центр комп'ютерної освіти при Московському державному технічному університеті, Росія"
        />,
        <BlockInfo 
          header="КУРС ПРОГРАМУВАННЯ БАЗ ДАНИХ DELPHI 4.0/5.0"
          period="06.2001 – 07.2001"
          description="Центр комп'ютерної освіти при Московському державному технічному університеті, Росія"
        />
      ]
    },
    experience: {
      title: "ДОСВІД РОБОТИ",
      icon: Briefcase,
      left: [
        <BlockInfo 
          header="ІНЖЕНЕР-ПРОГРАМІСТ ТА СИСТЕМНИЙ АДМІНІСТРАТОР"
          period="01.2015 – сьогодні (віддалена робота з 2022)"
          description="ПРАТ ЗЗРК, просп. Соборний 158-210, Запоріжжя, Україна"
          list={[
            "Розробка та підтримка застосунку для обліку робочого часу (Delphi, Firebird Database)", 
            "Підтримка корпоративного сайту (HTML, CSS, Javascript, PHP)",
            "Додаткові обов’язки системного адміністратора з 02.2017"
          ]}
        />,
        <BlockInfo 
          header="РОЗРОБНИК ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ"
          period="10.2011 – 12.2014"
          description="Malenkij Paris GmbH, Москва, Росія"
          list={[
            "Розробка онлайн-магазину (PHP, HTML, CSS, Javascript)", 
          ]}
        />,
        <BlockInfo 
          header="СИСТЕМНИЙ АДМІНІСТРАТОР"
          period="12.2007 – 07.2011"
          description="Комунальне підприємство «Наш Дім», Дніпрорудне, Україна"
          list={[
            "Підтримка локальних мереж (FoxPro)", 
            "Близько 50 комп'ютерних робочих місць", 
            "Програмне забезпечення FoxPro", 
            "Робота на пів ставки", 
          ]}
        />,
        <BlockInfo 
          header="РОЗРОБНИК ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ"
          period="11.2006 – 10.2009"
          description="ТОВ «Аркоб», Дніпрорудне, Україна"
          list={[
            "Розробка та підтримка програм для розрахунку споживання електроенергії в архітектурній сфері (Delphi, Firebird Database)", 
          ]}
        />,
      ],
      right: [
        <BlockInfo 
          header="РОЗРОБНИК ПРОГРАМНОГО ЗАБЕЗПЕЧЕННЯ"
          period="09.2000 – 07.2006"
          description="Werkol GmbH, Москва, Росія"
          list={[
            "Розробка та підтримка онлайн-магазину для продажу гігієнічних та косметичних товарів (Delphi, Interbase)", 
          ]}
        />,
        <BlockInfo 
          header="IT-АСИСТЕНТ ТА ПРОГРАМІСТ"
          period="09.1994 – 05.2000"
          description="Фірма Wotinov, Москва, Росія"
          list={[
            "Робота на складі та пакувальному відділі", 
            "Перший досвід з FoxPro", 
            "Розробка ПЗ для управління замовленнями та складом у сфері оптової торгівлі косметикою", 
          ]}
        />,
        <BlockInfo 
          header="ЕЛЕКТРИК"
          period="07.1990 – 08.1994"
          description="ПРАТ ЗЗРК, Мала Білозерка, Україна"
          list={[
            "Загальні роботи з технічного обслуговування та ремонту", 
            "Монтаж освітлювальних систем", 
          ]}
        />,
        <BlockInfo 
          header="ЕЛЕКТРИК"
          period="06.1989 – 05.1990"
          description="Молокозавод, Дніпрорудне, Україна"
          list={[
            "Обслуговування та ремонт обладнання для переробки молока та виготовлення сиру", 
            "Заміна запчастин", 
          ]}
        />,
      ],
    },
    skills: {
      title: "НАВИЧКИ",
      icon: Laptop,
      left: [
        <BlockInfo2 
          title="Мови програмування"
          list={[
            "Javascript, Delphi, C",
            "MySQL, Firebird Database",
            "Node.js, Express.js, React",
            "HTML, CSS"
          ]}
        />,
        <BlockInfo2 
          title="Професійні знання"
          list={[
            "Веб-застосунки (Backend і Frontend)",
            "SQL, реляційні БД, процедури, тригери тощо",
            "Об'єктно-орієнтоване програмування",
            "Git"
          ]}
        />,
      ],
      right: [
        <BlockInfo3 
          title="Мови"
          list={[
            { title: "Німецька", rating: 4 },
            { title: "Українська", rating: 6 },
            { title: "Російська", rating: 6 },
            { title: "Англійська", rating: 3 },
          ]}
        />,
        <BlockInfo3 
          title="Загальні IT"
          list={[
            { title: "MS-Office", rating: 5 },
            { title: "Photoshop", rating: 4 },
          ]}
        />,
      ],
    },
    projects: {
      title: "Особисті проєкти",
      icon: Rocket,
      left: [
        <BlockInfo2 
          title="ФРИЛАНС-РОБОТА ЯК ПРОГРАМІСТ"
          description="Наразі працюю над проєктом Finping. Це SaaS-сервіс для моніторингу валютних і товарних ринків. Використовую Node.js, Sequelize, Express.js, React та Tailwind CSS. Як джерела даних — Yahoo Finance, CoinGecko та FXRates"
          list={[
            <a className="text-red-700" href="https://www.finping.space" target="_blank">https://www.finping.space</a>,
            <a className="text-red-700" href="https://github.com/StrekanovAlexander/saas-finping" target="_blank">https://github.com/StrekanovAlexander/saas-finping</a>
          ]}
        />,
      ],
      right: [
        <BlockInfo2 
          title="Невеликі відеоролики з теорії цифрових автоматів. Карти Карно тощо."
          list={[
            <a className="text-red-700" href="https://www.youtube.com/channel/UCBcRsyBaLDJLvkBYpMF9oFA" target="_blank">Мій YouTube канал</a>,
          ]}
        />,
      ],
    },
  },
  en: {
    education: {
      title: "EDUCATION AND COURSES",
      icon: GraduationCap,

      left: [
        <BlockInfo 
          header="PARTICIPATION IN THE P.I.A. W.E.B. PROGRAM"
          period="08.2025 – present"
          description="bfz gGmbH Bad Kissingen"
        />,
        <BlockInfo 
          header="LANGUAGE AND INTEGRATION COURSE"
          period="07.2024 – 07.2025"
          description="bfz gGmbH Bad Kissingen"
          list={[
            "Obtained German Certificate B1", 
            "Life in Germany"
          ]}
        />,
      ],
      right: [
        <BlockInfo 
          header="COMPUTER ENGINEERING STUDIES"
          period="09.2011 – 05.2015"
          description="National Technical University Zaporizhzhia, Ukraine"
          list={[
            "Degree: Diploma", 
            "Focus on programming languages C and Java",
            "Digital Automation"
          ]}
        />,    
        <BlockInfo 
          header="PROGRAMMING COURSE IN C"
          period="07.2002 – 08.2002"
          description="Computer Training Center at Moscow State Technical University, Russia"
        />,
        <BlockInfo 
          header="DATABASE PROGRAMMING COURSE WITH DELPHI 4.0/5.0"
          period="06.2001 – 07.2001"
          description="Computer Training Center at Moscow State Technical University, Russia"
        />
      ]
    },
    experience: {
      title: "WORK EXPERIENCE",
      icon: Briefcase,
      left: [
        <BlockInfo 
          header="SOFTWARE ENGINEER AND SYSTEM ADMINISTRATOR"
          period="01.2015 – present (Remote since 2022)"
          description="PRAT ZZRK, Sobornyi Ave. 158-210, Zaporizhzhia, Ukraine"
          list={[
            "Development and maintenance of a working time tracking application (Delphi, Firebird Database)", 
            "Maintenance of company website (HTML, CSS, Javascript, PHP)",
            "Additional role as system administrator since 02.2017"
          ]}
        />,
        <BlockInfo 
          header="SOFTWARE DEVELOPER"
          period="10.2011 – 12.2014"
          description="Malenkij Paris GmbH, Moscow, Russia"
          list={[
            "Development of an online shop (PHP, HTML, CSS, Javascript)", 
          ]}
        />,
        <BlockInfo 
          header="SYSTEM ADMINISTRATOR"
          period="12.2007 – 07.2011"
          description="Municipal Company 'Nash Dim', Dniprorudne, Ukraine"
          list={[
            "Maintenance of local networks (FoxPro)", 
            "Responsible for ~50 workstations", 
            "FoxPro Software", 
            "Part-time employment", 
          ]}
        />,
        <BlockInfo 
          header="SOFTWARE DEVELOPER"
          period="11.2006 – 10.2009"
          description="Arkob Ltd., Dniprorudne, Ukraine"
          list={[
            "Development and support of electricity consumption calculation software (Delphi, Firebird Database)", 
          ]}
        />,
      ],
      right: [
        <BlockInfo 
          header="SOFTWARE DEVELOPER"
          period="09.2000 – 07.2006"
          description="Werkol GmbH, Moscow, Russia"
          list={[
            "Development and maintenance of an online shop for hygiene and cosmetics (Delphi, Interbase)", 
          ]}
        />,
        <BlockInfo 
          header="IT ASSISTANT AND SOFTWARE DEVELOPER"
          period="09.1994 – 05.2000"
          description="Wotinov Ltd., Moscow, Russia"
          list={[
            "Work in warehouse and packaging department", 
            "First experience with FoxPro", 
            "Development of order and warehouse management software in cosmetics wholesale", 
          ]}
        />,
        <BlockInfo 
          header="ELECTRICIAN"
          period="07.1990 – 08.1994"
          description="PRAT ZZRK, Mala Bilozerka, Ukraine"
          list={[
            "General maintenance and repair work", 
            "Installation of lighting systems", 
          ]}
        />,
        <BlockInfo 
          header="ELECTRICIAN"
          period="06.1989 – 05.1990"
          description="Dairy Plant, Dniprorudne, Ukraine"
          list={[
            "Maintenance and repair of milk processing and cheese production equipment", 
            "Replacement of spare parts", 
          ]}
        />,
      ],
    },
    skills: {
      title: "SKILLS",
      icon: Laptop,
      left: [
        <BlockInfo2 
          title="Programming Languages"
          list={[
            "Javascript, Delphi, C",
            "MySQL, Firebird Database",
            "Node.js, Express.js, React",
            "HTML, CSS"
          ]}
        />,
        <BlockInfo2 
          title="Professional Knowledge"
          list={[
            "Web Applications (Backend and Frontend)",
            "SQL, relations, stored procedures, triggers etc.",
            "Object-Oriented Programming",
            "Git"
          ]}
        />,
      ],
      right: [
        <BlockInfo3 
          title="Languages"
          list={[
            { title: "German", rating: 4 },
            { title: "Ukrainian", rating: 6 },
            { title: "Russian", rating: 6 },
            { title: "English", rating: 3 },
          ]}
        />,
        <BlockInfo3 
          title="General IT"
          list={[
            { title: "MS-Office", rating: 5 },
            { title: "Photoshop", rating: 4 },
          ]}
        />,
      ],
    },
    projects: {
      title: "Personal Projects",
      icon: Rocket,
      left: [
        <BlockInfo2 
          title="FREELANCE WORK AS A PROGRAMMER"
          description="Currently working on the Finping project, a SaaS service for monitoring currency and commodity markets. Using Node.js, Sequelize, Express.js, React and Tailwind CSS. Market data APIs: Yahoo Finance, CoinGecko and FXRates"
          list={[
            <a className="text-red-700" href="https://www.finping.space" target="_blank">https://www.finping.space</a>,
            <a className="text-red-700" href="https://github.com/StrekanovAlexander/saas-finping" target="_blank">https://github.com/StrekanovAlexander/saas-finping</a>
          ]}
        />,
      ],
      right: [
        <BlockInfo2 
          title="Short videos on the theory of digital automata. Karnaugh maps, etc."
          list={[
            <a className="text-red-700" href="https://www.youtube.com/channel/UCBcRsyBaLDJLvkBYpMF9oFA" target="_blank">My YouTube channel</a>,
          ]}
        />,
      ],
    },
  },
  ru: {
    education: {
      title: "ОБРАЗОВАНИЕ И КУРСЫ",
      icon: GraduationCap,

      left: [
        <BlockInfo 
          header="УЧАСТИЕ В ПРОГРАММЕ P.I.A. W.E.B."
          period="08.2025 – настоящее время"
          description="bfz gGmbH Бад-Киссинген"
        />,
        <BlockInfo 
          header="ЯЗЫКОВОЙ И ИНТЕГРАЦИОННЫЙ КУРС"
          period="07.2024 – 07.2025"
          description="bfz gGmbH Бад-Киссинген"
          list={[
            "Сертификат немецкого языка B1", 
            "Жизнь в Германии"
          ]}
        />,
      ],
      right: [
        <BlockInfo 
          header="УЧЁБА ПО СПЕЦИАЛЬНОСТИ КОМПЬЮТЕРНАЯ ИНЖЕНЕРИЯ"
          period="09.2011 – 05.2015"
          description="Национальный технический университет, Запорожье, Украина"
          list={[
            "Диплом", 
            "Упор на языки программирования C и Java",
            "Цифровая автоматизация"
          ]}
        />,    
        <BlockInfo 
          header="КУРС ПРОГРАММИРОВАНИЯ НА C"
          period="07.2002 – 08.2002"
          description="Центр компьютерного обучения при Московском государственном техническом университете, Россия"
        />,
        <BlockInfo 
          header="КУРС ПРОГРАММИРОВАНИЯ БАЗ ДАННЫХ НА DELPHI 4.0/5.0"
          period="06.2001 – 07.2001"
          description="Центр компьютерного обучения при Московском государственном техническом университете, Россия"
        />
      ]
    },
    experience: {
      title: "ОПЫТ РАБОТЫ",
      icon: Briefcase,
      left: [
        <BlockInfo 
          header="ИНЖЕНЕР-ПРОГРАММИСТ И СИСТЕМНЫЙ АДМИНИСТРАТОР"
          period="01.2015 – настоящее время (удалённо с 2022)"
          description="ПРАТ ЗЗРК, просп. Соборный 158-210, Запорожье, Украина"
          list={[
            "Разработка и поддержка приложения для учёта рабочего времени (Delphi, Firebird Database)", 
            "Поддержка корпоративного сайта (HTML, CSS, Javascript, PHP)",
            "Дополнительно системный администратор с 02.2017"
          ]}
        />,
        <BlockInfo 
          header="РАЗРАБОТЧИК ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ"
          period="10.2011 – 12.2014"
          description="Malenkij Paris GmbH, Москва, Россия"
          list={[
            "Разработка интернет-магазина (PHP, HTML, CSS, Javascript)", 
          ]}
        />,
        <BlockInfo 
          header="СИСТЕМНЫЙ АДМИНИСТРАТОР"
          period="12.2007 – 07.2011"
          description="Коммунальное предприятие «Наш Дом», Днепрорудное, Украина"
          list={[
            "Поддержка локальных сетей (FoxPro)", 
            "Около 50 рабочих мест", 
            "ПО FoxPro", 
            "Работа на полставки", 
          ]}
        />,
        <BlockInfo 
          header="РАЗРАБОТЧИК ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ"
          period="11.2006 – 10.2009"
          description="ООО «Аркоб», Днепрорудное, Украина"
          list={[
            "Разработка и поддержка ПО для расчёта потребления электроэнергии в архитектурной сфере (Delphi, Firebird Database)", 
          ]}
        />,
      ],
      right: [
        <BlockInfo 
          header="РАЗРАБОТЧИК ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ"
          period="09.2000 – 07.2006"
          description="Werkol GmbH, Москва, Россия"
          list={[
            "Разработка и поддержка интернет-магазина для продажи гигиенической и косметической продукции (Delphi, Interbase)", 
          ]}
        />,
        <BlockInfo 
          header="IT-АССИСТЕНТ И ПРОГРАММИСТ"
          period="09.1994 – 05.2000"
          description="Фирма Wotinov, Москва, Россия"
          list={[
            "Работа на складе и упаковочном участке", 
            "Первый опыт работы с FoxPro", 
            "Разработка ПО для управления заказами и складом в оптовой торговле косметикой", 
          ]}
        />,
        <BlockInfo 
          header="ЭЛЕКТРИК"
          period="07.1990 – 08.1994"
          description="ПРАТ ЗЗРК, Малая Белозерка, Украина"
          list={[
            "Обслуживание и ремонт оборудования", 
            "Монтаж осветительных систем", 
          ]}
        />,
        <BlockInfo 
          header="ЭЛЕКТРИК"
          period="06.1989 – 05.1990"
          description="Молочный завод, Днепрорудное, Украина"
          list={[
            "Обслуживание и ремонт оборудования для переработки молока и производства сыра", 
            "Замена запчастей", 
          ]}
        />,
      ],
    },
    skills: {
      title: "НАВЫКИ",
      icon: Laptop,
      left: [
        <BlockInfo2 
          title="Языки программирования"
          list={[
            "Javascript, Delphi, C",
            "MySQL, Firebird Database",
            "Node.js, Express.js, React",
            "HTML, CSS"
          ]}
        />,
        <BlockInfo2 
          title="Профессиональные знания"
          list={[
            "Веб-приложения (Backend и Frontend)",
            "SQL, реляционные БД, процедуры, триггеры и т. д.",
            "Объектно-ориентированное программирование",
            "Git"
          ]}
        />,
      ],
      right: [
        <BlockInfo3 
          title="Языки"
          list={[
            { title: "Немецкий", rating: 4 },
            { title: "Украинский", rating: 6 },
            { title: "Русский", rating: 6 },
            { title: "Английский", rating: 3 },
          ]}
        />,
        <BlockInfo3 
          title="Общие IT"
          list={[
            { title: "MS-Office", rating: 5 },
            { title: "Photoshop", rating: 4 },
          ]}
        />,
      ],
    },
    projects: {
      title: "Личные проекты",
      icon: Rocket,
      left: [
        <BlockInfo2 
          title="ФРИЛАНС-РАБОТА КАК ПРОГРАММИСТ"
          description="В настоящее время работаю над проектом Finping. Это SaaS-сервис для мониторинга валютных и товарных рынков. Использую Node.js, Sequelize, Express.js, React и Tailwind CSS. Источники данных: Yahoo Finance, CoinGecko и FXRates"
          list={[
            <a className="text-red-700" href="https://www.finping.space" target="_blank">https://www.finping.space</a>,
            <a className="text-red-700" href="https://github.com/StrekanovAlexander/saas-finping" target="_blank">https://github.com/StrekanovAlexander/saas-finping</a>
          ]}
        />,
      ],
      right: [
        <BlockInfo2 
          title="Небольшие видеоролики по теории цифровых автоматов. Карты Карно и т.д."
          list={[
            <a className="text-red-700" href="https://www.youtube.com/channel/UCBcRsyBaLDJLvkBYpMF9oFA" target="_blank">Мой YouTube канал</a>,
          ]}
        />,
      ],
    },
  },
};