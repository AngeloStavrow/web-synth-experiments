function inputDealy(label) {
  var label = document.createElement("label");
  var input = document.createElement("input");

  label.innerText = label;
  label.appendChild(input);

  // TODO: wire up the input to the external things
  // label.querySelector('input')
  // label.input = input

  Object.assign(label, {
    listen: function(handler) {
      input.oninput = handler;
    },
    someotherMethod: function() {}
  });
  
  // label.listen = ...
  // label.someotherMethod = ...
  
  // label is an Element
  // label has a .listen method
  
  Object.defineProperty(label, "value", {
    get: function() {
      return input.value;
    },
    set: function(newValue) {
      return input.value = newValue;
    }
  });
  
  return {
    element: label,
    listen: function() {}
    // ...
  };
}
