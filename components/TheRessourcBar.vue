<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <header class="bg-white border-b-solid flex border-b-base/20 border-b-1 h-55px w-full px-8 top-0 z-50 gap-16 fixed justify-between items-center dark:bg-base dark:border-b-base_light/10 ">
    <div class="flex h-full flex-1">
      <nuxt-link to="/" class="flex font-bold h-full text-22px items-center">
        {{ t("global.title") }}
      </nuxt-link>
    </div>

    <input id="nav-check" type="checkbox" class="nav-check">
    <label id="label-nav-check" for="nav-check">
      <div class="hamb">
        <span class="hamb-line line1" />
        <span class="hamb-line line2" />
        <span class="hamb-line line3" />
      </div>
    </label>

    <ul class="flex gap-8">
      <li class="flex gap-2">
        <img src="~/assets/images/playerRes/credits.svg" width="32px" alt="">
        <span id="playerCreditValue" class="flex font-bold items-center">120.000.000</span>
      </li>
      <li class="flex gap-2">
        <img src="~/assets/images/playerRes/energy.svg" width="32px" alt="">
        <span id="playerEnergyValue" class="flex font-bold items-center">1.020</span>
      </li>
      <li class="flex gap-2">
        <!-- <div class="border border-solid flex font-bold border-dark-900 text-sm w-8 res-titanium justify-center items-center">Ti</div> -->
        <img src="~/assets/images/playerRes/titanium.png" width="32px" alt="">
        <span id="playerTitaniumValue" class="flex font-bold items-center">2.500</span>
      </li>
      <li class="flex gap-2">
        <!-- <div class="border border-solid flex font-medium border-dark-900 text-white text-sm w-8 res-carbon justify-center items-center">C</div> -->
        <img src="~/assets/images/playerRes/carbon.png" width="32px" alt="">
        <span id="playerCarbonValue" class="flex font-bold items-center">4.000</span>
      </li>
      <li class="flex gap-2">
        <!-- <div class="border border-solid flex font-medium border-dark-900 text-white text-sm w-8 res-helium justify-center items-center">H</div> -->
        <img src="~/assets/images/playerRes/helium.png" width="32px" alt="">
        <span id="playerHeliumValue" class="flex font-bold items-center">2.000</span>
      </li>
      <li class="flex gap-2">
        <!-- <div class="border border-solid flex font-bold border-dark-900 text-sm w-8 res-kyber justify-center items-center">Ky</div> -->
        <img src="~/assets/images/playerRes/kristal.png" width="32px" alt="">
        <span id="playerKristalValue" class="flex font-bold items-center">900</span>
      </li>
      <li class="flex gap-2">
        <img src="~/assets/images/playerRes/combatValue.svg" width="28px" alt="">
        <span id="playerCombatValue" class="flex font-bold items-center">45.000</span>
      </li>
      <li class="flex gap-2">
        <img src="~/assets/images/playerRes/spaceship.svg" width="28px" alt="">
        <span id="playerUnitLimitValue" class="flex font-bold items-center">322</span>
      </li>
    </ul>
  </header>
</template>

<style scoped>
ul li span {
  font-size: 0.875rem;
}

.nav-check {
  display: none;
}

.hamb {
  display: none;
}

/* Responsive */
@media (max-width: 767px) {
  header {
    padding-inline: 1rem;
    position: relative;
  }

  .nav-links {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    height: 0px;
    background-color: rgb(var(--secondary));
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 0;
    left: 0;
    z-index: 25;
  }

  .nav-links>a {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    height: max-content;
  }

  .nav-check:not(:checked)~.nav-links {
    height: 0px;
  }

  .nav-check:checked~.nav-links {
    height: 100vh;
    overflow-y: hidden;
  }

  /* Hamburger Menu */
  .hamb {
    display: block;
    cursor: pointer;
    margin: 0 auto;
    width: 30px;
    height: 20px;
    position: relative;
    z-index: 50;
  }

  .hamb-line {
    background: rgb(var(--base));
    position: absolute;
    left: 0;
    padding: 0;
    width: 30px;
    height: 4px;
    border-radius: 4px;
    transition: all 0.4s;
  }

  .dark .hamb-line {
    background: rgb(var(--base-light));
  }

  .line1 {
    top: 0;
    width: 22px;
  }

  .line2 {
    top: 8px;
    width: 16px;
  }

  .line3 {
    bottom: 0;
  }

  .nav-check:checked+label>.hamb>.line1 {
    transform: rotate(45deg);
    transform-origin: 5%;
    width: 25.5px;
  }

  .nav-check:checked+label>.hamb>.line2 {
    transform: translateX(-24px);
    background-color: transparent;
  }

  .nav-check:checked+label>.hamb>.line3 {
    transform-origin: 5%;
    transform: rotate(-45deg);
    width: 25.5px;
  }
}
</style>
