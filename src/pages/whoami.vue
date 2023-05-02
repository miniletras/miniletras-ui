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
          <div>
            <div class="circle"></div>
            <span class="whoami__slash"></span>
          </div>
          <div>
            <h3 class="h h__h3">{{ t("menu.contact") }}</h3>
            <ul class="contact-list">
              <li v-for="(list, i) in contactList" :key="`whoami-contact-list-${i}`">
                <span class="iconify-inline" data-width="1.2em" :data-icon="list.icon"></span>
                <label class="contact-list__label" :for="`whoami-contact-list-${i}`">
                  {{ list.label }}
                </label>
              </li>
            </ul>
          </div>
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
