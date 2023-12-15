def flag(x):
    if 2 <= x <= 100:
        if x <= 50:
            a = x/3
            b = x*5
            if int(a) != a:
                print(int(b*a), int(round((b*a-int(b*a))*3, 1)), 3)
            else:
                print(int(a*b))
        else:
            a = x/5
            b = x*3
            if int(a) != a:
                print(int(b*a), int(round((b*a-int(b*a))*5, 1)), 5)
            else:
                print(x*x//5*3)


k = int(input())
flag(k)
