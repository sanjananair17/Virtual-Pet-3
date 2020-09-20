class Food{
    constructor(){
        this.image = loadImage("Milk.png");
        var foodStock = 0;
        var lastFed;
    }

    getFoodStock(){
        return this.foodStock;
    }

    updateFoodStock(count){
        this.foodStock = count;
    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
        }
    }

    bedroom(){
        background(bedroomImg,500,500);
    }

    garden(){
        background(gardenImg,550,500);
    }

    washroom(){
        background(washroomImg,550,500);
    }

    display(){
        var x=80, y=100;
    
        imageMode(CENTER);
        image(this.image, 720, 220, 70, 70);
 
    
        if(this.foodStock != 0){
            for(var i=0; i < this.foodStock; i++){
                if(i % 10 === 0){
                    x = 80;
                    y = y + 50;
                }
                image(this.image, x, y, 50, 50);
                x = x + 30;
            }
        }
    }
}