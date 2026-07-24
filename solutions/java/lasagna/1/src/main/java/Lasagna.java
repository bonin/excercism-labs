public class Lasagna {
    public int expectedMinutesInOven(){
        int time = 40;
        
        return time;
    }
    public int remainingMinutesInOven(int elapsedTime){
        int time = 40;
        int remainingTime = time - elapsedTime;
        
        return remainingTime;
    }

    public int preparationTimeInMinutes(int layers){
        int preparationTime = layers * 2;
        
        return preparationTime;
    }

    public int totalTimeInMinutes(int layers, int ovenTime){
        int prepTime = preparationTimeInMinutes(layers);

        return prepTime + ovenTime;
    }
}
