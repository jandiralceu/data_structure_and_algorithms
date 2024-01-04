from helpers.node import DoubleNode as Node

class DoublyLinkedList:
    def __init__(self) -> None:
        self.head = None
        self.tail = None
        
    def append(self, value) -> None:
        if self.head is None:
            self.head = Node(value)
            self.tail = self.head
            return
        
        self.tail.next = Node(value)
        self.tail.next.previous = self.tail
        self.tail = self.tail.next
        return
        
