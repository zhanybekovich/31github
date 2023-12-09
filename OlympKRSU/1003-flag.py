d = set()
p = 'CHYCHKAN'
s = input()

for x, y in zip(p, s):
    if x != y:
        d.add( (x,y) )
print( len(d) )
