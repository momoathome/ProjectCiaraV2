<script setup lang="ts">
defineProps<{
  isModule: boolean
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
  <div class="rounded-xl shadow text-white max-w-340px transition-all content-card">
    <img class="rounded-t-xl object-cover h-230px" :src="image" alt="">
    <div class="bg-gradient-to-r flex from-#485563 to-#29323C h-11 relative justify-center items-center">
      <img src="~/assets/images/InfoOutline.svg" width="24" height="24" class="cursor-pointer top-23% left-4 absolute" alt="Info Button" @click="showDescription = !showDescription">

      <p class="font-medium text-xl tracking-wide">
        {{ title }}
      </p>

      <div class="flex text-lg top-2 right-4 absolute">
        <span v-if="isModule">Lv.</span>
        <img v-else src="~/assets/images/spaceship-light.svg" width="22" class="me-1" alt="">

        <p v-if="isModule">
          {{ level }}
        </p>
        <p v-else>
          {{ unitLimit }}
        </p>
      </div>
    </div>

    <div class="flex flex-col py-6 px-8 gap-8">
      <p v-show="showDescription" class="font-normal">
        {{ description }}
      </p>

      <div class="grid px-4 gap-y-6 gap-x-4 grid-cols-2">
        <div v-if="isModule" class="flex gap-3 items-center">
          <img src="~/assets/images/energy-light.svg" width="32" class="" alt="">
          <p> {{ energy }} </p>
        </div>
        <div v-else class="flex gap-3 items-center">
          <img src="~/assets/images/combatValue-light.svg" width="32" class="" alt="">
          <p> {{ combat }} </p>
        </div>
        <div class="flex gap-3 items-center">
          <img src="~/assets/images/credits-light.svg" width="32" class="" alt="">
          <p> {{ cost }} </p>
        </div>
        <div v-if="!isModule" class="flex gap-3 items-center">
          <img src="~/assets/images/cargo.svg" width="32" class="" alt="">
          <p> {{ cargo }} </p>
        </div>
        <div class="flex gap-3 items-center">
          <img src="~/assets/images/hourglass.svg" width="32" class="" alt="">
          <p> {{ buildTime }} </p>
        </div>
      </div>

      <div class="flex flex-col gap-2 items-center">
        <button v-if="isModule" id="moduleBtn" class="btn" role="button" type="button">
          Upgrade
        </button>
        <button v-else id="shipBtn" class="btn" role="button" type="button">
          Produce
        </button>
        <input v-if="!isModule" type="text" min="0" value="0" inputmode="numeric" pattern="[0-9]*" maxlength="4" onfocus="this.value=''" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" class="border-solid outline-none bg-#353535 border-#424242 h-8 text-white text-center w-16">
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-card {
    background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
    background-blend-mode: multiply;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
