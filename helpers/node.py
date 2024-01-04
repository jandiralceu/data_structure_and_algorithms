class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class DoubleNode:
    def __init__(self, value) -> None:
        self.value = value
        self.next = None
        self.previous = None