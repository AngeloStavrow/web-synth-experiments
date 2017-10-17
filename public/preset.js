/* globals defaults */

function Preset(data) {
  data = data || {};

  var preset = data;

  // Set some defaults.
  defaults(preset, {
    oscillator1: {
      type: "sawtooth"
    },
    oscillator2: {
      type: "triangle"
    },
    effect: "none"
  });

  function setEffect() {
    console.log('Setting oscillator tuning');
    switch (preset.effect) {
      case 'chorus':
        preset.oscillator1.detune = -10;
        preset.oscillator2.detune = 10;
        break;
      default:
      case 'none':
        preset.oscillator1.detune = 0;
        preset.oscillator2.detune = 0;
        break;
    }
  }

  setEffect();

  preset.setEffect = setEffect;

  return preset;
}

window.preset = Preset();
