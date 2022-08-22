public class Arreglos {
    public static void main(String[] args) {
        System.out.println("Arreglos");


        //en los arreglos no se pueden mezclar tipos de datos
        //tenemos que definir el tamaño del arreglo
        int[] numerosAleatorios = {1,2,3,4,5,6};
        String[] valores = {"Hola", "Adios", "etc"};


        valores[2] = "valor cambiado";


        //otra forma de definir arreglos que no ocupaan mucho
        //byte otrosNumeros[] = {1,2,3};

        //los arreglos tienen un tamaño definido
        char[] caracteres = new char[4];
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'a';

        System.out.println(numerosAleatorios);
        System.out.println(valores[2]);
        System.out.println(caracteres);


        //for each
        for(String elemento : valores){
            System.out.println(elemento);
        }

        for(int numero : numerosAleatorios){
            System.out.println(numero);
        }

    }
}
