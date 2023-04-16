<script setup lang="ts">
defineProps<{
  image: string
  title: string
  description: string
  level?: number
  unitLimit?: number
  combat?: number
  energy?: number
  cost: number
  cargo?: number
  buildTime: number
}>()

const showDescription = ref(true)
</script>

<template>
  <div class="bg-white border rounded-lg border-gray-200 shadow text-white max-w-340px content-card dark:bg-gray-800 dark:border-gray-700">
    <img class="rounded-t-lg object-cover h-230px" :src="image" alt="">
    <div class="bg-gradient-to-r flex from-#485563 to-#29323C h-11 relative justify-center items-center">
      <img src="~/assets/images/InfoOutline.svg" width="24" height="24" class="cursor-pointer top-23% left-6 absolute" alt="Info Button" @click="showDescription = !showDescription">

      <p class="font-medium text-xl tracking-wide">
        {{ title }}
      </p>
      <span class="top-31% right-8 absolute">Lv.{{ level }}</span>
    </div>

    <div class="flex flex-col py-5 px-8 gap-8">
      <p v-show="showDescription" class="font-normal">
        {{ description }}
      </p>

      <div class="grid px-4 gap-y-6 gap-x-4 grid-cols-2">
        <div class="flex gap-3 items-center">
          <img src="~/assets/images/combatValue-light.svg" width="32" class="fill-white" alt="">
          <p> {{ combat }} </p>
        </div>
        <div class="flex gap-3 items-center">
          <img src="~/assets/images/credits-light.svg" width="32" class="fill-white" alt="">
          <p> {{ cost }} </p>
        </div>
        <div class="flex gap-3 items-center">
          <img src="~/assets/images/cargo.svg" width="32" class="fill-white" alt="">
          <p> {{ cargo }} </p>
        </div>
        <div class="flex gap-3 items-center">
          <img src="~/assets/images/hourglass.svg" width="32" class="fill-white" alt="">
          <p> {{ buildTime }} </p>
        </div>
      </div>

      <div class="flex flex-col gap-2 items-center">
        <button class="btn" role="button" type="button">
          Produce
        </button>
        <input type="text" min="0" value="0" inputmode="numeric" pattern="[0-9]*" maxlength="4" onfocus="this.value=''" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" class="border-solid outline-none bg-#353535 border-#424242 h-8 text-white text-center w-16">
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-card {
    background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
    background-blend-mode: multiply;
}
</style>
