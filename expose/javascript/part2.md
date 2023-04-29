1. Line 12 would still work and it would print what ever the length of prices is which in this case with the given example is **3**. Because var is used to declare i and var is function scope. 
2. Line 13 would prine the result of 300*0.5 which is **150**. Again because discountedPrice is declared using var which has function scope.
3. Line 14. would print 150
4. The function would return [50,100,150]. Since in this example all discountedPrice is a whole number the finalPrice stays the same as discountedPrice as Math.round makes no impact. discouned.push adds to the end of discounted and returns the list at the end. The rounded value of discounting all the elements in the given list by the given discount.
5. Error. This would result in an error since i is declared using i which is block scope and line 12 is outside the block i is declared in 
6. Error. This would result in an error for the same reason as question i. discounedPrice is being called outside its scope which is inside the for loop
7. console logs or prints 150. The function just calculates the value and updates finalPrice. No errors.
8. Returns [50,100,150]. There is no error since discounted is declared in this function block so no scope issues. Since the for loop edits adds finalPrice to the end of discount each time and so the result is all the elements in he given prices discounted by the given discount. 
9. Error, because i is delcared using let in he for loop and let has block scope but in line 11 it is calling it outside the block scope that i is declared in
10. It would print 3. The length of the array (prices) that was passed in. Since there was no errors and no attempts to reassign the value of length.
11. Returns [50,100,150]. Although discounted is declared as const. There is no attempts to reassign the variable discount so it is find. discounted.push on line 8 is just changing the value of discounted but not reassigning. This works though might not be best practice.
12. Notations:
 
    A. student.name

    B. student["Grad Year"] 

    C. student.greeting()

    D. student["Favorite Teacher"].name

    E. student.courseLoda[0]

13. Arithmetic
   A. '32'. Since '3' is a string when using + it converts 2 to a string and then adds the strings

   B. 1 since it is using - and - is always arithmetic so it converst the string '3' to the number 3 then does the math

   C. 3 since 3 is a number javascript converts null to a number which null is 0

   D. '3null' since '3' is a string it converts null to a string which is 'null' thus concatenates the strings

   E. 4 true gets converted to the number 1 and then added to 3

   F. 0 since they are adding false gets converted to 0 and null gets converted to 0

   G. '3undefined' same as D. '3' is a string so undefined gets converted to a string which is 'undefined' as defined by javascript

   H. NaN since - means it has to evaluate mathematical expression '3' gets converted to 3 and undefined to NaN and since undefined is NaN the result is NaN too.

14. Comparison
   A. true, since 1 is a number it converts '2' to a number which is 2 and 2 > 1 is true

   B. false, since both sides are strings it compares strings lexicographically and '2' > '1' in lexicographical order. 

   C. true, because == is not strict equality so it converts '2' to 2 and 2 does equal 2.

   D. false because it is using strict equality === and 2 is type integer and '2' is type string and their types do not equal so they are not equal

   E. false because true gets converted to the number 1 and 1 does not equal 2

   F. true Boolean(2) evaluates to true since 2 is not a thing that Boolean considers as empty thus true is equal to true.

15. The difference between == and === is that when == the javascript automatic conversions gets applied and so 2 == '2' would be true but they are of different types. === ensures that the things or objects on either sides are of the same type and thus the javascript type conversions do not happen when === is used. 

17. The function called with the parameters modifyArray([1,2,3], doSomething) would return the result [2,4,6]. First [1,2,3] is the array that is passed in and the fucntion for each element in the array passes the element to the callback function which in this case is doSomething which returns the double of that number which then gets pushed to the back of the array called newArr which is what gets returned at the end of the function. 

19. The output of the code above is it first prints 1, then 4, then 3, then 2. The code gets executed line by line so console.log(1) gets executed first then the first set timeout but the console.log statement is in the callback so the console.log is not executed yet and so it goes to the next timeout and for the same reason then to the console.log(4) and prints out 4. Then console.log(3) is executed because the delay is shorter than the other setTimeout and so the callback is called then console.log(2) is executed a second after its setTimeout was executed. 