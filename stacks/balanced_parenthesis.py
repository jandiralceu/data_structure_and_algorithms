# This Python function, equation_checker, checks whether the parentheses in a given mathematical equation are balanced or not. Balanced parentheses mean that for every opening parenthesis "(" there is a corresponding closing parenthesis ")" in the correct order.

# Here's how the algorithm works:

# The function takes a string equation as input.

# It initializes an empty stack using a Stack object (presumably defined elsewhere in the code; not provided in your snippet).

# It iterates through each character in the input equation.

# If the character is an opening parenthesis "(", it is pushed onto the stack.
# If the character is a closing parenthesis ")", it checks if there is a matching opening parenthesis at the top of the stack. If yes, it pops the opening parenthesis from the stack. If there is no matching opening parenthesis, the function returns False, indicating that the parentheses are not balanced.
# After processing all characters in the equation, it checks if there are any remaining items in the stack. If the stack is empty, it means all opening parentheses have been matched with closing parentheses, and the function returns True (indicating that the parentheses are balanced). Otherwise, it returns False.

# Here's a brief explanation of the stack operations:

# stack.push(char): Adds the character to the top of the stack.
# stack.pop(): Removes and returns the item from the top of the stack. If the stack is empty, it returns None.
# stack.size(): Returns the current size of the stack.
# In summary, the function uses a stack to keep track of opening parentheses and ensures that each closing parenthesis has a corresponding opening parenthesis. If the stack is empty at the end of the iteration, the parentheses are considered balanced.
class Stack:
    def __init__(self):
        self.items = []

    def size(self):
        return len(self.items)

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if self.size()==0:
            return None
        else:
            return self.items.pop()


def equation_checker(equation):
    """
    Check equation for balanced parentheses

    Args:
       equation(string): String form of equation
    Returns:
       bool: Return if parentheses are balanced or not
    """
    
    stack = Stack()

    for char in equation:
        if char == "(":
            stack.push(char)
        elif char == ")":
            if stack.pop() == None:
                return False

    if stack.size() == 0:
        return True
    else:
        return False


print ("Pass" if (equation_checker('((3^2 + 8)*(5/2))/(2+6)')) else "Fail")
print ("Pass" if not (equation_checker('((3^2 + 8)*(5/2))/(2+6))')) else "Fail")