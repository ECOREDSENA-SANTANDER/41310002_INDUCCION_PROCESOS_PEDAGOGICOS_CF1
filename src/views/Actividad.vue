<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: '¿Qué tanto conoces de educación y pedagogía?',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar el nivel de conocimiento previo de los estudiantes sobre los conceptos clave en educación y pedagogía para adaptar las estrategias de enseñanza de acuerdo a sus necesidades.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal rol del maestro en el paradigma pedagógico tradicionalista?',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Fomentar la creatividad', esCorrecta: false },
            { id: 'b', texto: 'Actuar como facilitador', esCorrecta: false },
            { id: 'c', texto: 'Transmitir conocimiento', esCorrecta: true },
            {
              id: 'd',
              texto: 'Crear proyectos colaborativos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente respuesta! Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué enfoque pedagógico se centra en el condicionamiento y la respuesta a estímulos?',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Socio-constructivismo', esCorrecta: false },
            { id: 'b', texto: 'Conductismo', esCorrecta: true },
            { id: 'c', texto: 'Pedagogía crítica', esCorrecta: false },
            { id: 'd', texto: 'Cognitivismo', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Según el modelo socio-constructivista, el conocimiento se forma primero como un proceso:',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Individual', esCorrecta: false },
            { id: 'b', texto: 'Social', esCorrecta: true },
            { id: 'c', texto: 'Didáctico', esCorrecta: false },
            { id: 'd', texto: 'Tecnológico', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Revise nuevamente el concepto ya que la respuesta no es correcta.',
        },
        {
          id: 4,
          texto:
            'El término educación proviene del latín “educare”, que significa:',
          imagen: require('@/assets/componentes/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Enseñar', esCorrecta: false },
            { id: 'b', texto: 'Dirigir', esCorrecta: false },
            { id: 'c', texto: 'Criar o nutrir', esCorrecta: true },
            { id: 'd', texto: 'Aprender', esCorrecta: false },
          ],
          mensaje_correcto:
            'Muy bien, Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es uno de los objetivos fundamentales de la educación según el enfoque del SENA?',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fortalecer la creatividad artística',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarrollar competencias laborales',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Fomentar la espiritualidad', esCorrecta: false },
            {
              id: 'd',
              texto: 'Promover el uso de tecnologías',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Esta es la respuesta correcta. Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué enfoque pedagógico promueve la autorrealización del estudiante a través de experiencias?',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pedagogía crítica', esCorrecta: false },
            { id: 'b', texto: 'Conductismo', esCorrecta: false },
            { id: 'c', texto: 'Pedagogía activa', esCorrecta: true },
            { id: 'd', texto: 'Tradicionalismo', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'El Plan Decenal de Educación en Colombia 2006-2016 tenía como objetivo principal:',
          imagen: require('@/assets/componentes/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impulsar transformaciones en la educación colombiana',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar el sistema educativo público',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Centralizar la enseñanza en instituciones religiosas',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Promover la educación privada',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué figura educativa surge con el auge de las tecnologías de la información?',
          imagen: require('@/assets/componentes/img4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Profesor', esCorrecta: false },
            { id: 'b', texto: 'Tutor', esCorrecta: true },
            { id: 'c', texto: 'Instructor', esCorrecta: false },
            { id: 'd', texto: 'Maestro', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es una de las características fundamentales de la educación según Paulo Freire?',
          imagen: require('@/assets/componentes/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un proceso determinista y lineal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es una herramienta de transformación social.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se limita a la transmisión de conocimientos en el aula.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Debe seguir un marco riguroso y normativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué distingue al concepto de pedagogía dentro del contexto histórico según Rafael Flórez Ochoa?',
          imagen: require('@/assets/componentes/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se limita al ámbito escolar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es un conocimiento instrumental y técnico.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Es un "súper saber social".', esCorrecta: true },
            {
              id: 'd',
              texto: 'Se enfoca exclusivamente en los procesos tecnológicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los resultados le ayudarán a adaptar las estrategias educativas, para un aprendizaje acorde a las necesidades actuales.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
