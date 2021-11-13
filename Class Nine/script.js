let player = {
    health:100,
    fun:0,
    play:function(){
        this.fun+=10;
    },
    eat:function(food){
        if(food == 'apple'){
            console.log("Eat Apple");
            this.health+=10;
            console.log(this.health);
            console.log(this.fun);
            
        }
        else if(food == 'candy'){
            console.log("Candy!!")
            this.health-=5;
            this.fun+=5;
            console.log(this.health);
            console.log(this.fun);
         
        }
    }



};
console.log(player.health);
console.log(player.fun);
player.eat('apple');
player.eat('candy');