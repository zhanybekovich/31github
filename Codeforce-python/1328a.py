'''
Вам даны два целых положительных числа a
 и b
. За один ход вы можете увеличить a
 на 1
 (заменить a
 на a+1
). Ваша задача — найти минимальное количество ходов, которое необходимо сделать, чтобы получить значение a
, которое делится на b
 без остатка. Возможно, вам придётся сделать 0
 ходов, так как a
 уже делится на b
.

Вам нужно ответить на t
 независимых наборов входных данных.

Входные данные
Первая строка теста содержит одно целое число t
 (1≤t≤104
) — количество наборов входных данных. Затем следуют t
 наборов входных данных. Единственная строка каждого набора содержит два целых числа a
 и b
 (1≤a,b≤109
).

Выходные данные
Для каждого набора входных данных выведите ответ — минимальное количество ходов, которое нужно сделать, чтобы получить значение a
, которое без остатка делилось бы на b
.

Пример
входные данныеСкопировать
5
10 4
13 9
100 13
123 456
92 46
выходные данныеСкопировать
2
5
4
333
0
'''

'''
Использованная формула основана на том, что если a делится на b без остатка, то a % b равно 0. В противном случае, разница между b и a % b дает остаток, который нужно прибавить к a, чтобы сделать его кратным b.

Формула: min_moves = b - a % b

Если a % b равно 0, то min_moves будет равно 0, иначе это будет остаток от деления, который нужно добавить к a.
'''

t = int(input())

for _ in range(t):
    a, b = map(int, input().split())
    if a % b == 0:
        print(0)
    else:
        print(b - a % b)
