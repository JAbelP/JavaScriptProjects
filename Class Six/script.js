let distance = 250;
let fuel = 25;
let distanceCondition =distance<=200 && distance >= 100;


if(distance > 200){
    console.log("Won't make it");
}


else if ( distanceCondition && fuel >= 100){

    console.log('you will make it ');



}

else if (distance<100 && fuel>=25){
    console.log('by the skin of our teeth');
}