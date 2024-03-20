import { GameObjects, Input, Scene } from 'phaser'

class GameScene extends Scene {
  private playerOne!: GameObjects.Rectangle & {
    body: Phaser.Physics.Arcade.Body
  }
  private playerTwo!: GameObjects.Rectangle & {
    body: Phaser.Physics.Arcade.Body
  }
  private velocidade: number = 200
  private keyW!: Input.Keyboard.Key
  private keyS!: Input.Keyboard.Key
  private keyO!: Input.Keyboard.Key
  private keyK!: Input.Keyboard.Key

  constructor() {
    super('scene-game')
  }

  create() {
    this.playerOne = this.add.rectangle(
      30,
      300,
      30,
      200,
      0xffffff,
    ) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }
    this.physics.add.existing(this.playerOne)
    this.playerOne.body.setCollideWorldBounds(true)

    this.playerTwo = this.add.rectangle(
      900,
      300,
      30,
      200,
      0xffffff,
    ) as Phaser.GameObjects.Rectangle & { body: Phaser.Physics.Arcade.Body }
    this.physics.add.existing(this.playerTwo)
    this.playerTwo.body.setCollideWorldBounds(true)

    if (this.input.keyboard) {
      this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
      this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
      this.keyO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O)
      this.keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K)
    }
  }

  update(time: number, delta: number) {
    if (!this.input.keyboard) return

    if (this.keyW.isDown) {
      this.playerOne.body.setVelocityY(-this.velocidade)
    } else if (this.keyS.isDown) {
      this.playerOne.body.setVelocityY(this.velocidade)
    } else {
      this.playerOne.body.setVelocityY(0)
    }

    if (this.keyO.isDown) {
      this.playerTwo.body.setVelocityY(-this.velocidade)
    } else if (this.keyK.isDown) {
      this.playerTwo.body.setVelocityY(this.velocidade)
    } else {
      this.playerTwo.body.setVelocityY(0)
    }
  }
}

export { GameScene }
