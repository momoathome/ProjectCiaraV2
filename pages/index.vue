<script lang="ts" setup>
const { data: testData } = await useFetch('/api/testData')
</script>

<template>
  <main class="mt-55px px-4 md:ml-64">
    <div class="py-8 px-4">
      <div class="grid gap-8">
        <ContentCard
          v-for="(data, index) in testData!.modules"
          :key="index"
          :is-module="data.isModule"
          :image="data.image"
          :title="data.title"
          :description="data.description"
          :level="data.level"
          :energy="numberFormat(data.energy)"
          :cost="numberFormat(data.cost)"
          :build-time="timeFormat(data.buildTime)"
        />
        <ContentCard
          v-for="(data, index) in testData!.spacecrafts"
          :key="index"
          :is-module="data.isModule"
          :image="data.image"
          :title="data.title"
          :description="data.description"
          :unit-limit="numberFormat(data.unitLimit)"
          :combat="numberFormat(data.combat)"
          :cost="numberFormat(data.cost)"
          :cargo="numberFormat(data.cargo)"
          :build-time="timeFormat(data.buildTime)"
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
