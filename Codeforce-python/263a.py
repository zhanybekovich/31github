# Считываем входные данные
matrix = [list(map(int, input().split())) for _ in range(5)]

# Находим текущие позиции единицы
row, col = 0, 0
for i in range(5):
    for j in range(5):
        if matrix[i][j] == 1:
            row, col = i, j

# Вычисляем минимальное количество ходов
moves = abs(row - 2) + abs(col - 2)

# Выводим результат
print(moves)
