# include <iostream> //--- allows inputs and outputs
//# include <conio> //--- allows you to use getch
using namespace std;
int  main ()
{
    float x, y, s;
    char nombre ,apellido;
    cout << "digite su nombre \n";
    cin >> nombre ;
    cout<<"digite su apellido  \n";
    cin >> apellido;
    cout<<"hola    " <<   nombre   << "   digite tus numero\n";
    
    cout <<"digite el primer numero\n";
    cin>> x;
    cout <<"diguite el segundo numero\n";
    cin>> y;
    s = x / y;
    if (y == 0)
        {
        cout <<"la division por cero no esta definidad\n";
        }
    else if (y==1)
	   { 
        cout<< "tu numero es 1 \n";
	   }
   
	else if (y==2)
	   { 
        cout<< "tu numero es 2 \n";
	   }
	else if (y==3)
	   { 
        cout<< "tu numero es 3 \n";
	   }
    else
        {
        cout <<"su resultado es " <<s <<"\n";
        }
    cout << "thaks  mrts "<< apellido << "\n";
    //getch();
    return 0;
}
