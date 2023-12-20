'''
В задаче речь пойдет о двух сёстрах — Алисе и Бетти. У вас есть n
 конфет. Вам хочется распределить все эти n
 конфет между сёстрами так, что:

Алиса получит a
 (a>0
) конфет;
Бетти получит b
 (b>0
) конфет;
каждая сестра получит некоторое целое количество конфет;
Алиса получит больше конфет, чем Бетти (то есть a>b
);
все конфеты будут отданы одной из двух сестёр (то есть a+b=n
).
Ваша задача — посчитать количество способов распределить n
 конфет между девочками так, как описано выше. Учтите, что конфеты неразличимы между собой.

Формально, найдите количество способов представить n
 как сумму n=a+b
, где a
 и b
 — положительные целые числа и a>b
.

Вам нужно ответить на t
 независимых наборов тестовых данных.

Входные данные
Первая строка теста содержит одно целое число t
 (1≤t≤104
) — количество наборов тестовых данных. Затем следуют t
 наборов тестовых данных.

Единственная строка набора содержит одно целое число n
 (1≤n≤2⋅109
) — количество конфет, которое у вас есть.

Выходные данные
Для каждого набора тестовых данных выведите ответ на него — количество способов распределить ровно n
 конфет между девочками так, как описано в условии задачи. Если не существует способа, удовлетворяющего всем условиям, выведите 0
.

Пример
входные данныеСкопировать
6
7
1
2
3
2000000000
763243547
выходные данныеСкопировать
3
0
0
1
999999999
381621773
Примечание
Для первого набора тестовых данных возможные 3
 способа распределения конфет — это:

a=6
, b=1
;
a=5
, b=2
;
'''


def count_ways_to_distribute_candies(n):
    ways = 0
    b = 1  # Начинаем с минимального значения для Бетти

    while b * 2 < n:
        a = n - b  # Вычисляем количество конфет для Алисы
        ways += 1   # Увеличиваем количество способов
        b += 1      # Увеличиваем количество конфет для Бетти

    return ways


# Чтение количества тестов
t = int(input())

for _ in range(t):
    # Чтение количества конфет для каждого теста
    n = int(input())

    # Вывод количества способов для текущего теста
    print(count_ways_to_distribute_candies(n))

# =====================================


def count_ways_to_distribute_candies(n):
    return n // 2 - (n + 1) % 2


# Чтение количества тестов
t = int(input())

for _ in range(t):
    # Чтение количества конфет для каждого теста
    n = int(input())

    # Вывод количества способов для текущего теста
    print(count_ways_to_distribute_candies(n))
