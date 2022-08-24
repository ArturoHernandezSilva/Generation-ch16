package MiEjemploJava;

public class Persona { //identidad
    private String nombre ="Arturo";//estado
    private int edad = 28;
    private int nss = 0000;



    public Persona(String nombre, int edad, int nss) {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }



    void caminar(){ //metodos (comportamiento)
        System.out.println("Caminar");
    }

    void dormir(){
        System.out.println("Dormir");
    }
}

