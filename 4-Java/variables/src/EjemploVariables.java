public class EjemploVariables {
    public static void main(String[] args) {
        String nombre= "Hugo";
        String saludo = "Hola esto es ejemplo de variables";
        char espacio = '\u0021';
        char caracter = 'a';
        System.out.println(saludo+ " "+ nombre);
        System.out.println("espacio = " + espacio);
        System.out.println("char corresponde en byte: " + Character.BYTES);
        System.out.println("char coresponde en bits: " + Character.SIZE);
        System.out.println("char valor maximo:" + Character.MAX_VALUE);
        System.out.println("char valor minimo:" + Character.MIN_VALUE);




        int numeroEntero = 2;
        System.out.println("numeroEntero = " + numeroEntero);
        System.out.println("int corresponde en byte: " + Integer.BYTES);
        System.out.println("int coresponde en bits: " + Integer.SIZE);
        System.out.println("int valor maximo:" + Integer.MAX_VALUE);
        System.out.println("int valor minimo:" + Integer.MIN_VALUE);

        float numeroFloat = 0.00000000000015f; //1.5e-13f
        System.out.println("numeroFloat = " + numeroFloat);
        System.out.println("float corresponde en byte: " + Float.BYTES);
        System.out.println("float coresponde en bits: " + Float.SIZE);
        System.out.println("float valor maximo:" + Float.MAX_VALUE);
        System.out.println("float valor minimo:" + Float.MIN_VALUE);

        double numeroDouble = 3.4444567E39;
        System.out.println("numeroDouble = " + numeroDouble);
        System.out.println("double corresponde en byte: " + Double.BYTES);
        System.out.println("double coresponde en bits: " + Double.SIZE);
        System.out.println("double valor maximo:" + Double.MAX_VALUE);
        System.out.println("double valor minimo:" + Double.MIN_VALUE);

       //boolean valBoolean = true; boolean no tiene valor        //System.out.println("boolean = " + varBoolean);
        //System.out.println("boolean corresponde en byte: " + Boolean.BYTES);
        //System.out.println("boolean coresponde en bits: " + Boolean.SIZE);
        //System.out.println("boolean valor maximo:" + Boolean.MAX_VALUE);
        //System.out.println("boolean valor minimo:" + Boolean.MIN_VALUE);

        boolean valorBoolean = (3-2 == 1);
        System.out.println("valorBoolean = " + valorBoolean);


        long valorLong = 10;
        System.out.println("long corresponde en byte: " + Long.BYTES);
        System.out.println("long coresponde en bits: " + Long.SIZE);
        System.out.println("long valor maximo:" + Long.MAX_VALUE);
        System.out.println("long valor minimo:" + Long.MIN_VALUE);

        var miVar = '2';
        System.out.println("miVar = " + miVar);



    }
}
