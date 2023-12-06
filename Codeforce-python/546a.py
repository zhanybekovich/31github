k, n, w = map(int, input().split())

banan_price = 0

i = 1
while i <= w:
    banan_price += i * k
    i += 1

if banan_price > n:
    print(banan_price - n)
else:
    print(0)

