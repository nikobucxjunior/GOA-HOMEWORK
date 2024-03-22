i=4
while i<=20:
    if i%4==0:
        print(i, "4-ის ჯერადი")
        i+=4

sum = 0
x = 10
while x > 0:
  sum += x
  x -= 1

print(sum)

sum=0 
x=2 
while x<=100: 
   sum+=x
   x+=2 
print(sum) 

i = 0
while True:
  print(i)
  i = i + 1
  if i >= 5:
    print("Breaking")
    break

print("Finished")

i = 0
while i<5:
  i += 1
  if i==3:
    print("Skipping 3")
    continue
  print(i)