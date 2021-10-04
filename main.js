camera = document.getElementById("camera");
Webcam.attach('#camera');
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id "captured_image" src="' +data_uri+'"/>'; 
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MIq6UPSf0/', modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "the first pridiction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(soeak_data_1 + speak_data_2);
    synth.speak(utterThis);    
}