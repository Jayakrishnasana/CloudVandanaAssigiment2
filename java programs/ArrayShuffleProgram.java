import java.util.Arrays;
import java.util.Random;

class ArrayShuffleProgram{
    public static void main(String[] args){
       int[] n={1,2,3,4,5,6,7};
      Random r= new Random();
      
      for(int i=0;i<n.length;i++){
            int newrand=r.nextInt(n.length);
            int temp=n[newrand];
            n[newrand]=n[i];
            n[i]=temp;
      }
      System.out.println(Arrays.toString(n));
    }
}