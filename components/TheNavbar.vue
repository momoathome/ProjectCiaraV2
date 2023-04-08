<script setup lang="ts">
const { toggle } = useDark();
const { locale: currentLocale, t } = useI18n();
</script>

<template>
  <header>
    <div class="nav-logo-wrapper">
      <nuxt-link to="/" class="nav-logo"> {{ t("global.title") }} </nuxt-link>
    </div>

    <input type="checkbox" class="nav-check" id="nav-check" />
    <label for="nav-check" id="label-nav-check">
      <div class="hamb">
        <span class="hamb-line line1"></span>
        <span class="hamb-line line2"></span>
        <span class="hamb-line line3"></span>
      </div>
    </label>

    <nav class="nav-links">
      <nuxt-link to="/hangar">
        {{ t("navigation.hangar") }}
      </nuxt-link>
      <nuxt-link to="/modules">
        {{ t("navigation.module") }}
      </nuxt-link>
      <nuxt-link to="/market">
        {{ t("navigation.market") }}
      </nuxt-link>
      <nuxt-link to="/asteroids">
        {{ t("navigation.asteroid") }}
      </nuxt-link>
      <nuxt-link to="/research">
        {{ t("navigation.research") }}
      </nuxt-link>
    </nav>

    <div class="flex flex-row gap-2">
      <select
        v-model="currentLocale"
        role="listbox"
        tabindex="0"
        id="languageListBox"
        aria-labelledby="languageListBox"
        class="rounded-lg list py-1 px-2 transition dark:bg-base"
      >
        <option
          v-for="locale of availableLocales"
          :key="locale"
          :value="locale"
          role="option"
        >
          {{ locale }}
        </option>
      </select>

      <button type="button" class="text-8 icon-btn" @click="toggle()">
        <div i="tabler-sun dark:tabler-moon" />
      </button>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: rgb(var(--test));
  height: 70px;
  padding-inline: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

a {
  text-decoration: none;
  color: rgb(var(--test));
}
.nav-logo-wrapper {
  display: flex;
  flex: 1;
  height: 100%;
}

.nav-logo {
  display: flex;
  font-size: 22px;
  height: 100%;
  font-weight: 700;
  align-items: center;
}

.nav-links {
  display: flex;
  font-size: 18px;
  height: 100%;
}

.nav-links > a {
  padding-inline: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 600;
  transition: 200ms ease-in;
}

.nav-links > a:hover {
  background-color: var(--gray);
}

.dark .nav-links > a:hover {
  color: rgb(var(--base));
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
    background-color: var(--gray);
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 0;
    left: 0;
    z-index: 25;
  }
  .nav-links > a {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    padding-inline: 1rem;
    padding-block: 0.5rem;
    height: max-content;
  }
  .nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav-check:checked ~ .nav-links {
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

  .nav-check:checked + label > .hamb > .line1 {
    transform: rotate(45deg);
    transform-origin: 5%;
    width: 25.5px;
  }
  .nav-check:checked + label > .hamb > .line2 {
    transform: translateX(-24px);
    background-color: transparent;
  }
  .nav-check:checked + label > .hamb > .line3 {
    transform-origin: 5%;
    transform: rotate(-45deg);
    width: 25.5px;
  }
}
</style>
