from turtle import *


#we want to paint a house 


#step 1: draw a square
width(5)
color("yellow")


forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)      
        
 #end of square       
        
 #drawing a door       
        
forward(70)
color("black")
left(90)
forward(100)
right(90)
forward(60)
right(90)
forward(100)

penup()
goto(200, 200)
pendown()

color("green")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

# making windows for house 


color("blue")
left(30)
forward(35)
left(90)
forward(59)
right(90)
forward(59)
right(90)
forward(59)
right(90)
forward (59)

penup()
goto(200, 200)
pendown()

left(180)
forward(35)
right(90)
forward(59)
left(90)
forward(59)
left(90)
forward(59)
left(90)
forward(59)
 
forward(35)
color("yellow")
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)


exitonclick()