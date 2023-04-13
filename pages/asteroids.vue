<script lang="ts" setup>
const { t } = useI18n()

/* definePageMeta({
  layout: "centercard",
});
 */
useHead({
  title: `${t('navigation.asteroid')} - ${t('global.title')} `,
})
</script>

<template>
  <div class="mt-24">
    <h1 class="text-center">
      {{ t("global.title") }}
    </h1>
  </div>
</template>
