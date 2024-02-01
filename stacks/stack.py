from helpers import Node


class Stack:
    def __init__(self) -> None:
        self.head = None
        self.num_elements = 0
    
    
    def push(self, data) -> None:
        new_node = Node(data)
        
        if self.head is None:
            self.head = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        
        
        self.num_elements += 1
    
    
    def pop(self) -> None:
        if self.head is None:
            self.num_elements = 0
            return None
        
        current_value = self.head.value
        self.head = self.head.next
        self.num_elements -= 1
        
        return current_value
        
    
    def size(self) -> int:
        return self.num_elements
    
    
    def is_empty(self) -> bool:
        return self.num_elements == 0