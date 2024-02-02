from dataclasses import dataclass, field
from typing import TypeVar, Generic, Optional

T = TypeVar('T')

@dataclass(kw_only=True)
class Node(Generic[T]):
    value: T
    next: Optional['Node'] = field(default=None, init=False)


class Queue(Generic[T]):
    def __init__(self) -> None:
        self.head = None
        self.tail = None
        self.num_elements = 0
    
    
    def enqueue(self, value: T) -> None:
        new_node = Node[T](value=value)
        
        if self.head is None:
            self.head = new_node
            self.tail = self.head
        else:
            self.tail.next = new_node
            self.tail = self.tail.next
        
        self.num_elements += 1
    
    
    def dequeue(self) -> T:
        if self.is_empty:
            return None
        
        front = self.head.value
        self.head = self.head.next
        
        self.num_elements -= 1
        
        return front
    
    @property
    def size(self) -> int:
        return self.num_elements
    
    
    @property
    def is_empty(self) -> bool:
        return self.head is None


queue = Queue[str]()
queue.enqueue("Hello")
queue.enqueue("World")
queue.enqueue("It's Jandir")

print(queue.size)