# (a*x + b) * x = c

a, b, c = map(int, input().split())

x = -c

while x <= c:
    if (a * x + b) * x == c:
        print(x)
        break
    x += 1
else:
    print(0)
