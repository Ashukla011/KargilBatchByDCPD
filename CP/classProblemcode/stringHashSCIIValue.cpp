#include <bits/stdc++.h>
using namespace std;

long long c; // modulus (will assign later)

// fast modular exponentiation
long long binpow(long long a, long long b) {
    if (b == 0) return 1;
    long long x = binpow(a, b / 2);
    x = (x * x) % c;
    if (b % 2 != 0) {
        x = (x * a) % c;
    }
    return x;
}

int main() {
    string s;
    cin >> s;
    int k;
    cin >> k;

    long long p = 31;
    c = 1e9 + 7; // assign modulus here

    long long hashVal = 0;

    // compute hash for first k-length substring
    for (int i = 0; i < k; i++) {
        hashVal = (hashVal + (s[i] - 'a' + 1) * binpow(p, i)) % c;
    }

    cout << hashVal << " ";

    // precompute p^(k-1) for sliding window
    long long pk = binpow(p, k - 1);

    // rolling hash for remaining substrings
    for (int i = k; i < (int)s.size(); i++) {
        // remove old character contribution
        hashVal = (hashVal - (s[i - k] - 'a' + 1) + c) % c;

        // divide by p → equivalent to multiplying by inverse mod c
        // but we can adjust like this:
        hashVal = (hashVal * binpow(p, c - 2)) % c; // Fermat inverse of p

        // add new character
        hashVal = (hashVal + (s[i] - 'a' + 1) * pk) % c;

        cout << hashVal << " ";
    }

    return 0;
}
