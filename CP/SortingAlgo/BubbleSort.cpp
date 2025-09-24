#include <bits/stdc++.h>
using namespace std;

void bubblesort(vector<int> &arr, int n  ){
   
    for(int i = 0; i<n-1;i++){
        for(int j =0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
        
    }
}

// for return array 

vector<int> bubblesortWithReturnArray(vector<int> arr  ){
    int n = arr.size();
    for(int i = 0; i<n-1;i++){
        for(int j =0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
        return arr;
    }
}

 int main(){
    vector<int> arr= {5, 3, 8, 4, 2};
    int n = arr.size();
    // simple array value
    bubblesort(arr, n);
     for(int x : arr){
        cout <<  x << " " ;
     }
    cout << endl;
    // for return array
    vector<int> sortedarray =  bubblesortWithReturnArray(arr);
    for(int y : sortedarray ){
        cout << y << " ";
    }
    return 0;
 }