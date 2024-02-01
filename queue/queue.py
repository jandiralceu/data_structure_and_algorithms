from dataclasses import dataclass, field, InitVar
from itertools import repeat


@dataclass(kw_only=True)
class Queue:
    initial_size: InitVar[int] = 10
    next_index: int = field(default=0, init=False)
    front_index: int = field(default=1, init=False)
    queue_size: int = field(default=0, init=False)
    arr: list[int] = field(init=False)
    
    
    def __post_init__(self, initial_size) -> None:
        self.arr = list(repeat(0, initial_size))
    
    
    def enqueue(self) -> None:
        pass