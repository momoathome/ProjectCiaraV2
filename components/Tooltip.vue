<script setup lang="ts">
interface Props {
  title: string
  position?: string
}

withDefaults(defineProps<Props>(), {
  position: 'bottom',
})
</script>

<template>
  <div class="flex relative group">
    <slot />
    <div class="rounded-xl flex flex-col bg-#101318 text-xs w-max opacity-0 py-2 px-3 transition z-10 transition-duration-1000 absolute invisible group-hover:opacity-100 group-hover:visible" :class="position">
      <span class="mb-2">Beschreibung:</span>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  bottom: 100%;
  margin-bottom: 5px;
  left: 50%;
  margin-left: -50px;
}

.bottom {
  top: 100%;
  margin-top: 5px;
  left: 50%;
  margin-left: -50px;
}

.left {
  top: -5px;
  right: 105%;
  margin-right: 5px;
}

.right {
  top: -5px;
  left: 105%;
}
</style>
