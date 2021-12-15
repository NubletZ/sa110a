#include <stdio.h>
#include "myFunction.h"

void main(){
    char src[] = "testing1234";
    char dst[20];

    printf("-- test nbzmemcp() --\n");
    nbzmemcp(dst, src, sizeof(src));
    printf("source : %s\n", src);
    printf("copy result : %s\n", dst);

    printf("===============\n");

    printf("-- test nbzsnprintf --\n");
    char buffer[50];
    nbzsnprintf(buffer, 22, "testing %s %s %d", "test", "worm", 678);
    printf("buffer = %s", buffer);
}