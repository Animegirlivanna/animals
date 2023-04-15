function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/');
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) 
    if (error){
        console.error(error);
    }
    else
        console.log(results);
        r= Math.floor(Math.random() * 255);
        g= Math.floor(Math.random() * 255);
        b= Math.floor(Math.random() * 255);

        r_label = results[0].label;
        r_acc = (results[0].confidence * 100).toFixed(2);

        document.getElementById("result_label").innerHTML = 'I can hear - '+ r_label;
        document.getElementById("result_confidence").innerHTML = 'confidence - '+ r_acc + '%';
        document.getElementById("result_label").style.color = "rgb("+ r +", "+ g +", "+ b +")";
        document.getElementById("result_confidence").style.color = "rgb("+ r +", "+ g +", "+ b +")";
        
        img1 = document.getElementById("img1.png");
        img2 = document.getElementById("img2.jpg");
        
        if (r_label == "Meowing") {
            img1.src = "img11.gif";
            img2.src = "img2.jpg";
        } else if (r_label == "Barking"){
            img1.src = "img1.png";
            img2.src = "img22.gif";
        }
        