'''
Вася обожает спортивное программирование. Программировать он не умеет, но очень любит наблюдать за ходом разных соревнований. У Васи даже есть любимый участник, за которым он следит особенно пристально.

Однажды Вася решил собрать результаты всех выступлений своего любимого участника и посмотреть на рост его крутости. Для каждого соревнования с его участием он выписал одно неотрицательное число — количество баллов, набранных участником в соревновании. Баллы за соревнования Вася выписывал в том порядке, в котором соревнования проходили (разумеется, никакие два соревнования не проходили одновременно).

Вася считает выступление участника удивительным в двух случаях: если участник установит новый рекорд или анти-рекорд по количеству набранных баллов. Иными словами, удивительно, если участник набирает на соревновании строго больше баллов, чем на каждом из предыдущих соревнований. Также удивительно, если участник набирает на соревновании строго меньше баллов, чем на каждом из предыдущих соревнований. Первое выступление удивительным не считается.

Теперь Вася хочет посчитать, сколько всего было удивительных выступлений за всю карьеру участника. Но список набранных баллов получился длинный, а программировать Вася не умеет... Поэтому он просит Вас помочь ему.

Входные данные
В первой строке записано единственное целое число n (1 ≤ n ≤ 1000) — количество выступлений участника.

В следующей строке записано n целых неотрицательных чисел, разделенных пробелами — баллы, набранные участником, в хронологическом порядке. Все баллы не превосходят 10000.

Выходные данные
Выведите единственное число — количество удивительных выступлений за всю карьеру участника.

Примеры
входные данныеСкопировать
5
100 50 200 150 200
выходные данныеСкопировать
2
входные данныеСкопировать
10
4664 6496 5814 7010 5762 5736 6944 4850 3698 7242
выходные данныеСкопировать
4
Примечание
В первом примере удивительными являются выступления с номерами 2 и 3.

Во втором примере удивительными являются выступления с номерами 2, 4, 9 и 10.
'''
n, k = map(int, input().split())

x = 0
total_time = 0

while total_time + 5 * (x + 1) + k <= 240 and x < n:
    x += 1
    total_time += 5 * x

print(x)
