/*global Phaser*/

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Trisha ray
// Created on: April 2025
//This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () { 
    super({ key: 'splashScene' })
  }

init (data) {
  this.cameras.main.setBackgroundColor('#ffffff')
}

  preload () {
    console.log('Splash Scene')
  }

  creat (data) {
  }

  update (time, delta) {
  }
}

  export default SplashScene