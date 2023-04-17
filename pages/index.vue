<script lang="ts" setup>
const { data: testData } = await useFetch('/api/testData')
</script>

<template>
  <main class="mt-55px px-4 md:ml-64">
    <div class="py-8 px-4">
      <div class="grid gap-8">
        <ContentCard
          v-for="(element, index) in testData!.modules"
          :key="index"
          :is-module="element.isModule"
          :image="element.image"
          :title="element.title"
          :description="element.description"
          :level="element.level"
          :energy="numberFormat(element.energy)"
          :cost="numberFormat(element.cost)"
          :build-time="element.buildTime"
        />
        <ContentCard
          v-for="(element, index) in testData!.spacecrafts"
          :key="index"
          :is-module="element.isModule"
          :image="element.image"
          :title="element.title"
          :description="element.description"
          :unit-limit="numberFormat(element.unitLimit)"
          :combat="numberFormat(element.combat)"
          :cost="numberFormat(element.cost)"
          :cargo="numberFormat(element.cargo)"
          :build-time="element.buildTime"
        />
      </div>
    </div>
  </main>
</template>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
}
</style>
