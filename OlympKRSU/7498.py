# def calculate_P(A, B, C, D, n):
#     P = [0] * (n + 1)
#     P[1] = D

#     for i in range(2, n + 1):
#         P[i] = (i ^ A ^ (P[i - 1] >> B)) & C

#     return P


# def process_queries(P, queries):
#     result = []
#     for L, R in queries:
#         result.append(P[R] - P[L-1])
#     return result


# A, B, C, D = map(int, input().split())


# Q = int(input())


# L = list(map(int, input().split()))


# R = list(map(int, input().split()))


# n = max(max(L), max(R))
# P = calculate_P(A, B, C, D, n)


# for i in range(1, n + 1):
#     P[i] += P[i - 1]


# queries = list(zip(L, R))
# # result = process_queries(P, queries)

# 203ms	1809975kb
# print(" ".join(map(str, process_queries(P, queries))))

# =====================================

def calculate_P(A, B, C, D, n):
    P = (0 for _ in range(n + 1))
    P = list(P)
    P[1] = D

    for i in range(2, n + 1):
        P[i] = (i ^ A ^ (P[i - 1] >> B)) & C

    return P


def process_queries(P, queries):
    return (P[R] - P[L-1] for L, R in queries)


A, B, C, D = map(int, input().split())
Q = int(input())
L = list(map(int, input().split()))
R = list(map(int, input().split()))
n = max(max(L), max(R))
P = calculate_P(A, B, C, D, n)

for i in range(1, n + 1):
    P[i] += P[i - 1]

queries = zip(L, R)
result = process_queries(P, queries)

# 1248ms	103383kb
print(" ".join(map(str, result)))

=====================================
import itertools


def calculate_P(A, B, C, D, n):
    P = [0] * (n + 1)
    P[1] = D

    for i in range(2, n + 1):
        P[i] = (i ^ A ^ (P[i - 1] >> B)) & C

    for i in range(2, n + 1):
        P[i] += P[i - 1]

    return P


def process_queries(P, L, R):
    for l, r in itertools.zip_longest(L, R, fillvalue=0):
        yield P[r] - P[l - 1]


A, B, C, D = map(int, input().split())
Q = int(input())
L = list(map(int, input().split()))
R = list(map(int, input().split()))
n = max(max(L), max(R))
P = calculate_P(A, B, C, D, n)

result = process_queries(P, L, R)
# 202ms	888587kb
print(" ".join(map(str, result)))

# =============================
# print hello
