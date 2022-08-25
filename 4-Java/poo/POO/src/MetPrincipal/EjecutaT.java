package MetPrincipal;

import MenuPrincipal.MenuOp;
import MiEjemploJava.Persona;
import MiSaludo.Saludo;

import java.util.Scanner;
        public class EjecutaT {


    public static void main(String[] args){

                    Scanner sc = new Scanner(System.in);
                    MenuOp menuOp = new MenuOp();
                    menuOp.menu();


                    System.out.println("Elija una opción -> ");
                    int op = sc.nextInt();


                    switch (op) {
                        case 1:
                            Saludo s = new Saludo();
                            s.saludar();
                            System.out.println(s.saludar0());
                            break;
                        case 2:
                            Persona p = new Persona();

                            break;
                        case 3:
                            break;
                        case 4:
                            System.out.println("aqui va la actividad del dia");
                            break;
                        default:
                            System.out.println("<-- opcion no valida-->");
                    }
    }
}
