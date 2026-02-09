export const generos = [
  { id: "pag1", name: "Fantasía" },
  {
    id: "pag2",
    name: "Ciencia Ficción",
  },
  { id: "pag3", name: "Terror" },
  { id: "pag4", name: "Misterio" },
  { id: "pag5", name: "Romance" },
  { id: "pag6", name: "Histórico" },
  { id: "pag7", name: "Aventura" },
  { id: "pag8", name: "Cómic" },
  { id: "pag9", name: "Juvenil" },
];

export const libros = [
  {
    id: "pag11",
    name: "El Señor de los Anillos",
    genreId: "pag1",
    authorId: "pag111",
    desc: "El anillo único debe ser destruido.",
    sinopsis:
      "En la Tierra Media, un hobbit llamado Frodo Bolsón hereda un anillo aparentemente insignificante que resulta ser el Anillo Único, creado por el Señor Oscuro Sauron para dominar a todos los pueblos libres. Acompañado por la Comunidad del Anillo, Frodo debe emprender un viaje épico lleno de peligros, criaturas fantásticas y traiciones para destruir el anillo en el Monte del Destino. Mientras tanto, reinos enteros se preparan para la guerra en una lucha desesperada entre la luz y la oscuridad.",
    year: 1954,
    publisher: "Minotauro",
    rating: 4.9,
    tags: ["fantasía", "épico", "aventura", "magia"],
  },

  {
    id: "pag12",
    name: "El Hobbit",
    genreId: "pag1",
    authorId: "pag121",
    desc: "Bilbo encuentra el anillo.",
    sinopsis:
      "Bilbo Bolsón es un hobbit tranquilo que disfruta de una vida cómoda en la Comarca, hasta que el mago Gandalf lo convence de unirse a trece enanos en una peligrosa expedición para recuperar el tesoro de la Montaña Solitaria, custodiado por el dragón Smaug. En su aventura, Bilbo se enfrentará a trolls, arañas gigantes y otras criaturas, y descubrirá un misterioso anillo que cambiará su destino y el de toda la Tierra Media.",
    year: 1937,
    publisher: "Minotauro",
    rating: 4.7,
    tags: ["fantasía", "aventura", "dragones", "enanos"],
  },

  {
    id: "pag21",
    name: "Yo, Robot",
    genreId: "pag2",
    authorId: "pag211",
    desc: "Las tres leyes de la robótica.",
    sinopsis:
      "A través de una serie de relatos interconectados, Isaac Asimov explora el desarrollo de los robots y su convivencia con los humanos. Cada historia examina las consecuencias inesperadas de las Tres Leyes de la Robótica, que buscan proteger a la humanidad. Con un enfoque filosófico y científico, la obra plantea preguntas profundas sobre la inteligencia artificial, la ética tecnológica y el futuro de la relación entre humanos y máquinas.",
    year: 1950,
    publisher: "Gnome Press",
    rating: 4.6,
    tags: ["ciencia ficción", "robots", "inteligencia artificial"],
  },

  {
    id: "pag22",
    name: "Fundación",
    genreId: "pag2",
    authorId: "pag221",
    desc: "Psicohistoria y el futuro galáctico.",
    sinopsis:
      "El matemático Hari Seldon desarrolla la psicohistoria, una ciencia capaz de predecir el comportamiento de grandes masas humanas. Al prever la inevitable caída del Imperio Galáctico, Seldon crea la Fundación, una organización dedicada a preservar el conocimiento humano para reducir la edad oscura que seguirá al colapso del imperio. La saga sigue a generaciones de personajes que luchan por mantener viva la civilización en medio del caos político y social.",
    year: 1951,
    publisher: "Gnome Press",
    rating: 4.8,
    tags: ["ciencia ficción", "imperio", "espacio", "futuro"],
  },

  {
    id: "pag31",
    name: "Cthulhu",
    genreId: "pag3",
    authorId: "pag311",
    desc: "Dioses antiguos duermen en el mar.",
    sinopsis:
      "En los relatos del mito de Cthulhu, H. P. Lovecraft presenta un universo donde antiguas entidades cósmicas existieron antes de la humanidad y esperan su regreso. Cthulhu, una de estas criaturas primordiales, duerme en la ciudad sumergida de R'lyeh, mientras cultos secretos trabajan para traerlo de vuelta. Estas historias exploran el terror cósmico, la insignificancia del ser humano y el horror de lo desconocido más allá de la comprensión humana.",
    year: 1928,
    publisher: "Weird Tales",
    rating: 4.5,
    tags: ["terror", "horror cósmico", "dioses antiguos"],
  },
];

export const autores = [
  {
    id: "pag111",
    name: "J.R.R. Tolkien",
    bio: "John Ronald Reuel Tolkien fue un escritor, poeta, filólogo y profesor universitario británico. Es considerado el padre de la fantasía moderna gracias a su creación del mundo ficticio de la Tierra Media. Sus obras se caracterizan por una profunda mitología, lenguajes inventados y una narrativa épica que ha influido a generaciones de escritores, cineastas y desarrolladores de videojuegos.",
    birthYear: 1892,
    deathYear: 1973,
    nationality: "Británico",
    awards: ["Premio Internacional de Fantasía", "Premio Hugo (póstumo)"],
    quote: "No todo el que vaga está perdido.",
  },
  {
    id: "pag121",
    name: "J.R.R. Tolkien",
    bio: "John Ronald Reuel Tolkien fue un escritor, poeta, filólogo y profesor universitario británico. Es considerado el padre de la fantasía moderna gracias a su creación del mundo ficticio de la Tierra Media. Sus obras se caracterizan por una profunda mitología, lenguajes inventados y una narrativa épica que ha influido a generaciones de escritores, cineastas y desarrolladores de videojuegos.",
    birthYear: 1892,
    deathYear: 1973,
    nationality: "Británico",
    awards: ["Premio Internacional de Fantasía", "Premio Hugo (póstumo)"],
    quote: "No todo el que vaga está perdido.",
  },
  {
    id: "pag211",
    name: "Isaac Asimov",
    bio: "Isaac Asimov fue un escritor y profesor de bioquímica ruso-estadounidense, conocido por su enorme producción literaria en ciencia ficción y divulgación científica. Es famoso por sus series de la Fundación y los Robots, y por formular las Tres Leyes de la Robótica. Asimov escribió más de 500 libros y miles de ensayos, convirtiéndose en uno de los autores más influyentes del siglo XX.",
    birthYear: 1920,
    deathYear: 1992,
    nationality: "Ruso-estadounidense",
    awards: ["Premio Hugo", "Premio Nébula", "Gran Maestro SFWA"],
    quote: "La violencia es el último recurso del incompetente.",
  },
  {
    id: "pag221",
    name: "Isaac Asimov",
    bio: "Isaac Asimov fue un escritor y profesor de bioquímica ruso-estadounidense, conocido por su enorme producción literaria en ciencia ficción y divulgación científica. Es famoso por sus series de la Fundación y los Robots, y por formular las Tres Leyes de la Robótica. Asimov escribió más de 500 libros y miles de ensayos, convirtiéndose en uno de los autores más influyentes del siglo XX.",
    birthYear: 1920,
    deathYear: 1992,
    nationality: "Ruso-estadounidense",
    awards: ["Premio Hugo", "Premio Nébula", "Gran Maestro SFWA"],
    quote: "La violencia es el último recurso del incompetente.",
  },

  {
    id: "pag311",
    name: "H.P. Lovecraft",
    bio: "Howard Phillips Lovecraft fue un escritor estadounidense de terror y ciencia ficción, reconocido como el creador del horror cósmico. Sus historias exploran la insignificancia del ser humano frente a entidades antiguas y desconocidas. Aunque no fue muy famoso en vida, su obra influyó enormemente en la literatura, el cine y los videojuegos modernos, dando origen al famoso Mito de Cthulhu.",
    birthYear: 1890,
    deathYear: 1937,
    nationality: "Estadounidense",
    awards: ["Premio World Fantasy (póstumo)"],
    quote: "La emoción más antigua y más fuerte de la humanidad es el miedo.",
  },
];
