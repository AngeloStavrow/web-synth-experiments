/* globals defaults */

// frequency  : Default value is 350 with a nominal range  of 10 to the Nyquist frequency — that is, half of the sample rate
// Q          : Default value of 1 and a nominal range of 0.0001 to 1000
// gain       : Expressed in dB, has a default value of 0 and can take a value in a nominal range of -40 to 40
// type       : Enum { lowpass, highpass, bandpass, lowshelf, highshelf, peaking, notch, allpass }

function Filter(data) {
  data = data || {};
  
  var filter = data;
  
  // Set some defaults.
  defaults(filter, {
    frequency: 440,
    Q: 1,
    gain: -40,
    type: "lowshelf",
  });
  
  return filter;
}

window.filter1 = Filter();
window.filter2 = Filter();
window.filter3 = Filter();
