# Exercise write my own C memcp() and snprintf()
## nbzmemcp()
### Function header :
```C
void nbzmemcp(void *dst, const void *src, size_t size);
```

### Code :
```C
void nbzmemcp(void *dst, const void *src, size_t size){
    //convert dst and src into char
    char *chDst = (char *)dst;
    const char *chSrc = (const char *)src;

    if(chDst != NULL && chSrc != NULL){
        //start to copy source into destination
        while (size != 0){
            *(chDst++) = *(chSrc++);
            size--;
        }
    }
}
```

From the above code nbzmemcp() receive a void pointer where `void *dst` point to destination array while `void *src` point to source array that you want to copy. It could be an array of integer, characters, float, etc hence we use void in header. Next we need to convert the pointer into char pointer by defining new char pointer `char *chDst` and `const char *chSrc`, we use const for `void *src` and `char *chSrc` to avoid it's value from changing. Then we copy each character from source into destination one by one up until `size` times.

### Test function :
```C
#include <stdio.h>
#include "myFunction.h"

void main(){
    char src[] = "testing1234";
    char dst[20];

    printf("-- test nbzmemcp() --\n");
    nbzmemcp(dst, src, sizeof(src));
    printf("source : %s\n", src);
    printf("copy result : %s\n", dst);
}
```
### Output :
```
-- test nbzmemcp() --
source : testing1234
copy result : testing1234
```

## nbzsnprintf()
### Function header :
```C
void nbzsnprintf(char *buffer, const size_t size, char *format, ... );
```

### Code :
```C
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
                tempD = (int*)(&tempInt[tempN]);
                *tempD = '\0';
                tempN++;
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
```

For nbzsnprintf() I took reference from printf function written in [Write Your Own Printf Function In C - www.firmcodes.com](http://www.firmcodes.com/write-printf-function-c/). I do some modification so instead of printing out the character from format, I write the character into buffer. There is also a helper function named `convert()` that I used to convert integer into character. First because user can add several variable after the format, so I use va_list to get those arguments. After that my program will enter loop until it meets `\0` the end of format string. If the character in format is not `%` and total chars in buffer have not exceed the `size-1` yet then it will execute :
```C
while( *trv != '%' && count < tempSize ){
    buffer[count] = *trv;
    trv++;
    count++;
}
```
I set the max size into size-1 because I will add `\0` at the end of the array.
```C
if(count == tempSize){
            buffer[count] = '\0';
            break;
}
```
Next if my program read any `%` it means that user will include some variable inside the string, so there are several cases in our program :
1. if it's `%c` then it will write the character argument into buffer.
```C
case 'c' : 
    n = va_arg(args, int); //get the argument value
    buffer[count] = n;
    break;
```

2. if it's `%d` then first it will identify whether the integer argument is smaller than 0, if it is smaller, then it will input `-` negative sign into buffer. Next it will convert the value and put it into tempD, why put it into tempD? because after converting, the integer value's order will be reversed (e.x integer 678 after converting would be 876) so I put it into temp array and after that put it into buffer in correct order.
```C
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
        tempN++;
    } while (n > 0 && count != tempSize);
    tempN--;

    for (tempN; tempN >=0; tempN--){
        buffer[count] = tempInt[tempN];[count]);
        count++;
        if(count == tempSize) break;
    }
    break;
```

3. If it's `%s` then it will start to read the string in arguments and put it into buffer. During the loop, if the buffer already written for `size` times, the process will break.
```C
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
```

But this is just the simple implementation of snprintf(). There is no any function to prevent error in this program, for example if user input `size` bigger than buffer size, there will be overflow.

### Test Function :
```C
#include <stdio.h>
#include "myFunction.h"

void main(){
    printf("-- test nbzsnprintf --\n");
    char buffer[50];
    nbzsnprintf(buffer, 22, "testing %s %s %d", "test", "worm", 678);
    printf("buffer = %s", buffer);
}
```

### Output :
```
-- test nbzsnprintf --
buffer = testing test worm 678
```

For the full program please refer to `myFunction.c`. I use `main.c` to show the result. If you want to try the program by yourself you can clone this project, type `gcc myFunction.c main.c -o main` to build it and `./main` to execute the program.

That's my program for `memcp()` and `snprintf()`, please correct me if I'm wrong. I'm still learning :)