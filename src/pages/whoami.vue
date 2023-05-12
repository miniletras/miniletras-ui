<script setup lang="ts">
import { i18n } from "~/main"

const { t } = i18n.global

const contactList = [
  { icon: "mdi:phone-classic", label: "+34 717 70 39 20" },
  { icon: "jam:envelope-f", label: "cata.cabanillas@gmail.com" },
  { icon: "tabler:world-www", label: "http://miniletras.com" },
  {
    icon: "mdi:location-radius-outline",
    label: "Baiona, Pontevedra (Galicia), ESP",
  },
]
const skillList = [
  { label: "Correcciones de estilo" },
  { label: "Elaboración de proyectos" },
  { label: "Redacción y escritura creativa" },
  { label: "Bordados artísticos" },
].map((el) => ({ ...el, icon: "mdi:dot" }))

/*

Correctora de textosCorrectora de textos
Autónomo
dic. 2017 - actualidad · 5 años 6 meses
Madrid y alrededores, España

Community Manager
Librería Signos
may. 2016 - jun. 2016 · 2 mesesç
Ponferrada y alrededores, España
En esta librería infantil he realizado labores básicas de diseño, redacción de textos y fotografía para mostrar el catálogo. En esta librería infantil he realizado labores básicas de diseño, redacción de textos y fotografía para mostrar el catálogo. 

Corrector de textos
Grupo La RepúblicaGrupo La República
feb. 2007 - ene. 2015 · 8 añosfeb. 2007 - ene. 2015 · 8 años
Provincia de Lima, Peru
*/
const expOne = {
  subtitles: {
    h4: "Freelance",
    h5: "MiniLetras",
    h6: "2017 - Actualidad",
  },
  list: [
    { label: "Mediación en la lectura" },
    { label: "Correción de estilos" },
    { label: "Corrección ortotipográfica" },
  ].map((el) => ({ ...el, icon: "mdi:dot" })),
}
const expTwo = {
  subtitles: {
    h4: "Freelance",
    h5: "MiniLetras",
    h6: "2017 - Actualidad",
  },
  list: [
    { label: "Mediación en la lectura" },
    { label: "Correción de estilos" },
    { label: "Corrección ortotipográfica" },
  ].map((el) => ({ ...el, icon: "mdi:dot" })),
}
const expThree = {
  subtitles: {
    h4: "Freelance",
    h5: "MiniLetras",
    h6: "2017 - Actualidad",
  },
  list: [
    { label: "Mediación en la lectura" },
    { label: "Correción de estilos" },
    { label: "Corrección ortotipográfica" },
  ].map((el) => ({ ...el, icon: "mdi:dot" })),
}
const experiences = [expOne.list, expTwo.list, expThree.list]
</script>
<template>
  <section class="whoami">
    <div class="whoami__column">
      <figure class="whoami__personal-photo"></figure>
      <div class="whoami__square-1"></div>
      <div class="whoami__square-2">
        <div class="whoami__title">
          <h2 class="h h__h2 text-stroke-1">{{ t("whoami.occupation") }}</h2>
          <hr class="whoami__hr" />
          <i class="h__h3--subtitle">{{ t("whoami.occupationSubtitle") }}</i>
        </div>
        <div class="flex-gap">
          <CircleBlockBase />
          <ULBase :base-list="contactList" :title="t('menu.contact')" />
        </div>
        <div class="flex-gap mt-4">
          <CircleBlockBase />
          <ULBase :base-list="skillList" :title="t('whoami.skills')" />
        </div>
      </div>
    </div>
    <div class="whoami__column">
      <div class="whoami__name">
        <div class="personal-name">
          <figure class="personal-name__figure"></figure>
          <figure class="personal-name__surname"></figure>
        </div>
        <div class="whoami__body">
          <p class="whoami__biopic">{{ t("whoami.biopic") }}</p>
          <p class="whoami__biopic">{{ t("whoami.biopicTwo") }}</p>
          <div class="flex-gap">
            <CircleBlockBase />
            <!-- <ULBase
              :base-list="experiences"
              :title="t('whoami.experience')"
              theme="subtitles"
            /> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use "~/components/smart/WhoAmI/whoami" as *;

.border-red {
  border: 1px solid red;
}
</style>
