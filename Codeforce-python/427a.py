'''
Недавно в вашем городе открылось отделение полиции. Сейчас идет набор кадров для работы в новом отделении. А тем временем, преступления все совершаются в городе.

Достоверно известно, что один полицейский может расследовать только одно преступление за всю свою жизнь. Если преступление произошло в тот момент, когда в отделении полиции не было ни одного незанятого преступлениями полицейского, то оно так и останется навсегда нераскрытым.

Вам заданы события в хронологическом порядке. Каждое событие — это: либо совершение преступления, либо прием на работу нового полицейского. Какое минимальное количество преступлений в любом случае останутся нераскрытыми?

Входные данные
В первой строке записано целое число n (1 ≤ n ≤ 105) — количество событий. В следующей строке записано n целых чисел, описывающих события, через пробел.

Если число равняется -1, значит, произошло одно преступление. В противном случае, число будет положительным (не больше 10) и будет равняться количеству полицейских, нанятых в этот момент. События заданы в хронологическом порядке.

Выходные данные
Выведите единственное целое число — количество нерасследованных преступлений.

Примеры
входные данныеСкопировать
3
-1 -1 1
выходные данныеСкопировать
2
входные данныеСкопировать
8
1 -1 1 -1 -1 1 1 1
выходные данныеСкопировать
1
входные данныеСкопировать
11
-1 -1 2 -1 -1 -1 -1 -1 -1 -1 -1
выходные данныеСкопировать
8
Примечание
Рассмотрим второй тестовый пример:

Сначала на работу нанимают одного человека.
Далее происходит преступление, дело отдают только что нанятому.
Затем на работу нанимают еще одного человека.
Происходит преступление, дело отдают последнему нанятому.
Происходит преступление, и сейчас нет незанятых полицейских, поэтому преступление останется нераскрытым.
Нанимают еще одного полицейского.
Нанимают еще одного полицейского.
Нанимают еще одного полицейского.
В итоге одно преступление в любом случае останется нераскрытым. Остальные два могут раскрыть.

'''


def count_unsolved_crimes(events):
    unsolved_crimes = 0
    police_count = 0

    for event in events:
        if event == -1:
            if police_count == 0:
                unsolved_crimes += 1
            else:
                police_count -= 1
        else:
            police_count += event

    return unsolved_crimes


# Чтение входных данных
n = int(input())
events = list(map(int, input().split()))

# Вызов функции и вывод результата
result = count_unsolved_crimes(events)
print(result)