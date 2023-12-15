obrazes = "CHYCHKAN"
word = input().strip()

res = set()

for x, y in zip(obrazes, word):
    if x != y:
        res.add((x, y))

print(len(res))
