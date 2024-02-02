from dataclasses import dataclass, field, InitVar
from itertools import repeat


@dataclass(kw_only=True)
class Queue:
    initial_size: InitVar[int] = 10
    next_index: int = field(default=0, init=False)
    front_index: int = field(default=-1, init=False)
    queue_size: int = field(default=0, init=False)
    arr: list[int] = field(init=False)
    
    
    def __post_init__(self, initial_size) -> None:
        self.arr = list(repeat(0, initial_size))
    
    
    def enqueue(self, value) -> None:
        if self.queue_size == len(self.arr):
            self._handle_queue_capacity_full()
        
        self.arr[self.next_index] = value
        self.queue_size += 1
        self.next_index = (self.next_index + 1) % len(self.arr)
        
        if self.front_index == -1:
            self.front_index = 0
    
    
    def dequeue(self) -> None:
        if self.is_empty:
            self.front_index = -1
            self.next_index = 0
            return None
        
        value = self.arr[self.front_index]
        self.front_index = (self.front_index + 1) % len(self.arr)
        self.queue_size -= 1
        
        return value
    
    
    def _handle_queue_capacity_full(self) -> None:
        old_arr = self.arr
        self.arr = [0 for _ in range(2 * len(old_arr))]
        
        index = 0
        
        # copy all elements from front of queue (front-index) until end
        for i in range(self.front_index, len(old_arr)):
            self.arr[index] = old_arr[i]
            index += 1
    
        # case: when front-index is ahead of next index
        for i in range(0, self.front_index):
            self.arr[index] = old_arr[i]
            index += 1
        
        # reset pointers
        self.front_index = 0
        self.next_index = index
        
        
    @property
    def size(self) -> int:
        return self.queue_size
    
    
    @property
    def is_empty(self) -> bool:
        return self.size == 0
    
    
    @property
    def front(self):
        if self.is_empty:
            return None
        
        return self.arr[self.front_index]
    