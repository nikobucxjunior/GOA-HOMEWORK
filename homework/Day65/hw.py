def are_all_different(a, b, c):
    return a != b and a != c and b != c

print(are_all_different(1, 2, 3))  # True (all different)
print(are_all_different(1, 1, 3))  # False (not all different)
print(are_all_different(1, 2, 2))  # False (not all different)
print(are_all_different(1, 1, 1))  # False (not all different)