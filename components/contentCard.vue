<script setup lang="ts">
defineProps<{
  isModule: boolean
  image: string
  title: string
  description: string
  level?: number | string
  unitLimit?: number | string
  combat?: number | string
  energy?: number | string
  cost: number | string
  cargo?: number | string
  buildTime: string
}>()

/* const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment, reset, decrement, double } = store */

const tippStore = useTippStore()
const { tipps } = storeToRefs(tippStore)
const { toggle } = tippStore

const count = ref(0)

function increment() {
  count.value++
}

function decrement() {
  if (count.value === 0)
    return

  count.value--
}

function handleFocus(e: any) {
  e.target.value = ''
}
function handleFocusOut(e: any) {
  e.target.value = count.value
}
</script>

<template>
  <div class="rounded-xl shadow text-white max-w-340px transition-all transition-duration-500 content-card">
    <img class="rounded-t-xl object-cover h-230px" :src="image" alt="">
    <div class="bg-gradient-to-r flex from-#485563 to-#29323C h-11 relative justify-center items-center">
      <img src="~/assets/images/InfoOutline.svg" width="24" height="24" class="cursor-pointer top-23% left-4 absolute" alt="Info Button" @click="toggle">

      <p class="font-medium text-xl tracking-wide">
        {{ title }}
      </p>

      <div v-if="isModule" class="flex text-lg top-2 right-4 absolute">
        <Tooltip title="Gebäude Stufe" position="left">
          <span>Lv.</span>
          <p>{{ level }}</p>
        </Tooltip>
      </div>

      <div v-else class="flex text-lg top-2 right-4 absolute">
        <Tooltip title="Einheiten Limit" position="left">
          <img src="~/assets/images/spaceship-light.svg" width="22" class="me-1" alt="">
          <p>{{ unitLimit }}</p>
        </Tooltip>
      </div>
    </div>
    <div class="flex flex-col px-8 gap-10" :class="[tipps ? 'py-6' : 'pt-12 pb-6']">
      <p v-show="tipps" class="font-normal mb-2">
        {{ description }}
      </p>

      <div class="relative" :class="{ spaceCraftStatPseudoClass: !isModule }">
        <div :class="[{ moduleCostPseudoClass: isModule }, { spaceCraftCostPseudoClass: !isModule }]" class="grid px-4 gap-y-6 gap-x-4 grid-cols-2 relative">
          <div v-if="isModule" class="flex gap-3 items-center">
            <Tooltip title="Energieverbrauch">
              <img src="~/assets/images/energy-light.svg" width="32" class="" alt="">
            </Tooltip>
            <p> {{ energy }} </p>
          </div>
          <div v-else class="flex gap-3 items-center">
            <Tooltip title="Kampfkraft">
              <img src="~/assets/images/combatValue-light.svg" width="32" class="" alt="">
            </Tooltip>
            <p> {{ combat }} </p>
          </div>

          <div class="flex gap-3 items-center">
            <Tooltip title="Credits">
              <img src="~/assets/images/credits-light.svg" width="32" class="" alt="">
            </Tooltip>
            <p> {{ cost }} </p>
          </div>
          <div v-if="!isModule" class="flex gap-3 items-center">
            <Tooltip title="Kapazität">
              <img src="~/assets/images/cargo.svg" width="32" class="" alt="">
            </Tooltip>
            <p> {{ cargo }} </p>
          </div>
          <div class="flex gap-3 items-center">
            <Tooltip title="Bauzeit">
              <img src="~/assets/images/hourglass.svg" width="32" class="" alt="">
            </Tooltip>
            <p> {{ buildTime }} </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 items-center">
        <button v-if="isModule" id="moduleBtn" class="btn" role="button" type="button">
          Upgrade
        </button>
        <button v-else id="shipBtn" class="btn" role="button" type="button">
          Produce
        </button>

        <div class="flex items-center">
          <button v-if="!isModule" @click="decrement">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 320 512">
              <path fill="currentColor" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>

          <Tooltip v-if="!isModule" title="Gebe ein wie viele Einheiten du produzieren möchtest">
            <input v-if="!isModule" v-model="count" type="text" min="0" inputmode="numeric" pattern="[0-9]*" maxlength="4" onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))" class="border-solid outline-none bg-#353535 border-#424242 h-8 text-white text-center w-16" @focus="handleFocus" @blur="handleFocusOut">
          </Tooltip>

          <button v-if="!isModule" @click="increment">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" viewBox="0 0 320 512">
              <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256L73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-card {
    background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);
    background-blend-mode: multiply;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.content-card:hover {
  box-shadow: rgba(0, 0, 0, 0.4) 0px 24px 38px, rgba(0, 0, 0, 0.35) 0px 22px 15px, rgba(0, 0, 0, 0.3) 0px -12px 30px;
}

.btn {
  transition: 0.5s;
  background: linear-gradient(90deg, var(--c1), var(--c2) 25%, var(--c3) 50%, var(--c2) 75%, var(--c1)) var(--x, 0)/ 200%;
  --c1: #98DBF9;
  --c2: #436DAB;
  --c3: #101318;
}
.btn:hover { --x: 100%; }

.moduleCostPseudoClass::before {
  content: 'cost';
  position: absolute;
  top: -1.5rem;
  left: 1rem;
  color: #c5c5c5;
  font-size: 11px;
}

.moduleCostPseudoClass::after {
  content: '';
  position: absolute;
  top: -17px;
  left: 47px;
  height: 0;
  width: 160px;
  border-top: 1px solid #c5c5c550;
  box-sizing: content-box;
  display: block;
}

.spaceCraftStatPseudoClass::before {
  content: 'stats';
  position: absolute;
  top: -1.5rem;
  left: 1rem;
  color: #c5c5c5;
  font-size: 11px;
}
.spaceCraftStatPseudoClass::after {
  content: '';
  position: absolute;
  top: -17px;
  left: 47px;
  height: 0;
  width: 50px;
  border-top: 1px solid #c5c5c550;
  box-sizing: content-box;
  display: block;
}
.spaceCraftCostPseudoClass::before {
  content: 'cost';
  position: absolute;
  top: -1.5rem;
  left: 150px;
  color: #c5c5c5;
  font-size: 11px;
}
.spaceCraftCostPseudoClass::after {
  content: '';
  position: absolute;
  top: -17px;
  left: calc(150px + 27px);
  height: 0;
  width: 50px;
  border-top: 1px solid #c5c5c550;
  box-sizing: content-box;
  display: block;
}
</style>
