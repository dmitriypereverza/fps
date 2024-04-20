import { Color } from "src/managers/TextureManager";

const level: Level = {
    world: {
        top: new Color(0, 0, 0, 255),
        bottom: new Color(84, 98, 92, 255),
    },
    player: {
        x: 2,
        y: 2,
        angle: 45,
    },
    exit: {
        x: 11,
        y: 11,
    },
    map: [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,1,1,0,1,1,0,0,0,1],
        [1,0,0,0,0,1,0,0,0,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,1,0,0,0,1,0,0,0,1],
        [1,0,0,0,0,1,1,0,1,1,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    ]
}

export default level;