package comahs_habstracta;

abstract public class FigurasGeometricas {
    public abstract float area ();

    private String nombre;

    public abstract float area ();

    public FigurasGeometricas(String nombre);{
        this.nombre = nombre;
    }


    @Override
    public String toString() {
        return nombre + "area ->" + area ();
    }
}