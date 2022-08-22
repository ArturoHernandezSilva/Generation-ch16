public class Ejercicio {
    public static void main(String[] args) {
        String texto = "*";

        System.out.println(texto);
        for(int i=1; i<=4; i++){
            texto=texto+ "*";
            System.out.println(texto);
        }

        String texto2 = "*****";

        System.out.println(texto2);
        for(int i=1; i<=4; i--){
            texto=texto+ "*";
            System.out.println(texto2);
        }

    }
}
