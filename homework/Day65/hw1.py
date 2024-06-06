with open("your_file.txt", "r") as file:
    count = 0
    for line in file:
        for char in line:
            if char.isalpha() and char.isupper():
                count += 1

print("Number of capital letters:", count)