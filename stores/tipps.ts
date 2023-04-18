export const useTippStore = defineStore('tipps', () => {
  const tipps = ref(true)

  function toggle() {
    tipps.value = !tipps.value
  }

  return { tipps, toggle }
})
