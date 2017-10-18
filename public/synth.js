/* globals QwertyHancock */
/* globals preset */
/* globals filter1 */
/* globals filter2 */
/* globals filter3 */

var keyboard = new QwertyHancock({
  id: 'keyboard',
  width: 1500,
  height: 150,
  octaves: 6
});

var context = new AudioContext(),
    masterVolume = context.createGain();

var osc1, osc2;
var pressedKeys = {};

masterVolume.gain.value = 0.3;
masterVolume.connect(context.destination);

keyboard.keyDown = function (note, frequency) {
  // If we aren't already counting this keypress, start doing so.
  if (!pressedKeys[note]) { pressedKeys[note] = 0; }
  
  // Increment the counter for this particular note.
  pressedKeys[note]++;
  
  osc1 = context.createOscillator();
  osc2 = context.createOscillator();
  
  osc1.frequency.value = frequency;
  osc1.type = preset.oscillator1.type;
  osc1.detune.value = preset.oscillator1.detune;
 
  osc2.frequency.value = frequency;
  osc2.type = preset.oscillator2.type;
  osc2.detune.value = preset.oscillator2.detune;
  
  var biquadFilter1 = context.createBiquadFilter();
  biquadFilter1.type = filter1.type;
  biquadFilter1.frequency.value = filter1.frequency;
  biquadFilter1.Q.value = filter1.Q;
  biquadFilter1.gain.value = filter1.gain;
  console.log(biquadFilter1);
  
  var biquadFilter2 = context.createBiquadFilter();
  biquadFilter2.type = filter2.type;
  biquadFilter2.frequency.value = filter2.frequency;
  biquadFilter2.Q.value = filter2.Q;
  biquadFilter2.gain.value = filter2.gain;
  console.log(biquadFilter2);

  var biquadFilter3 = context.createBiquadFilter();
  biquadFilter3.type = filter3.type;
  biquadFilter3.frequency.value = filter3.frequency;
  biquadFilter3.Q.value = filter3.Q;
  biquadFilter3.gain.value = filter3.gain;
  console.log(biquadFilter3);
 
  osc1.connect(biquadFilter1);
  osc2.connect(biquadFilter1);
  biquadFilter1.connect(biquadFilter2);
  biquadFilter2.connect(biquadFilter3);
  biquadFilter3.connect(masterVolume);
  
  masterVolume.connect(context.destination);
  
  osc1.start(context.currentTime);
  osc2.start(context.currentTime);
}

keyboard.keyUp = function (note, frequency) {
  osc1.stop(context.currentTime);
  osc2.stop(context.currentTime);
  
  osc1.disconnect();
  osc2.disconnect();
  
  // If we're tracking more than one keypress, decrement the counter.
  if (pressedKeys[note] > 1) {
    pressedKeys[note]--;
  }
  // Otherwise, baleet it so we're not balloonering the memories.
  else {
    delete pressedKeys[note];
  }
}
