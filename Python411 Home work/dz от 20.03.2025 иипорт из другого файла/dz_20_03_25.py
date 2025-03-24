# 1. В файле сохранены фамилии тех, кто был на субботнике,
#    через запятую. Например: Иванов, Петров, Сидоров
#    Пользователь вводит свою фамилию. Компьютер должен ответить
#    "был" или "нет"

# 2. Записать новый файл, в котором фамилии будут каждая на новой строке

# 3. Решить предыдущую задачу, прочитав все фамилии в список,
#    а затем записать в файл без использования цикла


from fam_list import list_familiya
attempt = 5
f_new = open("fam_new_list.txt", "w", encoding="utf-8")

while attempt != 0:
    print(f"Осталось попыток {attempt}")
    user = input("Введите фамилию: ")

    if user in list_familiya:
        f_new.write(f"{user} был \n")
        attempt -= 1
    else:
        f_new.write(f"{user} нет\n")
        attempt -= 1


#3.

text = '\n'.join(list_familiya)

with open('file.txt', 'w', encoding='utf-8') as f:
    f.write(text)