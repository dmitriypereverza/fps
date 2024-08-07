import { generateAmmo, generateZombie } from "./generators";

const level: Level = {
  world: {
    colors: {
      top: { r: 0, g: 0, b: 0, a: 255 },
      bottom: { r: 84, g: 98, b: 92, a: 255 },
    },
  },
  music: 'shocking-red-abbynoise',
  map: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
  textures: {
    1: "TECH_1C",
    2: "TECH_1E",
    3: "TECH_2F",
    4: "DOOR_1A",
    5: "DOOR_1E",
  },
  player: {
    x: 1,
    y: 1,
    angle: 45,
    health: 100,
  },
  items: [
    generateAmmo(3.5, 1.6, 15),
    generateAmmo(3.5, 1.8, 15),
    generateAmmo(3.5, 2, 15),
    generateAmmo(3.5, 2.2, 15),
    generateAmmo(3.5, 2.4, 15),
    generateAmmo(16, 5, 15),
  ],
  enemies: [
    generateZombie(4, 5, 2),
    //generateTank(5, 6, 4),
  ],
  endingScenario: {
    name: 'survive',
    timer: 30,
  }
};

export default level;
