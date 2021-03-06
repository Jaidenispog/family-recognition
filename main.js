Webcam.set({

    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
    
    
});


camera = document.getElementById("cameras");
Webcam.attach('cameras');


function take_snapshot() {

    Webcam.snap(function(data_uri) {

        document.getElementById("results").innerHTML='<img id = "captured_img" src="' + data_uri + '">';
    });
}


console.log('ml5 version:  ', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/d4zE7lkkI/model.json', modelLoaded);


function modelLoaded() {

    console.log('Your Model Has Been Successfull And Is Now Ready To View.')
}


function check() {

img= document.getElementById("captured_img");
classifier.classify(img, gotResults);


}


function gotResults(error, results) {

if (error) {


    console.log(error);

}
else {

    console.log(results);   
    document.getElementById("result_object_name").innerHTML=results[0].label;
    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence. toFixed(2);
}
}