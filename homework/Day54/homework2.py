book1_name = "The Great Gatsby"
book1_price = 20

book2_name = "To Kill a Mockingbird"
book2_price = 18

book3_name = "1984"
book3_price = 15

book4_name = "Pride and Prejudice"
book4_price = 22

book5_name = "The Catcher in the Rye"
book5_price = 17

book6_name = "Lord of the Flies"
book6_price = 16

book7_name = "Animal Farm"
book7_price = 14

book8_name = "Brave New World"
book8_price = 19

book9_name = "The Hobbit"
book9_price = 25

book10_name = "Fahrenheit 451"
book10_price = 21

total_price_5_books = (
    book1_price + book2_price + book3_price + book4_price + book5_price
)
discounted_price_5_books = total_price_5_books * 0.9

total_price_10_books = (
    book6_price + book7_price + book8_price + book9_price + book10_price
)
discounted_price_10_books = total_price_10_books * 0.8

print("Total price for 5 books with 10% discount:", discounted_price_5_books)
print("Total price for 10 books with 20% discount:", discounted_price_10_books)