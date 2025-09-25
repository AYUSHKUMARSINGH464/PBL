#include <stdio.h>

int add()
{
    int a;
    scanf("%d", &a);
    int b;
    scanf("%d", &b);
    int c=a+b;
    return c;
}
int main()
{
    int d=add();
    printf("%d\n" , d);
    return 0;
}