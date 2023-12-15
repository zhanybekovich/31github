'''
Координаты вершин клеток - целые числа. Разрешается движение только по диагоналям клеток.
По данным координатам точки найти длину кратчайшего пути от начала координат до этой точки
с округлением до целого числа. Если такой путь не существует, вывести 0.
Формат входных данных
Два целых числа, −19 6 X, Y 6 19,(X, Y ) 6= (0, 0).
Формат выходных данных
Неотрицательное целое число.
Примеры

стандартный ввод
4 0

стандартный вывод
6

стандартный ввод
-3 4

стандартный вывод
0

'''

import math

def get_diag_len( x, y ):
    if (x - y) % 2:
        return 0
    else:
        return round( max( abs(x), abs(y) ) * math.sqrt(2) )

x, y = map(int, input().split())

print(get_diag_len(x, y))
