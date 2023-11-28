n = int(input())

x = 0

for _ in range(n):
    instr = input()

    if "++" in instr:
        x += 1
    else:
        x -= 1

print(x)
