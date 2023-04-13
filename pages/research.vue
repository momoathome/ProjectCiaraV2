<script lang="ts" setup>
const { t } = useI18n()

useHead({
  title: `${t('navigation.research')} - ${t('global.title')} `,
})
</script>

<template>
  <div class="mt-24">
    <h1 class="text-center">
      {{ t("global.title") }}
    </h1>
  </div>
</template>
