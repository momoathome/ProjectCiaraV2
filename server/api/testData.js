/* eslint-disable no-undef */
export default defineEventHandler(() => {
  return {
    modules: [
      {
        isModule: true,
        title: 'Shipyard',
        image: '/modules/shipyard.webp',
        description: 'Je höher die Ausbaustufe der Schiffswerft, desto schneller können Raumschiffe produziert werden.',
        level: 1,
        energy: 300,
        cost: 1000000,
        buildTime: 15,
      },
    ],
    spacecrafts: [
      {
        isModule: false,
        title: 'Merlin',
        image: '/spacecrafts/scorpius.jpg',
        description: 'Ein schneller, wendiger, leichter Jäger. Konstruiert für rasche Angriffe',
        unitLimit: 1,
        combat: 100,
        cargo: 10,
        cost: 1000000,
        buildTime: 5,
      },
      {
        isModule: false,
        title: 'Merlin',
        image: '/spacecrafts/scorpius.jpg',
        description: 'Ein schneller, wendiger, leichter Jäger. Konstruiert für rasche Angriffe',
        unitLimit: 1,
        combat: 100,
        cargo: 10,
        cost: 1000000,
        buildTime: 5,
      },
      {
        isModule: false,
        title: 'Merlin',
        image: '/spacecrafts/scorpius.jpg',
        description: 'Ein schneller, wendiger, leichter Jäger. Konstruiert für rasche Angriffe',
        unitLimit: 1,
        combat: 100,
        cargo: 10,
        cost: 1000000,
        buildTime: 5,
      },
      {
        isModule: false,
        title: 'Merlin',
        image: '/spacecrafts/scorpius.jpg',
        description: 'Ein schneller, wendiger, leichter Jäger. Konstruiert für rasche Angriffe',
        unitLimit: 1,
        combat: 100,
        cargo: 10,
        cost: 1000000,
        buildTime: 5,
      },
    ],
  }
})
