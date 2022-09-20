# greetings with First Name AND Last Name is a 7kyu coding problem found on Codewars
# Instructions can be found here: https://www.codewars.com/kata/54582f970a80d2ca46000f25

# I solved this problem using Ruby


#using classes is good practice!
class Person 
  def initialize(first, last)
      @firstName = first
      @lastName = last
  end 
 
  def greet
    return "Hello, #{@firstName} #{@lastName}!"
  end
end