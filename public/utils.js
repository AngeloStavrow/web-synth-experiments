function defaults(object, defaultValues) {
  Object.keys(defaultValues).forEach(function(key){
    var value = defaultValues[key];

    if (!object.hasOwnProperty(key)) {
      object[key] = value;
    }
  });
}

window.defaults = defaults;
