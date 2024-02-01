from singly_linked_list import LinkedList, Node


def merge(list1: LinkedList, list2: LinkedList):
    merged = LinkedList()
    
    if list1 is None:
        return list2
    
    if list2 is None:
        return list1
    
    list1_elt = list1.head
    list2_elt = list2.head
    
    while list1_elt is not None or list2_elt is not None:
        if list1_elt is None:
            merged.append(list2_elt)
            list2_elt = list2_elt.next
        elif list2_elt is None:
            merged.append(list1_elt)
            list1_elt = list1_elt.next
        elif list1_elt.value <= list2_elt.value:
            merged.append(list1_elt)
            list1_elt = list1_elt.next
        else:
            merged.append(list2_elt)
            list2_elt = list2_elt.next
        
    
    return merged


class NestedLinkedList(LinkedList):
    def flatten(self):
        return self._flatten(self.head)
    
    def _flatten(self, node: Node):
        if node.next is None:
            return merge(node.value, None)
        
        return merge(node.value, self._flatten(node.next))