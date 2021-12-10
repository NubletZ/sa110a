#include <stdio.h>
#include <stdlib.h>

int z = 0;
#define test(cond) if (!(cond)) { z++; printf("error %d:", j); exit(1); }

//"(ERROR: at FILE=%s LINE=%d\n", __FILE__, __LINE__);

int main() {
    int i = 1, j = 2;
    test(i == 1);
    test(j == 1);
}