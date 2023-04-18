/* eslint-disable no-undef */
export default defineEventHandler(() => {
  return {
    modules: [
      {
        isModule: true,
        title: 'Shipyard',
        image: '/modules/shipyard_sm.webp',
        description: 'Je höher die Stufe der Schiffswerft, desto schneller werden Raumschiffe produziert.',
        level: 1,
        energy: 1500,
        cost: 1000000,
        buildTime: 900,
      },
      {
        isModule: true,
        title: 'Hangar',
        image: '/modules/space-hangar_sm.webp',
        description: 'Je höher die Stufe des Hangar, desto mehr Raumschiffe können produziert werden.',
        level: 1,
        energy: 500,
        cost: 900000,
        buildTime: 720,
      },
      {
        isModule: true,
        title: 'Laboratory',
        image: '/modules/laboratory_sm.webp',
        description: 'Je höher die Stufe des Labors, desto bessere Raumschiffe können produziert werden.',
        level: 1,
        energy: 600,
        cost: 1500000,
        buildTime: 1800,
      },
      {
        isModule: true,
        title: 'Marketplace',
        image: '/modules/market_sm.webp',
        description: 'Je höher die Stufe des Marktplatzes, desto mehr Rohstoffe können gehandelt werden.',
        level: 1,
        energy: 400,
        cost: 800000,
        buildTime: 600,
      },
      {
        isModule: true,
        title: 'Supply',
        image: '/modules/supply_sm.jpg',
        description: 'Je höher die Stufe der Versorgung, desto mehr Besatzung kann versorgt werden.',
        level: 1,
        energy: 200,
        cost: 6000000,
        buildTime: 300,
      },
      {
        isModule: true,
        title: 'Energy Shield',
        image: '/modules/energy-shield_sm.webp',
        description: 'Je höher die Stufe des Energie Schild, desto mehr Angreifer kann dieser abwehren.',
        level: 1,
        energy: 900,
        cost: 1200000,
        buildTime: 1500,
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
        buildTime: 15,
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
        buildTime: 30,
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
        buildTime: 60,
      },
    ],
  }
})
