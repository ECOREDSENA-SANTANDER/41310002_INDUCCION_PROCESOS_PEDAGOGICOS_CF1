export default {
  global: {
    componenteFormativo: 'Pedagogía y transformación educativa',
    descripcionCurso:
      'Ser docente en el contexto actual implica enfrentar desafíos complejos, pero es también una de las profesiones más gratificantes por su profundo impacto social y su contribución tanto a nivel local como global. A lo largo de esta formación, el estudiante tendrá la oportunidad de reflexionar críticamente sobre los pilares de la labor docente, que incluyen un marco epistemológico y una sólida base sociocultural.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Concepto de "Educación"',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Políticas y leyes educativas en Colombia',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Pedagogía, teoría y modelos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de pedagogías',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Enfoques pedagógicos. Ejemplo SENA',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '¿Cuál es la labor de un Educador?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '¿Por qué ser un docente?',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '¿Quién es el estudiante? ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Su cerebro: su aprendizaje',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estilos de aprendizaje',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_41310002_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Pedagogía, teoría y modelo',
      referencia:
        'Janneth Medicis. (2012, 16 noviembre). Pedagogía y educacion',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UcBZW7jXFdk',
    },
    {
      tema: 'Pedagogía, teoría y modelos',
      referencia:
        'Ortega Esteban, J. (2005). Pedagogía social y pedagogía escolar: la educación social en la escuela. Revista de educación.',
      tipo: 'PDF',
      link:
        'https://redined.educacion.gob.es/xmlui/bitstream/handle/11162/68009/00820053000185.pdf?sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Pedagogía',
      significado:
        'Disciplina que estudia la educación y la formación en relación con los procesos de enseñanza y aprendizaje.',
    },
    {
      termino: 'Aprendizaje',
      significado:
        'Proceso mediante el cual un individuo adquiere conocimientos, habilidades, valores y actitudes a través de la experiencia o la enseñanza.',
    },
    {
      termino: 'Motivación',
      significado:
        'Factor que impulsa el interés y la participación en actividades de aprendizaje, clave en el proceso pedagógico.',
    },
    {
      termino: 'Competencias',
      significado:
        'Capacidades que permiten a un individuo desempeñarse adecuadamente en diferentes contextos, tanto a nivel profesional como personal.',
    },
    {
      termino: 'Constructivismo',
      significado:
        'Teoría del aprendizaje que sostiene que el conocimiento se construye activamente por el individuo a través de sus experiencias y relaciones sociales.',
    },
    {
      termino: 'Estilos de aprendizaje',
      significado:
        'Diferentes maneras en que las personas adquieren y procesan la información durante el proceso educativo.',
    },
    {
      termino: 'Educación',
      significado:
        'Proceso mediante el cual se facilita el aprendizaje o la adquisición de conocimientos, habilidades, valores y creencias.',
    },
    {
      termino: 'Cognición',
      significado:
        'Procesos mentales involucrados en el aprendizaje, como la percepción, la memoria y el razonamiento.',
    },
    {
      termino: 'Epistemología',
      significado:
        'Rama de la filosofía que estudia la naturaleza y el alcance del conocimiento.',
    },
    {
      termino: 'Andamiaje',
      significado:
        'Técnica pedagógica donde el maestro proporciona apoyo temporal al estudiante durante el aprendizaje hasta que pueda realizar la tarea de manera independiente.',
    },
    {
      termino: 'Competencias laborales',
      significado:
        'Capacidades específicas para movilizar conocimientos y habilidades en el contexto del trabajo, buscando cumplir con estándares de calidad.',
    },
    {
      termino: 'Formación integral',
      significado:
        'Proceso educativo que busca el desarrollo pleno del individuo, tanto en aspectos personales como técnicos y profesionales.',
    },
    {
      termino: 'Educación crítica',
      significado:
        'Enfoque pedagógico que busca desarrollar la conciencia crítica en los estudiantes para que participen activamente en la transformación social.',
    },
    {
      termino: 'Socio-constructivismo',
      significado:
        'Teoría que enfatiza el aprendizaje a través de la interacción social y cultural, postulando que el conocimiento se construye en un contexto comunitario.',
    },
    {
      termino: 'Proyecto educativo',
      significado:
        'Metodología de enseñanza en la que los estudiantes adquieren conocimientos a través de la resolución de problemas y el desarrollo de proyectos prácticos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, N. (2011). Diferencia entre enfoque, corriente y modelo pedagógico. Bogotá: UMNG.',
    },

    {
      referencia: 'Arias, N. (2011). Teorías pedagógicas. Bogotá: UMNG.',
    },

    {
      referencia:
        'Barnett, R. (2001). Los límites de la competencia. Barcelona: Editorial Gedisa.',
    },

    {
      referencia:
        'De Zubiría, J. (2007). Los modelos pedagógicos. Popayán: Instituto Alberto Merani.',
    },
    {
      referencia:
        'Freire, P. (2009). Pedagogía del Oprimido. Primera Edición 1970. México: Siglo xxi.',
    },

    {
      referencia:
        'Gaitán, C. (2008). Aproximación a las relaciones entre cultura y educación. Caracas: Corporación Fe y Alegría.',
    },
    {
      referencia:
        'Gaitán, C. (2008). Práctica reflexiva e investigación, en GAITÁN, C. y otros. Reflexiones en torno a la cultura, la práctica pedagógica y el aprendizaje del estudiante universitario. Bogotá: Pontificia Universidad Javeriana, Facultad de Educación.',
    },

    {
      referencia:
        'Morin, E. (2008). Planetarización y crisis de la humanidad. En Revista 2001 Educación. N. 152. Enero 2008. México.',
    },

    {
      referencia:
        'Osorio, M. (2011). El rol del educador, la pedagogía y un recorrido por las diferentes épocas sociohistóricas de la humanidad. Bogotá: UMNG.',
    },

    {
      referencia:
        'Osorio, M. (2011). Reflexiones sobre educación, pedagogía y formación: Palimpsesto de muchos con letra propia. Bogotá: UMNG.',
    },

    {
      referencia:
        'Páez, D. L. (2012). El modelo pedagógico de la formación profesional integral en el enfoque para el desarrollo de competencias y el aprendizaje por proyectos. SENA.',
    },
    {
      referencia:
        'Cambiando paradigmas. Traducción del original: Changing paradigms. (2010).',
      link: 'http://www.youtube.com/watch?v=Z78aaeJR8no',
    },
    {
      referencia: '¿Qué es el plan estratégico del SENA? (2012).',
      link: 'https://youtu.be/USB_9Vs1YvY',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección general',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Experta temática',
          centro:
            'Equipo de Adecuación Didáctica y Gráfica de Recursos Educativos - Regional Risaralda',
        },
        {
          nombre: 'Didier Andrés Ospina Osorio',
          cargo: 'Asesor pedagógico',
          centro:
            'Equipo de Adecuación Didáctica y Gráfica de Recursos Educativos - Regional Risaralda',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador web',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Lizeth Lozada Díaz',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
