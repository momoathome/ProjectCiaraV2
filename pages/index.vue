<script lang="ts" setup>
const { locale: currentLocale, t } = useI18n();
</script>

<template>
  <div class="flex-center flex-col h-[calc(100vh-70px)] gap-12">
    <main class="flex flex-col flex-1 mt-24 gap-20">
      <h1 class="font-extrabold text-6xl">
        {{ t("global.title") }}
      </h1>
    </main>
  </div>
</template>
