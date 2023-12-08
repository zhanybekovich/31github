'''
Мишка Лимак хочет стать самым большим медведем, ну, или хотя бы стать больше своего старшего брата Боба.

Сейчас вес Лимака равен a, а вес Боба равен b. Гарантируется, что вес Лимака меньше или равен весу Боба.

Лимак ест много, и его вес утраивается каждый год, а вес Боба удваивается каждый год.

Через сколько целых лет Лимак станет строго больше (т. е. будет весить строго больше) Боба?

Входные данные
В единственной строке находятся два целых числа a и b (1 ≤ a ≤ b ≤ 10) — веса Лимака и Боба соответственно.

Выходные данные
Выведите одно целое число — через сколько целых лет Лимак станет строго больше Боба.

Примеры
входные данныеСкопировать
4 7
выходные данныеСкопировать
2
'''

a, b = map(int, input().split())

years = 0
while a <= b:
    a *= 3  # Вес Лимака утраивается
    b *= 2  # Вес Боба удваивается
    years += 1

print(years)

