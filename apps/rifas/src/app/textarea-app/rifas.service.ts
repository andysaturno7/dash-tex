import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RifasService {
  public tensor_audio: any;
  public countdown_audio: any;
  constructor() {}

  sorteo(arr: any[]) {
    let i = Math.floor(Math.random() * arr.length);
    return {
      index: i,
      element: arr[i],
    };
  }

  stringToArray(str: string) {
    return str.split(/\n/);
  }

  // Audio

  initAudio() {
    this.setTensorAudio();
    this.playTensorAudio();
  }

  setTensorAudio() {
    this.tensor_audio = new Audio('assets/audio/tensor-permanent.wav');
    this.tensor_audio.loop = true;
    this.tensor_audio.volume = 0.1;
  }

  playTensorAudio() {
    this.tensor_audio.play();
  }

  pauseTensorAudio() {
    this.tensor_audio.pause();
  }

  initCountdownAudio() {
    this.countdown_audio = new Audio('assets/audio/countdown-sound.wav');
    this.countdown_audio.loop = false;
    this.countdown_audio.play();
  }

  endedCountdownAudio() {
    if (
      this.countdown_audio !== undefined &&
      typeof this.countdown_audio.currentTime !== 'number'
    ) {
      this.countdown_audio.ended = true;
    }
  }
}
