# Задания по файлам:
# 1. Открыть файл на запись. На 10: Задавать человеку 20-30 случайных
#    вопросов на вычитание (на 12 - на все 4 действия арифметики
#    с ЦЕЛЫМ делением!), сохранять результат.
#    В конце написать: "было задано 28 вопросов, 11 из них верно"
# 2. Открыть файл с вопросами на чтение. Задать человеку повторно вопросы,
#    на которые он не смог ответить. Присоединить к старому файлу новый результат.

import random

def generate():
    num1 = random.randint(1, 10)
    num2 = random.randint(1, 10)
    correct = num1 - num2
    return num1, num2, correct


f = open("answer_list.txt", "w", encoding="utf-8")

correct_answers = 0

for i in range(3):
    num1, num2, correct = generate()
    user_answer = input(f"{num1} - {num2} = ")
    
    if user_answer == str(correct):
        f.write(f'{num1} - {num2} = {user_answer} верно\n')
        correct_answers += 1
    else:
        f.write(f'{num1} - {num2} = {user_answer} неверно\n')

print(f"Первый раунд: задано {i + 1} вопросов, {correct_answers} из них верно\n")

f.close()

print("Начинаем второй раунд")

f = open("answer_list.txt", "r", encoding="utf-8")

for line in f:
    if "неверно" in line:
        f = open("answer_list.txt", "a", encoding="utf-8")
        correct_answers = 0
        for i in range(3):
            num1, num2, correct = generate()
            user_answer = input(f"{num1} - {num2} = ")
        
            if user_answer == str(correct):
                f.write(f'{num1} - {num2} = {user_answer} верно\n')
                correct_answers += 1
            else:
                f.write(f'{num1} - {num2} = {user_answer} неверно\n')
        break

print(f"Второй раунд: задано {i + 1} вопросов, {correct_answers} из них верно")
f.close()  

        





            





