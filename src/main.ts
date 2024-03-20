import { Game, Types } from 'phaser'
import { GameScene } from './Scenes/GameScene'

const gameConfig: Types.Core.GameConfig = {
  title: 'Phasergame tutorial',
  type: Phaser.WEBGL,
  parent: 'game',
  backgroundColor: '#1f3a43',
  scale: {
    mode: Phaser.Scale.ScaleModes.NONE,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  render: {
    antialiasGL: false,
    pixelArt: true,
  },
  callbacks: {
    postBoot: () => {
      window.sizeChanged()
    },
  },
  canvasStyle: `display: block; width: 100%; height: 100%`,
  autoFocus: true,
  audio: {
    disableWebAudio: false,
  },
  scene: [GameScene],
}

window.sizeChanged = () => {
  if (window.game.isBooted) {
    setTimeout(() => {
      window.game.scale.resize(window.innerWidth, window.innerHeight)
      window.game.canvas.setAttribute(
        'style',
        `display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
      )
    }, 100)
  }
}

window.onresize = () => window.sizeChanged()

window.game = new Game(gameConfig)
