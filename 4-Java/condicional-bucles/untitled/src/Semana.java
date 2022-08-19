import java.util.Scanner;

public class Semana {

    public static void main(String[] args) {
        System.out.println("Semana");


        Scanner sc = new Scanner(System.in);
        System.out.println("Escribe un numero: ");
        int diaSemana = sc.nextInt(); //con byte en lugar de int tambien da


        switch (diaSemana) {
            case 1:
                System.out.println("Se escribio un uno");
                break;
            case 2:
                System.out.println("se escribio un dos");
                break;
            default:
                System.out.println("No entendi");
        }
    }
}
