# Задание 1
# Есть три кортежа целых чисел необходимо найти
# элементы, которые есть во всех кортежах.

set1 = {2, 4, 6}
set2 = {8, 10, 6}
set3 = {14, 16, 6}

print(f"Пересечения во всех трех множествах: {set1 & set2 & set3}")


# Задание 2
# Есть три кортежа целых чисел необходимо найти
# элементы, которые уникальны для каждого списка.

set1 = {2, 4, 6}
set2 = {8, 10, 6}
set3 = {14, 16, 6}
# Объединяем все множества
all_sets = set1 | set2 | set3

unique_elements = set()
for num in all_sets:
    if (num in set1) + (num in set2) + (num in set3) == 1:
        unique_elements.add(num)

print(f"Уникальные элементы во всех трех множествах: {unique_elements}")




# Задание 3
# Есть три кортежа целых чисел необходимо найти элементы, которые есть в каждом из кортежей и находятся
# в каждом из кортежей на той же позиции.

set_all = ([2, 4, 6], [8, 10, 6], [14, 16, 6])
result = set()

for i, f in enumerate(set_all):
    print(i, f)
    empty = []
    
    for j in range(len(f)):
        num = f[j]
        is_common = True
        
        # Проверяем каждый элемент на одинаковых позициях
        for k in range(len(set_all)):
            if set_all[k][j] != num:
                is_common = False
                break
        
        # Если элемент одинаковый во всех кортежах - добавляем в результат
        if is_common:
            result.add(num)

print("Результат:", result)
