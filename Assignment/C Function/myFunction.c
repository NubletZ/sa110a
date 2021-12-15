#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdarg.h>
#include <malloc.h>
#include "myFunction.h"

#define test(cond, ...) \
  if (!(cond)) { \
     printf("Error: at FILE=%s LINE=%d\n", __FILE__, __LINE__); \
     printf("  Check:%s but ", #cond);\
     printf("\n"); \
  }

void nbzmemcp(void *dst, const void *src, size_t size){
    //convert dst and src into char
    char *chDst = (char *)dst;
    const char *chSrc = (const char *)src;

    if(chDst != NULL && chSrc != NULL){
        while (size != 0){
            *(chDst++) = *(chSrc++);
            size--;
        }
    }
}

char *convert(unsigned int num){
    static char Representation[]="0123456789";
    static char buffer[1];
    char *ptr;

    ptr = &buffer[0];
    *ptr = '\0';
    *ptr = Representation[num];
    return(ptr);
}

void nbzsnprintf(char *buffer, const size_t size, char *format, ... ){
    char *trv;
    unsigned int n;
    char *s;
    int tempN;
    int count = 0;
    int tempSize = size-1;
    
    char tempInt[50];
    int *tempD;
    
    va_list args;
    va_start (args, format);

    for(trv = format; *trv != '\0'; trv++){
        while( *trv != '%' && count < tempSize ){
            buffer[count] = *trv;
            trv++;
            count++;
        }
        trv++;

        if(count == tempSize){
            buffer[count] = '\0';
            break;
        }

        switch(*trv){
            case 'c' : 
                n = va_arg(args, int);
                buffer[count] = n;
                break;
            case 'd' :
                tempN = 0;
                n = va_arg(args, int);
                if(n<0){
                    n = -n;
                    buffer[count] = '-';
                    count++;
                }
                
                do{
                    tempD = (int*)(&tempInt[tempN]);
                    *tempD = *(convert(n%10));
                    n /= 10;
                    //printf("%d %c", tempN, tempInt[tempN]);
                    tempN++;
                } while (n > 0 && count != tempSize);
                tempN--;
                for (tempN; tempN >=0; tempN--){
                    buffer[count] = tempInt[tempN];
                    //printf("tempN = %d tmpStr = %c ;\n", tempN, tempStr[count]);
                    count++;
                    if(count == tempSize) break;
                }
                //printf("cvt = %s ", tempStr);
                break;
            case 's' :
                s = va_arg(args, char *);
                //printf(" s = %s", s);
                tempN = strlen(s);
                for (int i = 0; i < tempN; i++){
                    buffer[count] = *s++;
                    count++;
                    if(count == tempSize) break;
                }
                break;
        }
    }

    count = 0;
    va_end(args);
}

void nbzassert(char cond[100]){
    test(9 > 4);
    
}