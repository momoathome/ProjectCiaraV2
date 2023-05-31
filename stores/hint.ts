export const useHintStore = defineStore('hint', () => {
  const hint = ref(true)

  function toggle() {
    hint.value = !hint.value
  }

  return { hint, toggle }
})
