package MiEjemploJava;

public class Persona { //identidad
    String nombre ="Arturo";//estado
    private int edad = 28;
    private int nss = 0000;


    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public void setNss(int nss) {
        this.nss = nss;
    }

    public Persona() {

    }


    public String getNombre() {
        return nombre;
    }

    public int getEdad() {
        return edad;
    }

    public int getNss() {
        return nss;
    }

    public Persona(String nuevonombre, int nuevoedad, int nuevonss) {
        this.nombre = nuevonombre;
        this.edad = nuevoedad;
        this.nss = nuevonss;
    }



    void caminar(){ //metodos (comportamiento)
        System.out.println("Caminar");
    }

    void dormir(){
        System.out.println("Dormir");
    }
}

