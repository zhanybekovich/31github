# def count_3_palindromes(n):
#     count = 0

#     for i in range(100, n):
#         # Преобразуем число в строку для удобства работы с цифрами
#         number_str = str(i)

#         # Проверяем, является ли число 3-палиндромом
#         if number_str[0] == number_str[2]:
#             count += 1

#     return count


# # Ввод трехзначного числа
# input_number = int(input())

# # Подсчет и вывод количества 3-палиндромов меньше заданного числа
# result = count_3_palindromes(input_number)
# print(result)

# ============

def count_3_palindromes(n):
    count = 0

    for i in range(100, n):
        # Извлекаем цифры числа
        hundreds = i // 100
        ones = i % 10

        # Проверяем, является ли число 3-палиндромом
        if hundreds == ones:
            count += 1

    return count


# Ввод трехзначного числа
input_number = int(input())

# Подсчет и вывод количества 3-палиндромов меньше заданного числа
result = count_3_palindromes(input_number)
print(result)
