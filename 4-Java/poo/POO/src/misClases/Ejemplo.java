package misClases;
import misClases.Animal;

public class Ejemplo {
    public static void main(String[] args) {
        //creamos animal con nobre falco
        Animal miAnimal = new Animal("falco");
                //le establecemos 3años de edad
        miAnimal.setEdad(3);
        //mostraremos el nombre del animal por pantalla
        System.out.println("el nombre es: " + miAnimal.getNombre());
        //mostramos la edad por pantalla
        System.out.println(" y tiene " + miAnimal.getEdad() + " años");

    }
}
