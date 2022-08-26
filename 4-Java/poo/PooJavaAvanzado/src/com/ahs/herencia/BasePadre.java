package com.ahs.herencia;

public class BasePadre {
    private int a;
    private double b;
    private String c;

    public BasePadre(){

    }
    public void visualizarA(){
        System.out.println("objeto h->Soy un metodo de la clase BasePadre tegno ojos cafes");

    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }

    public void visualizarABC(){
        System.out.println(" objeto ho ->Soy el metodo visualizar ABC tengo ojos verdes");

    }
}
