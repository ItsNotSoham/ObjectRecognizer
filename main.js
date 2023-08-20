Webcam. set({width:350,height:300,image_format:'png',png_quality:90});
camera=document.getElementById("camera");
Webcam. attach('#camera');
function clickpic(){
    Webcam. snap(function(data_uri){
        document.getElementById("mypic").innerHTML='<img id="i1" src="'+data_uri+'"/>';
    });
}
mymodel=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tu2eiD7oV/model.json',modelLoaded);
function modelLoaded(){
    console.log("My model has loaded.");
}
function recognize(){
    myimage=document.getElementById("i1");
    mymodel.classify(myimage,gotResult);

}
function gotResult(error,results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("objname").innerHTML=results[0].label
        document.getElementById("objacc").innerHTML=results[0].confidence.toFixed(2)*100+" %";
    }

}