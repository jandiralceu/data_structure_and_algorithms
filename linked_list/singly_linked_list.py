from helpers.node import Node

class LinkedList:
    def __init__(self) -> None:
        self.head = None
    
    def prepend(self, value):
        if self.head is None:
            self.head = Node(value)
            return
        
        new_head = Node(value)
        new_head.next = self.head
        self.head = new_head
    
    def append(self, value) -> None:
        if self.head is None:
            self.head = Node(value)
            return
        
        node = self.head
        while node.next:
            node = node.next
        
        node.next = Node(value)
    
    def to_list(self) -> None:
        result = []
        node = self.head
        while node:
            result.append(node.value)
            node = node.next
        
        return result
    
    def search(self, value):
        node = self.head
        while node:
            if node.value == value:
                return node
            node = node.next
        return None
    
    def remove(self, value):
        if self.head is None:
            return
        
        if self.head.value == value:
            self.head = self.head.next
            return
        
        node = self.head
        while node.next:
            if node.next.value == value:
                node.next = node.next.next
                return
            node = node.next
        
        raise ValueError("Value not found in the list")
    
    def pop(self):
        if self.head is None:
            return None
        
        result = self.head.value
        self.head = self.head.next
        
        return result
    
    def insert(self, value, pos):
        if self.head is None:
            self.head = Node(value)
            return
            
        if pos == 0:
            self.prepend(value)
            return

        index = 0
        node = self.head
        while node.next and index <= pos:
            if (pos - 1) == index:
                new_node = Node(value)
                new_node.next = node.next
                node.next = new_node
                return

            index += 1
            node = node.next
        else:
            self.append(value)
        
            
    def size(self):
        counter = 0
        node = self.head
        while node:
            counter += 1
            node = node.next
            
        return counter
