package MiEjemploJava;

public class EjemploPersona {
    public static void main(String[] args) {
        Persona p = new Persona("pedro", 23, 222);
        p.setNombre("Diego");
        p.setEdad(32);
        p.setNss(666);
        System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNombre());
        System.out.println("el valor de la variable de instancia p.edad -> " + p.getEdad());
        System.out.println("el valor de la variable de instancia p.nss -> " + p.getNss());

        //instancia: la relacion de un objeto con una clase
    }
}
