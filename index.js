var fruit1=["ვაშლი", "მსხალი", "ატამი"];
function reverseArrayInPlace(fruit1){
for (var i=0; i<=Math.floor((fruit1.length-1)/2);
i++){
    let el=fruit1[i];
fruit1[i]=fruit1[fruit1.length-1-i];
fruit1[fruit1.length-1-i]=el;
}
return fruit1;
}