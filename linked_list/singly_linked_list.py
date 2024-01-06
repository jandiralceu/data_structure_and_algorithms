from node import Node
class LinkedList:
    def __init__(self):
        self.head = None
    
    def __iter__(self):
        node = self.head
        while node:
            yield node.value
            node = node.next

    def __repr__(self):
        return str([v for v in self])

    def prepend(self, value) -> None:
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
    
    def search(self, value) -> (Node | None):
        node = self.head
        while node:
            if node.value == value:
                return node
            node = node.next
        return None
    
    def remove(self, value) -> None:
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
    
    def pop(self) -> (Node | None):
        if self.head is None:
            return None
        
        result = self.head.value
        self.head = self.head.next
        
        return result
    
    def insert(self, value, pos) -> None:
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
        

    def __len__(self):
        counter = 0
        node = self.head
        while node:
            counter += 1
            node = node.next
            
        return counter

    @staticmethod
    def reverse(linked_list):
        new_list = LinkedList()
        prev_node = None

        """
        A simple idea - Pick a node from the original linked list traversing form the beginning, and
        prepend it to the new linked list.
        We have to use a loop to iterate over the nodes of original linked list
        """
        # In this "for" loop, the "value" is just a variable whose value will be updated in each iteration
        for value in linked_list:
            # create a new node
            new_node = Node(value)
            # Make the new_node.next point to the
            # node created in previous iteration
            new_node.next = prev_node
            # This is the last statement of the loop
            # Mark the current new node as the "prev_node" for next iteration
            prev_node = new_node
        # Update the new_list.head to point to the final node that came out of the loop
        new_list.head = prev_node

        return new_list

    @staticmethod
    def iscircular(linked_list):
        """
        Determine wether the Linked List is circular or not

        Args:
        linked_list(obj): Linked List to be checked
        Returns:
        bool: Return True if the linked list is circular, return False otherwise
        """

        if linked_list.head is None:
            return False

        slow = linked_list.head
        fast = linked_list.head

        while fast and fast.next:
            # slow pointer moves one node
            slow = slow.next
            # fast pointer moves two nodes
            fast = fast.next.next

            if slow == fast:
                return True

        # If we get to a node where fast doesn't have a next node or doesn't exist itself,
        # the list has an end and isn't circular
        return False



