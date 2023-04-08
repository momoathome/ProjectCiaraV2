<script lang="ts" setup>
const { t } = useI18n();

/* definePageMeta({
  layout: "centercard",
});
 */
useHead({
  title: `${t("navigation.hangar")} - ${t("global.title")} `,
});
</script>

<template>
  <div>
    <h1 class="text-center">
      {{ t("global.title") }}
    </h1>
  </div>
</template>
