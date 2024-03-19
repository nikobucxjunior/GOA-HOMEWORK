import random

def roll_dice():
    return random.randint(1, 6)

def main():
    print("Welcome to the game ROLLING THE DICE!")

    name = input("Enter your name: ")

    input(f"Hello, {name}! Press Enter to roll the dice")
    player_roll = roll_dice()
    print(f"{name}, you rolled {player_roll}!")

    input("Press Enter for the computer's turn")
    computer_roll = roll_dice()
    print(f"The computer rolled {computer_roll}!")

    if player_roll > computer_roll:
        print(f"{name} gets the point.")
    elif player_roll < computer_roll:
        print("Computer gets the point.")
    else:
        print("It's a tie!")
if __name__ == "__main__":
    main()