#include <bits/stdc++.h>
using namespace std;

void greet() // no return , no parameter 
{
    cout<<"No return , No parameter" <<endl;
}

// function with Parameters but No Return 
void printsum(int a, int b ){
    cout <<"Sum =" <<(a+b)<<endl;
} 

// function return with no parameters
int getNumber(){
    return 42;
}

// function with both Parameeter and Return 
int multiply(int x, int y){
    return x*y;
}

// Inline functions: compiler to insert code directly instead of calling 
inline int square(int x){
    return x*x;
}

int main(){
greet();
printsum(10,14);
getNumber();
multiply(1,8);

}