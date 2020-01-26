var addup;
var correctorient;

var findsetup;
var findand;
var scramble;
var cleanscramble;
var cleanscramble2;





function slotstuff(a) {

  
  
  var res = a.split(" ");

  var centers = ["w","o","g","r","b","y"];
  

  var prevcen = centers.slice(0,6);
  
  
  function prevabuse() {
    prevcen = centers.slice(0,6);
    
  }
  
  
  function xcenter() {
    centers[0] = prevcen[2];
    centers[2] = prevcen[5];
    centers[4] = prevcen[0];
    centers[5] = prevcen[4];
  }
  
  function xrotation() {
    
    xcenter();
    prevabuse();
  }
  
  function ycenter() {
    centers[1] = prevcen[2];
    centers[2] = prevcen[3];
    centers[3] = prevcen[4];
    centers[4] = prevcen[1];
  }
  
  function yrotation() {
    ycenter();
    prevabuse();
  }
  
  function zcenter() {
    centers[0] = prevcen[1];
    centers[1] = prevcen[5];
    centers[3] = prevcen[0];
    centers[5] = prevcen[3];
  }
  
  function zrotation() {
    
    zcenter();

    prevabuse();
  }
  
  
  function Mmove() {
    
    xrotation();  
    prevabuse();
  }

  
  for (var i=0;i<res.length;i++) {
    if (res[i] == "x") {
      xrotation();
    }
    else if (res[i] == "x'") {
      xrotation();
      xrotation();
      xrotation();
    }
    else if (res[i] == "x2" || res[i] == "x2'") {
      xrotation();
      xrotation();
    }
    else if (res[i] == "y") {
      yrotation();
    }
    else if (res[i] == "y'") {
      yrotation();
      yrotation();
      yrotation();
    }
    else if (res[i] == "y2" || res[i] == "y2'") {
      yrotation();
      yrotation();
    }
    else if (res[i] == "z") {
      zrotation();
    }
    else if (res[i] == "z'") {
      zrotation();
      zrotation();
      zrotation();
    }
    else if (res[i] == "z2" || res[i] == "z2'") {
      zrotation();
      zrotation();
    }
    else if (res[i] == "M") {
      Mmove();
      Mmove();
      Mmove();
    }
    else if (res[i] == "M'") {
      Mmove();
    }
    else if (res[i] == "M2" || res[i] == "M2'") {
      Mmove();
      Mmove();
    }
    else if (res[i] == "r") {
      xrotation();
    }
    else if (res[i] == "r'") {
      xrotation();
      xrotation();
      xrotation();
    }
    else if (res[i] == "r2" || res[i] == "r2'") {
      xrotation();
      xrotation();
    }
    else if (res[i] == "l") {
      xrotation();
      xrotation();
      xrotation();
    }
    else if (res[i] == "l'") {
      xrotation();
    }
    else if (res[i] == "l2" || res[i] == "l2'") {
      xrotation();
      xrotation();
    }
    else if (res[i] == "u") {
      yrotation();
    }
    else if (res[i] == "u'") {
      yrotation();
      yrotation();
      yrotation();
    }
    else if (res[i] == "u2" || res[i] == "u2'") {
      yrotation();
      yrotation();
    }
    else if (res[i] == "d") {
      yrotation();
      yrotation();
      yrotation();
    }
    else if (res[i] == "d'") {
      yrotation();
    }
    else if (res[i] == "d2" || res[i] == "d2'") {
      yrotation();
      yrotation();
    }
    else if (res[i] == "E") {
      zrotation();
      Mmove();
      Mmove();
      Mmove();
      zrotation();
      zrotation();
      zrotation();
    }
    else if (res[i] == "E'") {
      zrotation();
      Mmove();
      zrotation();
      zrotation();
      zrotation();
    }
    else if (res[i] == "E2" || res[i] == "E2'") {
      zrotation();
      Mmove();
      Mmove();
      zrotation();
      zrotation();
      zrotation();
    }
    else if (res[i] == "S") {
      yrotation();
      Mmove();
      Mmove();
      Mmove();
      yrotation();
      yrotation();
      yrotation();
    }
    else if (res[i] == "S'") {
      yrotation();
      Mmove();
      yrotation();
      yrotation();
      yrotation();
    }
    else if (res[i] == "S2" || res[i] == "S2'") {
      yrotation();
      Mmove();
      Mmove();
      yrotation();
      yrotation();
      yrotation();
    }
  }
  
  if (centers[5] == "o") {
    correctorient = "z'";
  }
  if (centers[5] == "g") {
    correctorient = "x'";
  }
  if (centers[5] == "r") {
    correctorient = "z";
  }
  if (centers[5] == "b") {
    correctorient = "x";
  }
  if (centers[5] == "y") {
    correctorient = "x2";
  }
  if (centers[5] == "w") {
    correctorient = 0;
  }
  
}


function thingone(a) {
    findsetup = a.indexOf("setup=");
    findand = a.indexOf("&", findsetup);
    if (findand == -1) {
    findand = a.length;
    }
    
    scramble = a.substring(findsetup + 6, findand);
    cleanscramble = scramble.replace(/_/g, " ");
    cleanscramble2 = cleanscramble.replace(/-/g, "'");

    var findalg = a.indexOf("alg=");
    var findand2 = a.indexOf("&", findalg);
    if (findand2 == -1) {
    findand2 = a.length;
    }
    
    var solution = a.substring(findalg + 4, findand2);
    var cleansolution = solution.replace(/_/g, " ");
    var cleansolution2 = cleansolution.replace(/-/g, "'");
    var cleansolution3 = cleansolution2.replace(/%2F/g, "\/");
    var splitup = cleansolution3.split("%0A");
    addup = cleanscramble2 + " " + splitup[0] + " " + splitup[1];
  
}



var inpoot = window.location.href;

thingone(inpoot);
slotstuff(addup);

if (correctorient == 0) {

}
else {
  var temp = correctorient + " " + cleanscramble2;
  var replaceit = inpoot.replace(scramble, temp);
  window.location.href=replaceit;
}