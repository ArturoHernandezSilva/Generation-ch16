package com.ahs.principal;

import com.ahs.herencia.BasePadre;
import com.ahs.herencia.Hija;
import com.ahs.herencia.Hijo;

public class EjemploHerencia {
    public static void main(String[] args) {
        Hija h=new Hija();
        h.visualizarA();
        Hijo ho=new Hijo();
        ho.visualizarABC();

        BasePadre obj=new BasePadre();
        obj.setA(111);

        Object miObject = new BasePadre();



        System.out.println("atributo de clase hijo ->"+ h.getA());
        System.out.println("atributo de objeto padre" +objB.getA());
    }
}
