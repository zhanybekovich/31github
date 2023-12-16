'''
«Раз дракон. Два дракон. Три дракон», — считала принцесса. У нее была бессонница, а считать барашков ей надоело еще в девять лет.

Впрочем, считать драконов просто так тоже было скучно, поэтому она развлекалась как могла. Этой ночью она представляла, что все посчитанные драконы явились сюда, чтобы ее украсть, а она отбивается от них, как может. Каждого k-ого дракона она била сковородкой по морде. Каждому l-ому — прищемляла хвост балконной дверью. Каждому m-ому — наступала на лапу острым каблучком. Наконец, каждому n-ому она грозила позвать мамочку, и он в ужасе ретировался.

Скольким воображаемым драконам успела нанести моральный или физический ущерб принцесса, если всего она насчитала d драконов?

Входные данные
Входные данные содержат целые числа k, l, m, n и d, каждое число в отдельной строке (1 ≤ k, l, m, n ≤ 10, 1 ≤ d ≤ 105).

Выходные данные
Выведите количество пострадавших драконов.

Примеры
входные данныеСкопировать
1
2
3
4
12
выходные данныеСкопировать
12
входные данныеСкопировать
2
3
4
5
24
выходные данныеСкопировать
17
Примечание
В первом примере каждый первый дракон был жестоко бит сковородкой. Некоторым доставалось также от дверей и каблучков, но даже сковородки хватало всем.

Во втором примере неповрежденными остались драконы 1, 7, 11, 13, 17, 19 и 23.
'''
k = int(input())
l = int(input())
m = int(input())
n = int(input())
d = int(input())

damaged_dragons = 0

for dragon in range(1, d + 1):
    if dragon % k == 0 or dragon % l == 0 or dragon % m == 0 or dragon % n == 0:
        damaged_dragons += 1

print(damaged_dragons)
