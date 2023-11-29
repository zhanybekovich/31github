def count_lucky_digits(n):
    count = 0
    while n > 0:
        digit = n % 10
        if digit == 4 or digit == 7:
            count += 1
        n //= 10
    return count

def is_almost_lucky(n):
    lucky_digit_count = count_lucky_digits(n)

    # Проверяем, является ли количество счастливых цифр счастливым числом
    if lucky_digit_count == 4 or lucky_digit_count == 7 or lucky_digit_count == 47 or lucky_digit_count == 74:
        return "YES"
    else:
        return "NO"

# Считываем входные данные
n = int(input())

# Выводим результат
print(is_almost_lucky(n))
