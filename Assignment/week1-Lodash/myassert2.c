#include <stdio.h>
#include <stdlib.h>

#define test(cond, ...) \
 if (!(cond)) { \
    printf("Error: at FILE=%s LINE=%d\n", __FILE__, __LINE__); \
    printf("Check:%s but ", #cond); \
    printf(__VA_ARGS__); \
    exit(1); \
 }

//"(ERROR: at FILE=%s LINE=%d\n", __FILE__, __LINE__);

int main() {
    int i = 1, j = 2;
    test(i == 1, "i==%d\n", i);
    test(j == 1, "j==%d\n", j);
}