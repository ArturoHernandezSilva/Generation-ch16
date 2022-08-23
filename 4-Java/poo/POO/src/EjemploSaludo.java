public class EjemploSaludo {
    public static void main(String[] args) {
        //3pasos para instancia: declaracion, construccion, invocacion
        Saludo objSaludo; //declaro un objeto de tipo saludo, tipo clase, tipo referencia
        objSaludo = new Saludo (); // al objeto le asignamos memoria dinamica
        objSaludo.saludar();  //invocacion

        Saludo objSaludo0 = new Saludo()

        System.out.println(objSaludo.saludar0());
        System.out.println("este es otro objeto: ->" + objSaludo0.saludar0());
    }
}
