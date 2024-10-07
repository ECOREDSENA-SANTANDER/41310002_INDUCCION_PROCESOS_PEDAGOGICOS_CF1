<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El esquema facilita una comprensión organizada sobre los pilares fundamentales de la pedagogía y la transformación educativa. A través de diferentes bloques temáticos, se plantea un análisis del concepto de educación, la labor del docente, el perfil del estudiante y los enfoques pedagógicos. Este conjunto de elementos permite una aproximación amplia a los procesos educativos, conectando marcos teóricos y normativos con las prácticas pedagógicas, lo que favorece una reflexión crítica sobre el papel de la educación en la sociedad.

    .row.justify-content-center
      .col-sm-12.col-lg-8.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El esquema organiza información sobre la pedagogía y la transformación educativa en cuatro bloques principales. En el primero, se aborda el concepto de educación y las políticas y leyes educativas en Colombia. El segundo bloque se centra en la pedagogía, sus teorías y modelos, además de mencionar tipos de pedagogías y enfoques pedagógicos con el ejemplo del SENA. El tercer apartado explora la labor del educador y las razones para optar por ser docente. Por último, el cuarto bloque se enfoca en el estudiante, su proceso de aprendizaje, el funcionamiento del cerebro en dicho proceso y los estilos de aprendizaje. Todo el contenido está estructurado para vincular los aspectos teóricos y prácticos de la educación desde las perspectivas del docente y del estudiante.")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
