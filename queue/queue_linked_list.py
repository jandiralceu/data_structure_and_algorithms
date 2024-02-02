from typing import TypeVar, Generic
# from helpers import Node


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

T = TypeVar('T')

class Queue(Generic[T]):
    def __init__(self) -> None:
        self.head = None
        self.tail = None
        self.num_elements = 0
    
    
    def enqueue(self, value: T) -> None:
        new_node = Node(value=value)
        
        if self.head is None:
            self.head = new_node
            self.tail = self.head
        else:
            self.tail.next = new_node
            self.tail = self.tail.next
        
        self.num_elements += 1
    
    
    def dequeue(self) -> T:
        if self.is_empty():
            return None
        
        front = self.head.value
        self.head = self.head.next
        
        self.num_elements -= 1
        
        return front
    
    
    def size(self) -> int:
        return self.num_elements
    
    
    def is_empty(self) -> bool:
        return self.head is None
    

queue = Queue[int]()
queue.enqueue("Teste")
print(queue.num_elements)