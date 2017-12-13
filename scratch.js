var a = 5
var b = 6
var program = "a + b"
var prop = input.value
eval("myObject." + prop)
myObject[prop]
program = document.getElementById('yolo').value
eval(program)
Function("return " + program)()

iframe = document.createElement('iframe')
iframe.setAttribute("sandbox", "allow-scripts")
iframe.src = URL.createObjectURL(new Blob([program], {type: "application/javascript"}))
iframe.contentWindow.onmessage = function() {};

// Fun to explore in the future
array = new Float32Array(length);
wavFile = new Blob([wavHeader, array], {type: "audio/wav"})
a = document.createElement("a")
a.setAttribute("download", URL.createObjectURL(wavFile))
a.click()
