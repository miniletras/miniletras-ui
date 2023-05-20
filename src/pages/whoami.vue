<script setup lang="ts">
import { UlBaseTheme } from "~/components/smart/WhoAmI/models"
import { i18n } from "~/main"

const { t } = i18n.global

const contactList = [
  {
    list: [
      { icon: "mdi:phone-classic", label: "+34 717 70 39 20" },
      { icon: "jam:envelope-f", label: "cata.cabanillas@gmail.com" },
      { icon: "tabler:world-www", label: "http://miniletras.com" },
      {
        icon: "mdi:location-radius-outline",
        label: "Baiona, Pontevedra (Galicia), ESP",
      },
    ],
  },
]

const trainingList = [
  {
    subtitles: {
      h4: "Centro de Formación CA Madrid",
      h5: "Asistencia a le edición",
      h6: "2017 - 2018",
    },
    list: [],
  },
  {
    subtitles: {
      h4: "Calamo & Cran",
      h5: "Correctora profesional",
      h6: "2015 - 2016",
    },
    list: [],
  },
  {
    subtitles: {
      h4: "Univ. Nacional Enrique Guzmán y Valle",
      h5: "Lic. en Educación, Lengua y literatura española",
      h6: "2001 - 2006",
    },
    list: [],
  },
]
const skillList = [
  {
    list: [
      { label: "Correcciones de estilo" },
      { label: "Elaboración de proyectos" },
      { label: "Redacción y escritura creativa" },
      { label: "Bordados artísticos" },
    ].map((el) => ({ ...el, icon: "mdi:dot" })),
  },
]

const expOne = {
  subtitles: {
    h4: "Freelance",
    h5: "MiniLetras",
    h6: "2017 - Actualidad · 5 años 6 meses",
  },
  list: [
    { label: "Mediación en la lectura" },
    { label: "Correción de estilos" },
    { label: "Corrección ortotipográfica" },
  ].map((el) => ({ ...el, icon: "mdi:dot" })),
}
const expTwo = {
  subtitles: {
    h4: "Community Manager",
    h5: "Librería Signos",
    h6: "feb. 2007 - ene. 2015 · 2 meses",
  },
  list: [
    { label: "Marketing y diseño" },
    { label: "fotografía y redacción de textos" },
    { label: "Diseño de catalagos" },
  ].map((el) => ({ ...el, icon: "mdi:dot" })),
}
const expThree = {
  subtitles: {
    h4: "Correctora de textos",
    h5: "Grupo La República",
    h6: "feb. 2007 - ene. 2015 5 · 8 años",
  },
  list: [{ label: "Corrección ortotipográfica" }, { label: "Correción de estilos" }].map((el) => ({
    ...el,
    icon: "mdi:dot",
  })),
}
const experiences = [expOne, expTwo, expThree]
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
          <ULBase
            :base-lists="contactList"
            :config-styles="{ baseUl: { lineHeight: '2rem' } }"
            :title="t('menu.contact')"
          />
        </div>
        <div class="flex-gap mt-6">
          <CircleBlockBase />
          <ULBase :base-lists="skillList" :title="t('whoami.skills')" />
        </div>
        <div class="training-list">
          <CircleBlockBase />
          <ULBase
            :base-lists="trainingList"
            :config-styles="{ baseUlClass: 'default-gray' }"
            :theme="UlBaseTheme.SUBTITLES"
            :title="t('whoami.training')"
          />
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
          <div class="flex-gap mt-6">
            <CircleBlockBase />
            <ULBase
              :base-lists="experiences"
              :config-styles="{ baseUl: { marginTop: '2rem' } }"
              :theme="UlBaseTheme.SUBTITLES"
              :title="t('whoami.experience')"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use "~/components/smart/WhoAmI/whoami" as *;
</style>
