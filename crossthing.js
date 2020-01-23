function wholething(); {

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
  
  //var correctorient;
  
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
      
}

function splitline(a) {
  var result = a.split("%0A");
  
}

function thingone(a) {
  findsetup = a.indexOf("setup=");
  findand = a.indexOf("&",findsetup);
  scramble = a.substring(findsetup+6,findand);
  cleanscramble = scramble.replace(/_/g," ");
  cleanscramble2 = cleanscramble.replace(/-/g,"'");
  
  var findalg = a.indexOf("alg=");
  var findand2 = a.indexOf("&",findalg);
  var solution = a.substring(findalg+4,findand2);
  var cleansolution = solution.replace(/_/g," ");
  var cleansolution2 = cleansolution.replace(/-/g,"'");
  var cleansolution3 = cleansolution2.replace(/%2F/g,"\/");
  var splitup = cleansolution3.split("%0A");
  addup = cleanscramble2+" "+splitup[0]+" "+splitup[1];
  
}

//var inpoot = "https://alg.cubing.net/?alg=x-_z_%2F%2F_inspection%0AD_R_D-_R-_%2F%2F_cross%0Ay-_R-_U_R_U-_R-_U_R_%2F%2F_1st_pair%0AU_R_U-_R-_U-_L_U_L-_%2F%2F_2nd_pair%0Ay-_U_R-_U-_R2_U_R2-_U-_R_%2F%2F_3rd_pair%0AF-_U-_F_U-_R_U_R-_%2F%2F_4th_pair%0AU-_R_U_R-_U-_R-_F_R_F-_%2F%2F_OLL%0AU-_R-_U_L-_U2_R_U-_R-_U2_R_r_%2F%2F_PLL&setup=D2_B2_D_F2_R2_D2_F2_U-_F-_L_B_R2_D_B-_D-_F_U-_L_U-&type=reconstruction&title=Feliks%20Zemdegs";


function giveresult() {
var inpoot = document.getElementById("initlink").value;

thingone(inpoot);
slotstuff(addup);


var temp = correctorient+" "+cleanscramble2;

var replaceit = inpoot.replace(scramble,temp);

//alert(replaceit);

document.getElementById("owt").innerHTML = replaceit;

}

}