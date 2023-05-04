<script setup lang="ts">
import { i18n } from "~/main"
import ULBase from "./whoami/components/ULBase.vue"
import CircleBlockBase from "./whoami/components/CircleBlockBase.vue"

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
</script>
<template>
  <section class="whoami">
    <div class="whoami__figure">
      <figure class="whoami__personal-photo"></figure>
      <div class="whoami__square-1"></div>
      <div class="whoami__square-2">
        <div class="whoami__title">
          <h2 class="h h__h2">{{ t("whoami.occupation") }}</h2>
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
    <div class="col-1 border-red"></div>
  </section>
</template>
<style scoped lang="scss">
@use "./whoami/whoami.scss" as *;

.border-red {
  border: 1px solid red;
}
</style>
