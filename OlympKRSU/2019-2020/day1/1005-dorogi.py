import heapq

# Заданные данные
distances = {
    'A': {'T': 102, 'J': 377, 'B': 193},
    'B': {'A': 193, 'O': 240, 'L': 179},
    'J': {'A': 377, 'O': 106},
    'T': {'A': 102},
    'O': {'J': 106, 'E': 240, 'B': 240},
    'L': {'B': 179, 'K': 216, 'N': 180},
    'K': {'L': 216},
    'N': {'L': 180},
    'E': {'O': 240}
}

# Скорость автомашины
car_speed = 60  # км/час

# Время перелета Ош-Бишкек или Бишкек-Ош в минутах
flight_time = 2 * 60

# Функция для нахождения кратчайшего пути


def dijkstra(start, end):
    heap = [(0, start, 0)]  # (текущее время, текущая вершина, время перелета)
    visited = set()

    while heap:
        (current_distance, current_vertex,
         flight_accumulated_time) = heapq.heappop(heap)

        if current_vertex in visited:
            continue

        visited.add(current_vertex)

        if current_vertex == end:
            return current_distance

        for neighbor, weight in distances[current_vertex].items():
            if (current_vertex == 'O' and neighbor == 'B') or (current_vertex == 'B' and neighbor == 'O'):
                # Учтем сокращение времени перелета
                heapq.heappush(
                    heap, (current_distance - flight_accumulated_time + flight_time, neighbor, flight_time))
            else:
                heapq.heappush(heap, (current_distance + weight /
                               car_speed * 60, neighbor, flight_accumulated_time))


# Ввод данных
start_point, end_point = input().split()

# Вычисление времени в минутах
travel_time = dijkstra(start_point, end_point)

# Вывод результата
print(int(travel_time))
