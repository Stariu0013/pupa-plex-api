const CURRENT_MOVIES = [
    {
        id: 1,
        name: "Я працюю на цвинтарі",
        description: "35-річний Олександр (Віталій Салій) заробляє на життя виготовленням надгробків. Він не любить згадувати про своє минуле. Сьогодення його також не тішить. Особливо коли доводиться вирішувати проблеми доньки-підлітка. Цинічний одинак зі складним характером доволі комфортно почувається на кладовищі серед могил та квітів, хоча навіть тут доводиться щодня спілкуватися з людьми.",
        director: "Олексій Тараненко",
        premiere: "05.01.2024",
        languages: ["українська"],
        genre: "Документальний",
        isForAdults: true,
        duration: 2.10,
        movieInfo: {
            dates: ["05.01.2024", "06.01.2024"],
            halls: [
                {
                    name: "2D",
                    showDate: ["05.01.2024", "06.01.2024"],
                    times: ["12:00", "15:00", "18:00"]
                },
                {
                    name: "3D",
                    showDate: ["05.01.2024"],
                    times: ["12:00", "15:00"]
                }
            ],
        },
        roles: [],
    },
    {
        id: 2,
        name: "Додому",
        description: "Дія картини відбувається в сучасний час в Україні. У Мустафи на війні гине син, і віруючий мусульманин приїжджає до столиці забрати тіло Назіма, щоби поховати його в Криму. Перед від'їздом він наполягає на тому, щоби молодший Алім відправився з ним додому, батько хоче за традицією витримати сорок днів жалоби.",
        director: "Наріман Алієв",
        premiere: "05.01.2024",
        languages: ["кримськотатарська, українська, російська"],
        genre: "драма",
        isForAdults: false,
        duration: 2.10,
        movieInfo: {
            dates: ["05.01.2024", "06.01.2024"],
            halls: [
                {
                    name: "2D",
                    showDate: ["05.01.2024", "06.01.2024"],
                    times: ["12:00", "15:00", "18:00"]
                },
                {
                    name: "3D",
                    showDate: ["05.01.2024"],
                    times: ["12:00", "15:00"]
                }
            ],
        },
        roles: [],
    }, {
        id: 3,
        name: "Стоп земля",
        description: "16-річна Маша вчиться в звичайній київській школі в 11-А класі. Не почуватися дивно та відсторонено в колективі їй допомагають близькі друзі Яна та Сєня, по-своєму переживаючи напружену шкільну буденність. Окрім майбутніх екзаменів вийти з зони комфорту Машу змушує закоханість в однокласника Сашу. Вона розуміє, якщо не наважишся спитати – ніколи не знатимеш, чи це взаємно. ",
        director: "Горностай Катерина",
        premiere: "05.01.2024",
        languages: ["українська"],
        genre: "драма",
        isForAdults: true,
        duration: 2.10,
        movieInfo: {
            dates: ["05.01.2024", "06.01.2024"],
            halls: [
                {
                    name: "2D",
                    showDate: ["05.01.2024", "06.01.2024"],
                    times: ["12:00", "15:00", "18:00"]
                },
                {
                    name: "3D",
                    showDate: ["05.01.2024"],
                    times: ["12:00", "15:00"]
                }
            ],
        },
        roles: [],
    }, {
        id: 4,
        name: "20 днів у Маріуполі",
        description: "Початок повномасштабного вторгнення вони зустріли у Маріуполі – відеожурналіст Associated Press Мстислав Чернов разом зі своїми колегами Василиною Степаненко та фотографом Євгеном Малолєткою. Попри усі розмови та чутки, до такого розвитку подій люди не були готові. Шок від жорстокості, з якою росіяни руйнували не лише будинки, а й долі безлічі маріупольців, журналісти пережили разом з усіма. На 21-й день після початку вторгнення їм вдалося виїхати через гуманітарний коридор. Відтоді у Маріуполі немає жодного журналіста.",
        director: "Мстислав Чернов",
        premiere: "05.01.2024",
        languages: ["in English(with Ukrainian subtitles)"],
        genre: "документальний фільм і воєнний фільм",
        isForAdults: true,
        duration: 2.10,
        movieInfo: {
            dates: ["05.01.2024", "06.01.2024"],
            halls: [
                {
                    name: "2D",
                    showDate: ["05.01.2024", "06.01.2024"],
                    times: ["12:00", "15:00", "18:00"]
                },
                {
                    name: "3D",
                    showDate: ["05.01.2024"],
                    times: ["12:00", "15:00"]
                }
            ],
        },
        roles: [],
    },
];
const FEATURED_MOVIES = [
    {
        id: 5,
        name: "Драма",
        description: "",
        director: "Владік",
        premiere: "05.01.2024",
        languages: ["українська", "англіська"],
        genre: "Документальний",
        isForAdults: false,
        duration: 2.10,
        movieInfo: {
            dates: ["05.01.2024", "06.01.2024"],
            halls: [
                {
                    name: "2D",
                    showDate: ["05.01.2024", "06.01.2024"],
                    times: ["12:00", "15:00", "18:00"]
                },
                {
                    name: "3D",
                    showDate: ["05.01.2024"],
                    times: ["12:00", "15:00"]
                }
            ],
        },
        roles: [],
    },
    {
        id: 6,
        name: "Голубівники",
        description: "З кінця 1940-х до кінця 1980-х голуби були одержимістю київських хлопців. \n" +
            "Це фільм про те, як хобі з дитинства стає сенсом життя.",
        director: "Михайло Волков",
        premiere: "05.01.2024",
        languages: ["українська"],
        genre: "Драма",
        isForAdults: false,
        duration: 2.10,
        movieInfo: {
            dates: ["05.01.2024", "06.01.2024"],
            halls: [
                {
                    name: "2D",
                    showDate: ["05.01.2024", "06.01.2024"],
                    times: ["12:00", "15:00", "18:00"]
                },
                {
                    name: "3D",
                    showDate: ["05.01.2024"],
                    times: ["12:00", "15:00"]
                }
            ],
        },
        roles: [],
    },
    {
        id: 7,
        name: "Памфір",
        description: "Головний герой фільму, Памфір — колишній контрабандист, проте гарний сім'янин, який повертається до рідного села, розташованого у західній частині України, після того, як кілька років відпрацював за кордоном. Він вирішує відтепер заробляти на життя чесною працею, подаючи тим самим гарний приклад своєму синові-підліткові Назареві. Головні події відбуваються на Буковині напередодні традиційного карнавалу — Маланки. Але в регіоні корупція є невід'ємною частиною усіх сфер життя, а злочинність та релігія нерозривно пов'язані між собою. Організовану злочинність очолює Орест Іванович Мордовський на прізвище «Морда», за сумісництвом керівник місцевого лісоохоронного підприємства. Шляхетним планам Памфіра не судилося здійснитися через інцидент за участю його сина: Назар хоче затримати батька вдома та підпалює його документи, а разом з ними мимоволі й місцевий дім молитви. Тепер, щоб відшкодувати завдану шкоду, Памфір змушений відновити зв'язок зі своїм неспокійним минулим, повернутися до криміналу, стати членом злочинного угруповання та знову зайнятися контрабандою",
        director: "Дмитро Сухолиткий-Собчук",
        premiere: "05.01.2024",
        languages: ["українська"],
        genre: "кінодрама",
        isForAdults: true,
        duration: 2.10,
        movieInfo: {
            dates: ["05.01.2024", "06.01.2024"],
            halls: [
                {
                    name: "2D",
                    showDate: ["05.01.2024", "06.01.2024"],
                    times: ["12:00", "15:00", "18:00"]
                },
                {
                    name: "3D",
                    showDate: ["05.01.2024"],
                    times: ["12:00", "15:00"]
                }
            ],
        },
        roles: [],
    },
    {
        id: 8,
        name: "Люксембург, Люксембург",
        description: "Про свого батька два брати-близнюки дізналися вже у дорослому віці. Це важкий період незалежності України кінця 1990-х років. З дитинства їх виховувала мати. Розуміючи, що батько помирає в Люксембурзі, Коля вирішив поїхати до нього. Протилежний за характером Василь вважає, що відвідувати батька, якого вони фактично не знають, це зайве. Тому він всіляко намагається перешкодити брату поїхати в далеку країну. Постійні проблеми та перепони ще більше загартували Колю і він ще більше утвердився в думці таки поїхати. Поступово до цієї думки дійшов і Василь, а тому обидва брати вирушили на зустріч із батьком. Однак подорож до батька, якого вже госпіталізували до лікарні, не виправдала сподівань братів",
        director: "Антоніо Лукіч",
        premiere: "05.01.2024",
        languages: ["українська"],
        genre: "трагікомедія",
        isForAdults: true,
        duration: 2.10,
        movieInfo: {
            dates: ["05.01.2024", "06.01.2024"],
            halls: [
                {
                    name: "2D",
                    showDate: ["05.01.2024", "06.01.2024"],
                    times: ["12:00", "15:00", "18:00"]
                },
                {
                    name: "3D",
                    showDate: ["05.01.2024"],
                    times: ["12:00", "15:00"]
                }
            ],
        },
        roles: [],
    },
];

module.exports = {
    CURRENT_MOVIES,
    FEATURED_MOVIES,
}