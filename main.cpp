#include <iostream>
#include <cmath>
using namespace std;

int main() {

    double a = 10;
    double b = 4;

    cout << "===== VERSION 2 =====" << endl;
    cout << "operaciones ahora mas avanzadas" << endl;

    double suma = a + b;
    double resta = a - b;
    double multiplicacion = a * b;
    double division = a / b;
    double raiz = sqrt(169);

    double combinado1 = suma - resta;
    double combinado2 = multiplicacion * division;

    cout << "Suma: " << suma << endl;
    cout << "Resta: " << resta << endl;
    cout << "Multiplicacion: " << multiplicacion << endl;
    cout << "Division: " << division << endl;
    cout << "Raiz de 169: " << raiz << endl;

    cout << "--- Nuevas operaciones ---" << endl;
    cout << "Suma - Resta: " << combinado1 << endl;
    cout << "Multiplicacion * Division: " << combinado2 << endl;

    return 0;
}
