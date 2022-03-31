
function kda(position){
  if(position=="group leader"){
    return "Ahri";
  }else if(position=="main rapper"){
    return "Akali";
  }else if(position=="lead vocalist"){
    return "Evelynn";
  }else if(position=="main dancer"){
    return "Kai'Sa";
  }else if(position=="guest"){
    return "Seraphine";
  }else{
    return "N/A"
  }
}


console.log(kda("group leader"));
console.log(kda("main rapper"));
console.log(kda("lead vocalist"));
console.log(kda("main dancer"));
console.log(kda("guest"));
console.log(kda("assistant"));
