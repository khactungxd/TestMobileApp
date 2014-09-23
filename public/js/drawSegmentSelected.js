function choiceSegment(event){
//  for(var i = 0; i < segments.length; i++){
//    //if touch in segment
//    if(touchInfo.xtouch >= segments[i].left && touchInfo.xtouch <= segments[i].left+segments[i].width*touchInfo.scale){
//      console.log("touch is on segment");
//    }
//    else{
//      console.log("touch isn't on segment");
//    }
//  }
  console.log(event.xImageTouch);
  console.log(event.yImageTouch);
  $("#segment-selected").css({width:'60px', height:'20px', top:''+event.yImageTouch-10+'px', left:""+event.xImageTouch-30+"px", border: "3px solid red"});
}

function draw(segment){

}