export type Language = "ru" | "kz" | "en";

export interface TranslationKeys {
  // Header
  header: {
    courseName: string;
    foundation: string;
    program: string;
    pricing: string;
    faq: string;
    enroll: string;
  };
  // Hero
  hero: {
    stream: string;
    startDate: string;
    title: string;
    titleHighlight: string;
    titleSub: string;
    description: string;
    audience: string;
    valueBullets: string[];
    trustedBy: string;
    enrollBtn: string;
    programBtn: string;
    idea: string;
    photo: string;
    video: string;
    sound: string;
    speech: string;
    studentWorksBtn: string;
    questionsBtn: string;
  };
  // Showcase
  showcase: {
    title: string;
    titleGradient: string;
  };
  // Course Program
  courseProgram: {
    title: string;
    subtitle: string;
    moduleLabel: string;
    bonusLabel: string;
    whatYouLearn: string;
    result: string;
    homework: string;
    modules: {
      title: string;
      description: string;
      learn: string[];
      result: string;
      homework: string[];
    }[];
  };
  // Pricing
  pricing: {
    title: string;
    subtitle: string;
    recommend: string;
    premium: string;
    choosePlan: string;
    maxResult: string;
    studioWork: string;
    studioDesc: string;
    studioFooter: string;
    proFooter: string;
    priceLabel: string;
    guaranteeTitle: string;
    guaranteeText: string;
    basic: { features: string[]; priceKzt: string; priceRub: string };
    pro: { features: string[]; priceKzt: string; priceRub: string };
    elite: {
      features: string[];
      subs: string[];
      priceKzt: string;
      priceRub: string;
    };
  };
  // FAQ
  faq: {
    title: string;
    description: string;
    enrollBtn: string;
    questionBtn: string;
    items: { question: string; answer: string }[];
  };
  // Footer
  footer: {
    brand: string;
    copyright: string;
    contacts: string;
    addressLabel: string;
    address: string;
    bin: string;
    privacy: string;
    offer: string;
  };
  // Sticky CTA
  stickyCta: {
    startDate: string;
    limited: string;
    enrollBtn: string;
  };
  // Enroll Modal
  enrollModal: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    selectTariff: string;
    submitBtn: string;
    submitting: string;
    consent: string;
    consentRequired: string;
    fillAll: string;
    fillAllDesc: string;
    success: string;
    successDesc: string;
    error: string;
    errorDesc: string;
  };
  // Pricing Enroll Modal
  pricingModal: {
    title: string;
    description: string;
    selectedPlan: string;
    cost: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    emailLabel: string;
    emailPlaceholder: string;
    submitBtn: string;
    submitting: string;
    consent: string;
    consentRequired: string;
    purposeLabel: string;
    purposePlaceholder: string;
    nameError: string;
    phoneError: string;
    emailError: string;
    success: string;
    successDesc: string;
    error: string;
    errorDesc: string;
  };
  // Question Modal
  questionModal: {
    title: string;
    description: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    questionLabel: string;
    questionPlaceholder: string;
    submitBtn: string;
    submitting: string;
    fillAll: string;
    fillAllDesc: string;
    success: string;
    successDesc: string;
    error: string;
    errorDesc: string;
  };
}

const ru: TranslationKeys = {
  header: {
    courseName: "Курс по ИИ от Yelumio",
    foundation: "Основа",
    program: "Программа",
    pricing: "Тарифы",
    faq: "FAQ",
    enroll: "Записаться",
  },
  hero: {
    stream: "Поток",
    startDate: "Начало",
    title: "Как создавать продающий ",
    titleHighlight: "ИИ",
    titleSub: " контент?",
    description: "От идеи до первой продажи. Без студии, видеографа и бюджета.",
    audience: "Для маркетологов, SMM-специалистов, дизайнеров, креаторов и владельцев бизнеса",
    valueBullets: ["🎬 Готовое портфолио из 5+ ИИ-креативов", "💼 Реальный кейс для заказчиков", "🚀 Навык, за который платят 50–300 тыс. ₸ в месяц"],
    trustedBy: "Уже работаем с",
    enrollBtn: "Записаться на курс",
    programBtn: "Посмотреть программу ↓",
    idea: "ИДЕЯ",
    photo: "ФОТО",
    video: "ВИДЕО",
    sound: "ЗВУК",
    speech: "РЕЧЬ",
    studentWorksBtn: "Работы учеников",
    questionsBtn: "Остались вопросы",
  },
  showcase: {
    title: "Такие кадры вы сможете создавать",
    titleGradient: "по окончанию курса",
  },
  courseProgram: {
    title: "Программа курса",
    subtitle: "1 вводный модуль + 7 практических: от идеи до готового кейса в портфолио",
    moduleLabel: "Модуль",
    bonusLabel: "Бонусный модуль",
    whatYouLearn: "Что изучишь",
    result: "Результат",
    homework: "Домашнее задание",
    modules: [
      {
        title: "Идея и сценарий: как работает креатив",
        description: "В этом модуле разбираемся с самым главным — идеей. Потому что без идеи ИИ не спасает, а просто делает \"красиво, но пусто\".",
        learn: ["Как рождаются идеи для креативов", "Где брать вдохновение и какие сайты использовать", "Как смотреть на визуал и понимать: это красиво или нет", "Почему один креатив работает, а другой нет", "Как из одной идеи делать несколько вариантов", "Как превращать идею в короткий сценарий под видео"],
        result: "Понимание креативного мышления и готовые идеи для дальнейшей работы.",
        homework: ["Найти референсы", "Сформулировать идею", "Написать короткий сценарий под будущий креатив"],
      },
      {
        title: "ИИ для текста и промптов",
        description: "Здесь мы учимся думать и говорить с нейросетями правильно. Текст — это фундамент всего.",
        learn: ["Как работать с текстом в ИИ", "Как правильно писать промпты", "Какие текстовые нейросети лучшие", "Как нейросети воспринимают наши запросы", "Почему один и тот же запрос даёт разный результат", "Как формулировать запросы чётко и понятно", "Типичные ошибки в текстах и промптах"],
        result: "Ты понимаешь, как управлять ИИ через текст, а не гадать.",
        homework: ["Написать несколько промптов", "Протестировать разные формулировки", "Сравнить результат и сделать выводы"],
      },
      {
        title: "ИИ для фото",
        description: "Переходим к визуалу. Здесь ты учишься делать качественные ИИ-фото, которые выглядят дорого.",
        learn: ["Какие нейросети мы используем для создания ИИ-фото", "В чём разница между ними", "Какую нейросеть выбирать под конкретную задачу", "Как делать продуктовые, сценовые и lifestyle-кадры", "Свет, ракурс, глубина, фокус", "Как избегать \"пластика\" и дешёвого вида"],
        result: "Готовые ИИ-фото, которые можно использовать в работе или портфолио.",
        homework: ["Создать несколько фото под одну идею", "Поработать со светом и ракурсами"],
      },
      {
        title: "ИИ для видео",
        description: "Оживляем визуал и учимся работать с движением.",
        learn: ["Какие нейросети сейчас лучшие для видео", "Какие стоит использовать, а какие нет", "Чем отличаются разные способы генерации видео", "Как правильно оживлять фото", "Движение камеры, среды и объектов", "Типичные ошибки в ИИ-видео"],
        result: "Понимание, как делать видео, которое выглядит естественно и профессионально.",
        homework: ["Оживить свои изображения", "Сделать несколько коротких видео-сцен"],
      },
      {
        title: "Музыка и речь",
        description: "Звук — это то, что делает креатив дорогим на ощущение.",
        learn: ["Как музыка влияет на восприятие видео", "Чем отличается музыка от саунд-дизайна", "Как подбирать звук под настроение", "Когда нужен голос, а когда лучше без него", "Работа с речью, диктором и субтитрами", "Типичные ошибки со звуком"],
        result: "Ты понимаешь, как правильно работать со звуком и речью в креативах.",
        homework: ["Подобрать или создать звук для видео", "Сделать вариант с речью и без неё"],
      },
      {
        title: "Упаковка и монтаж",
        description: "Очень важный модуль. Даже хороший креатив можно \"убить\" плохим монтажом.",
        learn: ["Как правильно монтировать короткие видео", "Структура ролика: начало, развитие, финал", "Как сделать, чтобы видео досматривали", "Правильные форматы под соцсети", "Какие программы лучше использовать", "Типографика, обложки, безопасные зоны"],
        result: "Готовый, упакованный креатив, который можно публиковать.",
        homework: ["Смонтировать финальный ролик", "Подготовить обложку"],
      },
      {
        title: "Монетизация и кейсы",
        description: "Финальный модуль — про деньги и применение навыка.",
        learn: ["Как оформить свою страницу или портфолио", "Какую презентацию подготовить", "Как показать свою работу заказчику", "Как оформлять кейсы", "Как презентовать результат", "Как использовать навык для заработка"],
        result: "Понимание, как применять полученные навыки в реальной жизни.",
        homework: ["Оформить кейс", "Подготовить презентацию своей работы"],
      },
      {
        title: "Бонус: ИИ-инструменты для бизнеса и автоматизации",
        description: "Дополнительный модуль сверх программы — про то, как ИИ помогает экономить время, автоматизировать процессы и создавать продукты.",
        learn: ["Как создавать Telegram-ботов с помощью ИИ", "Как правильно пользоваться Claude и выжимать из него максимум", "Как создавать сайты с помощью ИИ", "Как автоматизировать и структурировать работу через Claude", "Как и где правильно создавать ИИ-аватары"],
        result: "У тебя есть набор продвинутых ИИ-инструментов для бизнеса, контента и личных проектов.",
        homework: ["Собрать своего Telegram-бота или ИИ-аватар", "Применить Claude для автоматизации одной своей задачи"],
      },
    ],
  },
  pricing: {
    title: "Выбери свой тариф",
    subtitle: "Три формата обучения для разных целей и темпов",
    recommend: "Рекомендуем",
    premium: "Premium",
    choosePlan: "Выбрать",
    maxResult: "Максимум результата",
    studioWork: "Работа как с креативной студией",
    studioDesc: "Это уже не просто обучение, а совместное продакшн-мышление.",
    studioFooter: "Тем, кто хочет результат уровня студии, а не просто обучение.",
    proFooter: "Подходит тем, кто хочет максимум результата и личный разбор",
    priceLabel: "Стоимость",
    guaranteeTitle: "Гарантия",
    guaranteeText: "Если в течение 7 дней после старта поймёшь, что курс не подходит — вернём 100% оплаты.",
    basic: {
      features: ["Доступ ко всем 8 модулям", "5–6 часов видео", "Презентации и инструкции", "Домашние задания", "Проверка ДЗ", "Обратная связь по работам"],
      priceKzt: "120 000 ₸",
      priceRub: "≈ 21 800 ₽",
    },
    pro: {
      features: ["Всё из тарифа Basic", "Личное участие автора курса", "Разбор каждого креатива", "Детальная работа с кадрами, светом, движением", "Ускоренный рост и глубина"],
      priceKzt: "200 000 ₸",
      priceRub: "≈ 36 400 ₽",
    },
    elite: {
      features: ["Всё из тарифа PRO / Mentor", "1 реальный платный заказ от компании (30 000 ₸)", "Совместная сборка 1 креатива «под ключ»", "Разбор промптов и пайплайна до идеала", "Приоритетная обратная связь", "Личное видение автора курса", "Онлайн-созвоны с автором курса"],
      subs: ["", "портфолио, клиенты, бренд — создаем на деле", "идея → промпт → визуал → видео → звук → финал", "", "", "", ""],
      priceKzt: "400 000 ₸",
      priceRub: "≈ 72 700 ₽",
    },
  },
  faq: {
    title: "Остались вопросы?",
    description: "Готов начать создавать профессиональные креативы с помощью ИИ? Записывайся на ближайший поток.",
    enrollBtn: "Записаться на поток",
    questionBtn: "Задать вопрос",
    items: [
      { question: "Подойдёт ли курс новичкам?", answer: "Да. Курс построен так, что мы начинаем с базы и мышления. Если ты вообще раньше не работал с ИИ — разберёшься. Если уже что-то пробовал — просто быстрее пойдёшь." },
      { question: "Нужен ли ноутбук или можно с телефона?", answer: "Можно и с телефона, и с ноутбука. Но если хочешь максимальное качество и контроль — ноутбук даст больше возможностей. Мы покажем оба варианта." },
      { question: "Сколько времени в неделю нужно уделять?", answer: "В среднем 4–6 часов в неделю. Можно проходить в своём темпе, но чем честнее делаешь домашки — тем больше пользы получаешь." },
      { question: "Какие подписки обязательны?", answer: "Минимум одна платная подписка на ИИ-инструмент. Без этого нормальную практику не сделать. Мы заранее покажем варианты и объясним, что выбрать." },
      { question: "Как проходит проверка домашних заданий?", answer: "Ты сдаёшь работу — получаешь конкретную обратную связь: что хорошо, что исправить и почему. Без шаблонных «норм» и «молодец»." },
      { question: "Можно ли зарабатывать после курса?", answer: "Да. После курса у тебя будут готовые креативы, кейс и понимание процесса — этого достаточно, чтобы брать заказы или использовать навык в своём бизнесе." },
    ],
  },
  footer: {
    brand: "Yelumio",
    copyright: "© 2026 Yelumio AI Studio. Все права защищены.",
    contacts: "Контакты",
    addressLabel: "Адрес",
    address: "Yelumio AI Studio, Астана, Казахстан",
    bin: "БИН/ИНН: уточняется",
    privacy: "Политика конфиденциальности",
    offer: "Публичная оферта",
  },
  stickyCta: {
    startDate: "Старт курса",
    limited: "Количество мест ограничено",
    enrollBtn: "Записаться на курс",
  },
  enrollModal: {
    title: "Записаться на курс",
    description: "Оставь заявку — мы свяжемся с тобой для уточнения деталей",
    nameLabel: "Имя",
    namePlaceholder: "Введи имя",
    phoneLabel: "Номер телефона (WhatsApp)",
    phonePlaceholder: "+7 (___) ___-__-__",
    selectTariff: "Выбери тариф",
    submitBtn: "Оставить заявку",
    submitting: "Отправка...",
    consent: "Соглашаюсь с обработкой персональных данных",
    consentRequired: "Подтверди согласие на обработку персональных данных",
    fillAll: "Заполни все поля",
    fillAllDesc: "Пожалуйста, укажи имя, телефон и выбери тариф",
    success: "Заявка отправлена!",
    successDesc: "Мы свяжемся с тобой в ближайшее время",
    error: "Ошибка отправки",
    errorDesc: "Попробуйте ещё раз или свяжитесь с нами напрямую",
  },
  pricingModal: {
    title: "Запись на тариф",
    description: "Заполни данные для оформления",
    selectedPlan: "Выбранный тариф",
    cost: "Стоимость",
    nameLabel: "Имя",
    namePlaceholder: "Введи своё имя",
    phoneLabel: "Номер телефона (WhatsApp)",
    emailLabel: "Email",
    emailPlaceholder: "email@example.com",
    submitBtn: "Оставить заявку",
    submitting: "Отправка...",
    consent: "Соглашаюсь с обработкой персональных данных",
    consentRequired: "Подтверди согласие на обработку персональных данных",
    purposeLabel: "Где ты хочешь применять ИИ?",
    purposePlaceholder: "Например: видеопродакшн, маркетинг, дизайн...",
    nameError: "Введи своё имя",
    phoneError: "Введи корректный номер телефона",
    emailError: "Введи корректный email",
    success: "Заявка отправлена!",
    successDesc: "Мы свяжемся с тобой в ближайшее время",
    error: "Ошибка отправки",
    errorDesc: "Попробуйте ещё раз",
  },
  questionModal: {
    title: "Задать вопрос",
    description: "Оставь свой вопрос — мы свяжемся с тобой в ближайшее время",
    emailLabel: "Электронная почта",
    emailPlaceholder: "example@mail.com",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "+7 (___) ___-__-__",
    questionLabel: "Твой вопрос",
    questionPlaceholder: "Напиши свой вопрос...",
    submitBtn: "Отправить вопрос",
    submitting: "Отправка...",
    fillAll: "Заполни все поля",
    fillAllDesc: "Пожалуйста, заполни все обязательные поля",
    success: "Вопрос отправлен!",
    successDesc: "Мы свяжемся с тобой в ближайшее время",
    error: "Ошибка отправки",
    errorDesc: "Попробуйте ещё раз или свяжитесь с нами напрямую",
  },
};

const kz: TranslationKeys = {
  header: {
    courseName: "Yelumio ЖИ курсы",
    foundation: "Негіз",
    program: "Бағдарлама",
    pricing: "Тарифтер",
    faq: "FAQ",
    enroll: "Жазылу",
  },
  hero: {
    stream: "Ағын",
    startDate: "Басталуы",
    title: "Керемет ",
    titleHighlight: "ЖИ",
    titleSub: " креативтер 1 айда. ",
    description: "Фото, видео, музыка және сөйлеу бойынша практикалық видеокурс. Үй тапсырмаларымен, жұмыстарды тексерумен және нақты кейстермен.",
    audience: "Маркетологтарға, SMM мамандарына, дизайнерлерге, креаторларға және бизнес иелеріне",
    valueBullets: ["🎬 5+ ЖИ-креативтен дайын портфолио", "💼 Тапсырыс берушілерге арналған нақты кейс", "🚀 Айына 50–300 мың ₸ төленетін дағды"],
    trustedBy: "Бізбен жұмыс істейтіндер",
    enrollBtn: "Курсқа жазылу",
    programBtn: "Бағдарламаны көру",
    idea: "ИДЕЯ",
    photo: "ФОТО",
    video: "ВИДЕО",
    sound: "ДЫБЫС",
    speech: "СӨЗ",
    studentWorksBtn: "Оқушылардың жұмыстары",
    questionsBtn: "Сұрақтарыңыз бар ма",
  },
  showcase: {
    title: "Курс аяқталғаннан кейін осындай кадрлар жасай аласыз",
    titleGradient: "курс соңында",
  },
  courseProgram: {
    title: "Курс бағдарламасы",
    subtitle: "1 кіріспе модуль + 7 практикалық: идеядан портфолиодағы дайын кейске дейін",
    moduleLabel: "Модуль",
    bonusLabel: "Бонустық модуль",
    whatYouLearn: "Не үйренесің",
    result: "Нәтиже",
    homework: "Үй тапсырмасы",
    modules: [
      {
        title: "Идея мен сценарий: креатив қалай жұмыс істейді",
        description: "Бұл модульде ең бастысымен — идеямен айналысамыз. Өйткені идеясыз ЖИ құтқармайды, жай ғана \"әдемі, бірақ бос\" етеді.",
        learn: ["Креативтерге идеялар қалай туындайды", "Шабыт қайдан алуға болады және қандай сайттарды пайдалану керек", "Визуалға қалай қарау керек және бұл әдемі ме, жоқ па түсіну", "Неге бір креатив жұмыс істейді, ал екіншісі жоқ", "Бір идеядан бірнеше нұсқа қалай жасауға болады", "Идеяны видеоға арналған қысқа сценарийге қалай айналдыруға болады"],
        result: "Креативтік ойлауды түсіну және одан әрі жұмыс үшін дайын идеялар.",
        homework: ["Референстер табу", "Идеяны тұжырымдау", "Болашақ креативке қысқа сценарий жазу"],
      },
      {
        title: "Мәтін және промпттерге арналған ЖИ",
        description: "Мұнда біз нейрожелілермен дұрыс ойлауды және сөйлесуді үйренеміз. Мәтін — бәрінің негізі.",
        learn: ["ЖИ-да мәтінмен қалай жұмыс істеу керек", "Промпттерді қалай дұрыс жазу керек", "Қандай мәтіндік нейрожелілер ең жақсы", "Нейрожелілер біздің сұрауларымызды қалай қабылдайды", "Неге бір сұрау әр түрлі нәтиже береді", "Сұрауларды нақты және түсінікті қалай тұжырымдау керек", "Мәтіндер мен промпттердегі типтік қателер"],
        result: "ЖИ-ды мәтін арқылы басқаруды түсінесің, болжау емес.",
        homework: ["Бірнеше промпт жазу", "Әр түрлі тұжырымдарды тестілеу", "Нәтижені салыстыру және қорытынды жасау"],
      },
      {
        title: "Фотоға арналған ЖИ",
        description: "Визуалға көшеміз. Мұнда сен қымбат көрінетін сапалы ЖИ-фотолар жасауды үйренесің.",
        learn: ["ЖИ-фото жасау үшін қандай нейрожелілерді қолданамыз", "Олардың арасындағы айырмашылық неде", "Нақты тапсырмаға қандай нейрожелі таңдау керек", "Өнім, сахна және lifestyle кадрларын қалай жасау керек", "Жарық, ракурс, тереңдік, фокус", "\"Пластик\" пен арзан көріністен қалай аулақ болу керек"],
        result: "Жұмыста немесе портфолиода пайдалануға болатын дайын ЖИ-фотолар.",
        homework: ["Бір идеяға бірнеше фото жасау", "Жарық пен ракурстармен жұмыс істеу"],
      },
      {
        title: "Видеоға арналған ЖИ",
        description: "Визуалды жандандырамыз және қозғалыспен жұмыс істеуді үйренеміз.",
        learn: ["Қазір видео үшін қандай нейрожелілер ең жақсы", "Қайсысын пайдалану керек, қайсысын жоқ", "Видео генерациялаудың әр түрлі тәсілдері немен ерекшеленеді", "Фотоны қалай дұрыс жандандыру керек", "Камера, орта және объектілердің қозғалысы", "ЖИ-видеодағы типтік қателер"],
        result: "Табиғи және кәсіби көрінетін видео жасауды түсіну.",
        homework: ["Өз суреттерін жандандыру", "Бірнеше қысқа видео-сахналар жасау"],
      },
      {
        title: "Музыка және сөйлеу",
        description: "Дыбыс — креативті қымбат сезіндіретін нәрсе.",
        learn: ["Музыка видеоны қабылдауға қалай әсер етеді", "Музыка мен саунд-дизайнның айырмашылығы неде", "Көңіл-күйге сай дыбысты қалай таңдау керек", "Дауыс қашан қажет, ал қашан онсыз жақсы", "Сөйлеу, диктор және субтитрлермен жұмыс", "Дыбыспен жиі кездесетін қателер"],
        result: "Креативтерде дыбыс пен сөйлеумен қалай дұрыс жұмыс істеуді түсінесің.",
        homework: ["Видеоға дыбыс таңдау немесе жасау", "Сөйлеумен және сөйлеусіз нұсқа жасау"],
      },
      {
        title: "Орау және монтаж",
        description: "Өте маңызды модуль. Тіпті жақсы креативті нашар монтажбен \"өлтіруге\" болады.",
        learn: ["Қысқа видеоларды қалай дұрыс монтаждау керек", "Роликтің құрылымы: басы, дамуы, финалы", "Видеоны соңына дейін қарауын қалай қамтамасыз ету керек", "Әлеуметтік желілерге дұрыс форматтар", "Қандай бағдарламаларды пайдаланған жақсы", "Типографика, мұқабалар, қауіпсіз аймақтар"],
        result: "Жарияланымға дайын, оралған креатив.",
        homework: ["Финалды роликті монтаждау", "Мұқабаны дайындау"],
      },
      {
        title: "Монетизация және кейстер",
        description: "Финалдық модуль — ақша мен дағдыны қолдану туралы.",
        learn: ["Өз бетіңізді немесе портфолиоңызды қалай рәсімдеу керек", "Қандай презентация дайындау керек", "Жұмысыңызды тапсырыс берушіге қалай көрсету керек", "Кейстерді қалай рәсімдеу керек", "Нәтижені қалай презентациялау керек", "Дағдыны табыс табу үшін қалай пайдалану керек"],
        result: "Алған дағдыларды нақты өмірде қалай қолдануды түсіну.",
        homework: ["Кейсті рәсімдеу", "Жұмысыңыздың презентациясын дайындау"],
      },
      {
        title: "Бонус: бизнес пен автоматтандыруға арналған ЖИ-құралдар",
        description: "Бағдарламадан тыс қосымша модуль — ЖИ уақытты үнемдеуге, процестерді автоматтандыруға және өнімдер жасауға қалай көмектесетіні туралы.",
        learn: ["ЖИ көмегімен Telegram-бот жасау", "Claude-ты дұрыс пайдалану және одан максимум алу", "ЖИ көмегімен сайттар жасау", "Claude арқылы жұмысты автоматтандыру және құрылымдау", "ЖИ-аватарларды қалай және қайда дұрыс жасау керек"],
        result: "Бизнеске, контентке және жеке жобаларға арналған озық ЖИ-құралдар жинағы пайда болады.",
        homework: ["Өз Telegram-ботыңды немесе ЖИ-аватарыңды құрастыру", "Бір тапсырманы автоматтандыру үшін Claude қолдану"],
      },
    ],
  },
  pricing: {
    title: "Өз тарифіңізді таңдаңыз",
    subtitle: "Әр түрлі мақсаттар мен қарқын үшін төрт оқыту форматы",
    recommend: "Ұсынамыз",
    premium: "Premium",
    choosePlan: "Таңдау",
    maxResult: "Максималды нәтиже",
    studioWork: "Креативтік студиямен жұмыс сияқты",
    studioDesc: "Бұл жай ғана оқу емес, бірлескен продакшн-ойлау.",
    studioFooter: "Жай ғана оқу емес, студия деңгейіндегі нәтиже алғысы келетіндерге.",
    proFooter: "Максималды нәтиже мен жеке талдау алғысы келетіндерге сәйкес келеді",
    priceLabel: "Бағасы",
    guaranteeTitle: "Кепілдік",
    guaranteeText: "Басталғаннан кейін 7 күн ішінде курс сәйкес келмейтінін түсінсеңіз — төлемнің 100% қайтарамыз.",
    basic: {
      features: ["Барлық 8 модульге қол жетімділік", "5–6 сағат видео", "Презентациялар мен нұсқаулықтар", "Үй тапсырмалары", "ҮТ тексеру", "Жұмыстар бойынша кері байланыс"],
      priceKzt: "120 000 ₸",
      priceRub: "≈ 21 800 ₽",
    },
    pro: {
      features: ["Basic тарифінің бәрі", "Курс авторының жеке қатысуы", "Әр креативті талдау", "Кадрлармен, жарықпен, қозғалыспен егжей-тегжейлі жұмыс", "Жылдамдатылған өсу және тереңдік"],
      priceKzt: "200 000 ₸",
      priceRub: "≈ 36 400 ₽",
    },
    elite: {
      features: ["PRO / Mentor тарифінің бәрі", "Компаниядан 1 нақты ақылы тапсырыс (30 000 ₸)", "1 креативті «кілтке» бірге жинау", "Промпттер мен пайплайнды идеалға дейін талдау", "Басымдықты кері байланыс", "Курс авторының жеке көзқарасы", "Курс авторымен онлайн-қоңыраулар"],
      subs: ["", "портфолио, клиенттер, бренд — іс жүзінде жасаймыз", "идея → промпт → визуал → видео → дыбыс → финал", "", "", "", ""],
      priceKzt: "400 000 ₸",
      priceRub: "≈ 72 700 ₽",
    },
  },
  faq: {
    title: "Сұрақтарыңыз қалды ма?",
    description: "ЖИ көмегімен кәсіби креативтер жасауға дайынсыз ба? Жақын ағынға жазылыңыз.",
    enrollBtn: "Ағынға жазылу",
    questionBtn: "Сұрақ қою",
    items: [
      { question: "Курс жаңадан бастаушыларға сәйкес келе ме?", answer: "Иә. Курс негіз бен ойлаудан бастайтындай құрылған. Егер бұрын ЖИ-мен жұмыс істемеген болсаңыз — түсінесіз. Бірдеңе байқап көрген болсаңыз — жай ғана тезірек кетесіз." },
      { question: "Ноутбук қажет пе, әлде телефоннан болады ма?", answer: "Телефоннан да, ноутбуктан да болады. Бірақ максималды сапа мен бақылау алғыңыз келсе — ноутбук көбірек мүмкіндік береді. Біз екі нұсқаны да көрсетеміз." },
      { question: "Аптасына қанша уақыт бөлу керек?", answer: "Орта есеппен аптасына 4–6 сағат. Өз қарқыныңызда өтуге болады, бірақ үй тапсырмасын адал жасаған сайын — көбірек пайда аласыз." },
      { question: "Қандай жазылымдар міндетті?", answer: "ЖИ-құралға кемінде бір ақылы жазылым. Онсыз қалыпты тәжірибе жасау мүмкін емес. Біз алдын ала нұсқаларды көрсетеміз және нені таңдау керектігін түсіндіреміз." },
      { question: "Үй тапсырмасын тексеру қалай жүреді?", answer: "Сіз жұмысты тапсырасыз — нақты кері байланыс аласыз: не жақсы, нені түзету керек және неге. Үлгілік «жарайды» мен «молодец» жоқ." },
      { question: "Курстан кейін ақша табуға бола ма?", answer: "Иә. Курстан кейін сізде дайын креативтер, кейс және процесті түсіну болады — бұл тапсырыстар алуға немесе дағдыны өз бизнесіңізде пайдалануға жеткілікті." },
    ],
  },
  footer: {
    brand: "Yelumio",
    copyright: "© 2026 Yelumio AI Studio. Барлық құқықтар қорғалған.",
    contacts: "Байланыс",
    addressLabel: "Мекенжай",
    address: "Yelumio AI Studio, Астана, Қазақстан",
    bin: "БСН/ЖСН: нақтыланады",
    privacy: "Құпиялылық саясаты",
    offer: "Жария оферта",
  },
  stickyCta: {
    startDate: "Курс басталуы",
    limited: "Орын саны шектеулі",
    enrollBtn: "Курсқа жазылу",
  },
  enrollModal: {
    title: "Курсқа жазылу",
    description: "Өтінім қалдырыңыз, біз сізбен мәліметтерді нақтылау үшін хабарласамыз",
    nameLabel: "Аты",
    namePlaceholder: "Атыңызды енгізіңіз",
    phoneLabel: "Телефон нөмірі (WhatsApp)",
    phonePlaceholder: "+7 (___) ___-__-__",
    selectTariff: "Тарифті таңдаңыз",
    submitBtn: "Өтінім қалдыру",
    submitting: "Жіберілуде...",
    consent: "Жеке деректерді өңдеуге келісемін",
    consentRequired: "Жеке деректерді өңдеуге келісімді растаңыз",
    fillAll: "Барлық өрістерді толтырыңыз",
    fillAllDesc: "Атыңызды, телефон нөміріңізді көрсетіңіз және тарифті таңдаңыз",
    success: "Өтінім жіберілді!",
    successDesc: "Біз сізбен жақын арада хабарласамыз",
    error: "Жіберу қатесі",
    errorDesc: "Қайталап көріңіз немесе бізге тікелей хабарласыңыз",
  },
  pricingModal: {
    title: "Тарифке жазылу",
    description: "Рәсімдеу үшін деректерді толтырыңыз",
    selectedPlan: "Таңдалған тариф",
    cost: "Құны",
    nameLabel: "Аты",
    namePlaceholder: "Атыңызды енгізіңіз",
    phoneLabel: "Телефон нөмірі (WhatsApp)",
    emailLabel: "Email",
    emailPlaceholder: "email@example.com",
    submitBtn: "Өтінім қалдыру",
    submitting: "Жіберілуде...",
    consent: "Жеке деректерді өңдеуге келісемін",
    consentRequired: "Жеке деректерді өңдеуге келісімді растаңыз",
    purposeLabel: "ЖИ-ды қайда қолданғыңыз келеді?",
    purposePlaceholder: "Мысалы: видеопродакшн, маркетинг, дизайн...",
    nameError: "Атыңызды енгізіңіз",
    phoneError: "Дұрыс телефон нөмірін енгізіңіз",
    emailError: "Дұрыс email енгізіңіз",
    success: "Өтінім жіберілді!",
    successDesc: "Біз сізбен жақын арада хабарласамыз",
    error: "Жіберу қатесі",
    errorDesc: "Қайталап көріңіз",
  },
  questionModal: {
    title: "Сұрақ қою",
    description: "Сұрағыңызды қалдырыңыз, біз сізбен жақын арада хабарласамыз",
    emailLabel: "Электронды пошта",
    emailPlaceholder: "example@mail.com",
    phoneLabel: "Телефон нөмірі",
    phonePlaceholder: "+7 (___) ___-__-__",
    questionLabel: "Сіздің сұрағыңыз",
    questionPlaceholder: "Сұрағыңызды жазыңыз...",
    submitBtn: "Сұрақ жіберу",
    submitting: "Жіберілуде...",
    fillAll: "Барлық өрістерді толтырыңыз",
    fillAllDesc: "Барлық міндетті өрістерді толтырыңыз",
    success: "Сұрақ жіберілді!",
    successDesc: "Біз сізбен жақын арада хабарласамыз",
    error: "Жіберу қатесі",
    errorDesc: "Қайталап көріңіз немесе бізге тікелей хабарласыңыз",
  },
};

const en: TranslationKeys = {
  header: {
    courseName: "AI Course by Yelumio",
    foundation: "Foundation",
    program: "Program",
    pricing: "Pricing",
    faq: "FAQ",
    enroll: "Enroll",
  },
  hero: {
    stream: "Batch",
    startDate: "Starts",
    title: "Amazing ",
    titleHighlight: "AI",
    titleSub: " creatives in 1 month. ",
    description: "A practical video course on photo, video, music, and speech. With homework, work reviews, and real cases.",
    audience: "For marketers, SMM specialists, designers, creators, and business owners",
    valueBullets: ["🎬 A ready portfolio of 5+ AI creatives", "💼 A real case for clients", "🚀 A skill worth 50–300K ₸ per month"],
    trustedBy: "Already working with",
    enrollBtn: "Enroll now",
    programBtn: "View program",
    idea: "IDEA",
    photo: "PHOTO",
    video: "VIDEO",
    sound: "SOUND",
    speech: "SPEECH",
    studentWorksBtn: "Student works",
    questionsBtn: "Have questions",
  },
  showcase: {
    title: "You'll be able to create shots like these",
    titleGradient: "after the course",
  },
  courseProgram: {
    title: "Course Program",
    subtitle: "1 intro module + 7 practical modules: from idea to a finished portfolio case",
    moduleLabel: "Module",
    bonusLabel: "Bonus module",
    whatYouLearn: "What you'll learn",
    result: "Result",
    homework: "Homework",
    modules: [
      {
        title: "Idea & script: how creativity works",
        description: "In this module, we tackle the most important thing — the idea. Because without an idea, AI doesn't save you, it just makes things \"pretty but empty\".",
        learn: ["How ideas for creatives are born", "Where to find inspiration and which sites to use", "How to look at visuals and understand: is this beautiful or not", "Why one creative works and another doesn't", "How to make multiple variations from one idea", "How to turn an idea into a short video script"],
        result: "Understanding creative thinking and ready ideas for further work.",
        homework: ["Find references", "Formulate an idea", "Write a short script for a future creative"],
      },
      {
        title: "AI for text & prompts",
        description: "Here we learn to think and communicate with neural networks correctly. Text is the foundation of everything.",
        learn: ["How to work with text in AI", "How to write prompts correctly", "Which text neural networks are the best", "How neural networks perceive our requests", "Why the same request gives different results", "How to formulate requests clearly", "Common mistakes in texts and prompts"],
        result: "You understand how to control AI through text, not guess.",
        homework: ["Write several prompts", "Test different formulations", "Compare results and draw conclusions"],
      },
      {
        title: "AI for photography",
        description: "We move on to visuals. Here you learn to make high-quality AI photos that look premium.",
        learn: ["Which neural networks we use for AI photos", "What's the difference between them", "Which neural network to choose for a specific task", "How to make product, scene, and lifestyle shots", "Light, angle, depth, focus", "How to avoid the \"plastic\" and cheap look"],
        result: "Ready AI photos that can be used in work or portfolio.",
        homework: ["Create several photos for one idea", "Work with light and angles"],
      },
      {
        title: "AI for video",
        description: "We bring visuals to life and learn to work with motion.",
        learn: ["Which neural networks are currently the best for video", "Which ones to use and which to skip", "How different video generation methods differ", "How to properly animate photos", "Camera, environment, and object motion", "Common mistakes in AI video"],
        result: "Understanding how to make video that looks natural and professional.",
        homework: ["Animate your images", "Create several short video scenes"],
      },
      {
        title: "Music & speech",
        description: "Sound is what makes a creative feel premium.",
        learn: ["How music affects video perception", "The difference between music and sound design", "How to pick sound to match the mood", "When you need voice and when it's better without", "Working with speech, narration, and subtitles", "Common sound mistakes"],
        result: "You understand how to properly work with sound and speech in creatives.",
        homework: ["Choose or create sound for video", "Make a version with and without speech"],
      },
      {
        title: "Packaging & editing",
        description: "A very important module. Even a good creative can be \"killed\" by bad editing.",
        learn: ["How to properly edit short videos", "Video structure: beginning, development, finale", "How to make videos get watched to the end", "Correct formats for social media", "Which programs are best to use", "Typography, covers, safe zones"],
        result: "A ready, packaged creative that can be published.",
        homework: ["Edit the final video", "Prepare the cover"],
      },
      {
        title: "Monetization & cases",
        description: "The final module — about money and applying skills.",
        learn: ["How to set up your page or portfolio", "What presentation to prepare", "How to show your work to a client", "How to format cases", "How to present results", "How to use the skill to earn money"],
        result: "Understanding how to apply acquired skills in real life.",
        homework: ["Format a case", "Prepare a presentation of your work"],
      },
      {
        title: "Bonus: AI tools for business & automation",
        description: "An extra module beyond the program — how AI helps you save time, automate processes, and build products.",
        learn: ["How to build Telegram bots with AI", "How to use Claude properly and get the most out of it", "How to build websites with AI", "How to automate and structure work with Claude", "How and where to properly create AI avatars"],
        result: "You have a set of advanced AI tools for business, content, and personal projects.",
        homework: ["Build your own Telegram bot or AI avatar", "Use Claude to automate one of your tasks"],
      },
    ],
  },
  pricing: {
    title: "Choose your plan",
    subtitle: "Four learning formats for different goals and paces",
    recommend: "Recommended",
    premium: "Premium",
    choosePlan: "Choose",
    maxResult: "Maximum results",
    studioWork: "Work like a creative studio",
    studioDesc: "This is no longer just learning, it's collaborative production thinking.",
    studioFooter: "For those who want studio-level results, not just training.",
    proFooter: "For those who want maximum results and personal reviews",
    priceLabel: "Price",
    guaranteeTitle: "Guarantee",
    guaranteeText: "If within 7 days after the start you realize the course is not right for you, we will refund 100% of your payment.",
    basic: {
      features: ["Access to all 8 modules", "5–6 hours of video", "Presentations and guides", "Homework assignments", "Homework review", "Work feedback"],
      priceKzt: "120,000 ₸",
      priceRub: "≈ 21,800 ₽",
    },
    pro: {
      features: ["Everything from Basic", "Personal involvement of the course author", "Review of each creative", "Detailed work with shots, light, motion", "Accelerated growth and depth"],
      priceKzt: "200,000 ₸",
      priceRub: "≈ 36,400 ₽",
    },
    elite: {
      features: ["Everything from PRO / Mentor", "1 real paid order from a company (30,000 ₸)", "Joint assembly of 1 creative \"turnkey\"", "Prompt and pipeline review to perfection", "Priority feedback", "Course author's personal vision", "Online calls with the course author"],
      subs: ["", "portfolio, clients, brand — we create in practice", "idea → prompt → visual → video → sound → final", "", "", "", ""],
      priceKzt: "400,000 ₸",
      priceRub: "≈ 72,700 ₽",
    },
  },
  faq: {
    title: "Still have questions?",
    description: "Ready to start creating professional creatives with AI? Sign up for the next batch.",
    enrollBtn: "Enroll now",
    questionBtn: "Ask a question",
    items: [
      { question: "Is the course suitable for beginners?", answer: "Yes. The course is built so we start from the basics and thinking. If you've never worked with AI before — you'll figure it out. If you've tried something — you'll just go faster." },
      { question: "Do I need a laptop or can I use a phone?", answer: "You can use both a phone and a laptop. But if you want maximum quality and control — a laptop gives more options. We'll show both." },
      { question: "How much time per week is needed?", answer: "On average 4–6 hours per week. You can go at your own pace, but the more honestly you do homework — the more benefit you get." },
      { question: "Which subscriptions are required?", answer: "At least one paid subscription to an AI tool. Without it, you can't do proper practice. We'll show options in advance and explain what to choose." },
      { question: "How does homework review work?", answer: "You submit work — you get specific feedback: what's good, what to fix and why. No template \"fine\" and \"good job\"." },
      { question: "Can I earn money after the course?", answer: "Yes. After the course you'll have ready creatives, a case, and understanding of the process — that's enough to take orders or use the skill in your business." },
    ],
  },
  footer: {
    brand: "Yelumio",
    copyright: "© 2026 Yelumio AI Studio. All rights reserved.",
    contacts: "Contacts",
    addressLabel: "Address",
    address: "Yelumio AI Studio, Astana, Kazakhstan",
    bin: "BIN/IIN: to be confirmed",
    privacy: "Privacy Policy",
    offer: "Public Offer",
  },
  stickyCta: {
    startDate: "Course starts",
    limited: "Limited spots available",
    enrollBtn: "Enroll now",
  },
  enrollModal: {
    title: "Enroll in the course",
    description: "Leave a request and we'll contact you to clarify details",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    phoneLabel: "Phone number (WhatsApp)",
    phonePlaceholder: "+7 (___) ___-__-__",
    selectTariff: "Select a plan",
    submitBtn: "Submit request",
    submitting: "Sending...",
    consent: "I agree to personal data processing",
    consentRequired: "Please confirm personal data processing consent",
    fillAll: "Fill in all fields",
    fillAllDesc: "Please enter your name, phone number, and select a plan",
    success: "Request sent!",
    successDesc: "We'll contact you shortly",
    error: "Sending error",
    errorDesc: "Try again or contact us directly",
  },
  pricingModal: {
    title: "Plan enrollment",
    description: "Fill in your details to proceed",
    selectedPlan: "Selected plan",
    cost: "Price",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    phoneLabel: "Phone number (WhatsApp)",
    emailLabel: "Email",
    emailPlaceholder: "email@example.com",
    submitBtn: "Submit request",
    submitting: "Sending...",
    consent: "I agree to personal data processing",
    consentRequired: "Please confirm personal data processing consent",
    purposeLabel: "Where do you want to use AI?",
    purposePlaceholder: "For example: video production, marketing, design...",
    nameError: "Enter your name",
    phoneError: "Enter a valid phone number",
    emailError: "Enter a valid email",
    success: "Request sent!",
    successDesc: "We'll contact you shortly",
    error: "Sending error",
    errorDesc: "Try again",
  },
  questionModal: {
    title: "Ask a question",
    description: "Leave your question and we'll contact you shortly",
    emailLabel: "Email",
    emailPlaceholder: "example@mail.com",
    phoneLabel: "Phone number",
    phonePlaceholder: "+7 (___) ___-__-__",
    questionLabel: "Your question",
    questionPlaceholder: "Write your question...",
    submitBtn: "Send question",
    submitting: "Sending...",
    fillAll: "Fill in all fields",
    fillAllDesc: "Please fill in all required fields",
    success: "Question sent!",
    successDesc: "We'll contact you shortly",
    error: "Sending error",
    errorDesc: "Try again or contact us directly",
  },
};

export const translations: Record<Language, TranslationKeys> = { ru, kz, en };
