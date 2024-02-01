def duplicate_number(arr: list[int]) -> int:
    current_sum = 0
    expected_sum = 0
    
    for num in arr:
        current_sum += num
        
    for i in range(len(arr) -1):
        expected_sum += i
        
    
    return current_sum - expected_sum


print(duplicate_number([0, 2, 3, 1, 4, 5, 3]))