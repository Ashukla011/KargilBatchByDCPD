#include <bits/stdc++.h>>
using namespace std;

int main(){
    
vector<int> arr = {1,3,1,4,5,3,2};
vector<int> c;
int n = arr.size();;
int i =0;
int j = n;

while (i<=j)
{
   int d1 = arr[i]-arr[j];
   int d2 = arr[j] -arr[j-1];
   if(d1>d2 && c[c.size()<=arr[i]]|| c[c.size()<= arr[j]]){
     c.push_back(arr[j]);
     j--;
   }else{
    c.push_back(arr[i]);
    i++;
   }
cout << c << endl;   
}