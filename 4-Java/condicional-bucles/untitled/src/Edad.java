import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        //determinar si uno es mayor de edad

        //tener la edad - pedir al usuario

        //condicional para saber su es menor de 18


        //let nombre = prompt ("escribe tu edad")
        Scanner escanner = new Scanner(System.in); //instanciar
        System.out.println("Escribe tu edad: ");
        int edad = escanner.nextInt();
        escanner.close();

        System.out.println(edad);
        if(edad >=18){
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("eres menor de edad");
        }

        // Operador ternario
        String resultado = (edad >=18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);
    }
}
