var fruit1=["ვაშლი", "მსხალი", "ატამი"];
for (let i=0; i<Math.floor(fruit1.length/2);
i++){
     [fruit1[i], fruit1[fruit1.length-1-i]]=[fruit1[fruit1.length-1-i], fruit1[i]];
}

document.write(fruit1)