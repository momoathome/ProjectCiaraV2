<script lang="ts" setup>
const merlin = {
  image: '/ships/scorpius.jpg',
  title: 'Merlin',
  description: 'Ein schneller, wendiger, leichter Jäger. Entwickelt für rasche Angriffe.',
  unitLimit: 1,
  combat: 100,
  cost: 100_000,
  cargo: 10,
  buildTime: 5,
}
</script>

<template>
  <div class="p-4 md:ml-64">
    <div class="border-dashed rounded-lg border-2 border-gray-200 mt-14 p-4 dark:border-gray-700">
      <div class="h-600px grid gap-4">
        <ContentCard :image="merlin.image" :title="merlin.title" :description="merlin.description" :cost="merlin.cost" :build-time="merlin.buildTime" :level="merlin.unitLimit" :combat="merlin.combat" :cargo="merlin.cargo" />
      </div>
    </div>
  </div>
</template>
