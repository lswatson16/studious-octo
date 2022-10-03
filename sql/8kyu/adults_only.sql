/*
Adults only is a 8kyu SQL coding problem found on Codewars
Instructions can be found here: https://www.codewars.com/kata/590a95eede09f87472000213

In your application, there is a section for adults only. 
You need to get a list of names and ages of users from the users table, who are 18 years old or older.

users table schema:
name
age

NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.

Sample Test (in Ruby):

results = run_sql

describe :users do
   it "should return 4 users" do
    expect(results.count).to eq 4
   end
end

*/


SELECT * FROM users WHERE age >= 18;

/* another solution */
SELECT name, age FROM users WHERE age >= 18;

/* another solution that orders the query results */
SELECT * FROM users WHERE age >= 18 ORDER BY age DESC;