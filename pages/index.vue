<script lang="ts" setup>
const { toggle } = useDark();
const { locale: currentLocale, t } = useI18n();
</script>

<template>
  <aside id="logo-sidebar"
    class="bg-white border-r h-screen border-gray-200 pt-20 -translate-x-full transition-transform top-0 left-0 w-64 z-40 fixed md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar">
    <div class="bg-white h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
      <ul class="font-medium space-y-2">
        <li>
          <a href="#"
            class="rounded-lg flex p-2 text-gray-900 items-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="~/assets/images/space-station.png" width="32" alt="">
            <span class="ml-3">{{ t("navigation.overview") }}</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="rounded-lg flex p-2 text-gray-900 items-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="~/assets/images/space-ship.png" width="32" alt="">
            <span class="flex-1 ml-3 whitespace-nowrap">{{ t("navigation.shipyard") }}</span>
            <span
              class="rounded-full font-medium bg-gray-200 text-sm ml-3 px-2 text-gray-800 inline-flex items-center justify-center dark:bg-gray-700 dark:text-gray-300">Pro</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="rounded-lg flex p-2 text-gray-900 items-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="~/assets/images/research.png" width="32" alt="">
            <span class="flex-1 ml-3 whitespace-nowrap">{{ t("navigation.research") }}</span>
            <span
              class="rounded-full font-medium bg-blue-100 h-3 text-sm ml-3 p-3 text-blue-800 w-3 inline-flex items-center justify-center dark:bg-blue-900 dark:text-blue-300">3</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="rounded-lg flex p-2 text-gray-900 items-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="~/assets/images/trading.png" width="32" alt="">
            <span class="flex-1 ml-3 whitespace-nowrap">{{ t("navigation.market") }}</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="rounded-lg flex p-2 text-gray-900 items-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="~/assets/images/supply-chain.png" width="32" alt="">
            <span class="flex-1 ml-3 whitespace-nowrap">{{ t("navigation.supply") }}</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="rounded-lg flex p-2 text-gray-900 items-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <img src="~/assets/images/asteroids.png" width="32" alt="">
            <span class="flex-1 ml-3 whitespace-nowrap">{{ t("navigation.asteroid") }}</span>
          </a>
        </li>
        <li>
          <a href="#"
            class="rounded-lg flex p-2 text-gray-900 items-center dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <svg aria-hidden="true"
              class="flex-shrink-0 h-6 transition text-gray-500 w-6 duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
          </a>
        </li>
      </ul>

      <div class="flex flex-row mt-16 gap-2">
        <select v-model="currentLocale" role="listbox" tabindex="0" id="languageListBox" aria-labelledby="languageListBox"
          class="rounded-lg list py-1 px-2 transition dark:bg-base">
          <option v-for="locale of availableLocales" :key="locale" :value="locale" role="option">
            {{ locale }}
          </option>
        </select>

        <button type="button" class="text-8 icon-btn" @click="toggle()">
          <div i="tabler-sun dark:tabler-moon" />
        </button>
      </div>

    </div>
  </aside>

  <div class="p-4 md:ml-64">
    <div class="border-dashed rounded-lg border-2 border-gray-200 mt-14 p-4 dark:border-gray-700">
      <div class="mb-4 grid gap-4 grid-cols-3">
        <div class="rounded flex bg-gray-50 h-24 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="rounded flex bg-gray-50 h-24 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="rounded flex bg-gray-50 h-24 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
      </div>
      <div class="rounded flex bg-gray-50 h-48 mb-4 items-center justify-center dark:bg-gray-800">
        <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>
      <div class="mb-4 grid gap-4 grid-cols-2">
        <div class="rounded flex bg-gray-50 h-28 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="rounded flex bg-gray-50 h-28 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="rounded flex bg-gray-50 h-28 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="rounded flex bg-gray-50 h-28 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
      </div>
      <div class="rounded flex bg-gray-50 h-48 mb-4 items-center justify-center dark:bg-gray-800">
        <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
      </div>
      <div class="grid gap-4 grid-cols-2">
        <div class="rounded flex bg-gray-50 h-28 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="rounded flex bg-gray-50 h-28 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="rounded flex bg-gray-50 h-28 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
        <div class="rounded flex bg-gray-50 h-28 items-center justify-center dark:bg-gray-800">
          <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
        </div>
      </div>
    </div>
  </div>
</template>
