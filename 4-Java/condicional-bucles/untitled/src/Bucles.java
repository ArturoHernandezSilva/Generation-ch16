import java.util.*; //importar todas las clases dle paquete util
public class Bucles {
    public static void main(String[] args) {
        System.out.println("Bucles");
        for(int i=0; i<=10; i++){
            System.out.println(i);
        }

        //while
        //bucle no controlado
        //la condicion debe modificarse dentro del while

        //mientras la condicion sea true

        String condicion = "";
        Scanner sc = new Scanner(System.in);


        //== != estamos comparando dantos primitivos. Estamos comparando referencias
        while(!Objects.equals(condicion, "Hola")){
            System.out.println("saludame");
            condicion = sc.next();
        }

        //El do while es igual al while
        //la unica diferencia es que el do while ejecuta la accion aunque sea una vez

        do{
            System.out.println("saludame2");
            condicion = sc.next();
        } while(!Objects.equals(condicion, "Hola"));
    }
}
