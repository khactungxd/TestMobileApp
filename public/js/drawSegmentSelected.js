var segments = [[45,45,10,10],[145,45,10,10],[45,95,10,10],[145,95,10,10],[95,45,10,10],[95,95,10,10]]



function choiceSegment(event){
  for(var i = 0; i < segments.length; i++){
    //if touch in segment
    var disx = segments[i][0]+segments[i][2]*event.scale;
    var disy = segments[i][1]+segments[i][3]*event.scale
    if(event.xImageTouch >= segments[i][0] && event.xImageTouch <= disx && event.yImageTouch >= segments[i][1] && event.yImageTouch <= disy){
      console.log("Segment: ",i);
      $("#segment-selected").css({width:segments[i][2]*event.scale+'px', height:segments[i][3]*event.scale+'px', top:segments[i][1]-event.yOImage+'px', left:segments[i][0]-event.xOImage+"px", border: "3px solid red"});
    }
    else{
    }
  }

}

function draw(segment){

}