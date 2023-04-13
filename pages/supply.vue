<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: `${t('navigation.supply')} - ${t('global.title')} `,
})
</script>

<template>
  <div class="mt-24">
    <h1 class="text-center">
      {{ t("global.title") }}
    </h1>
  </div>
</template>

<style scoped>

</style>
