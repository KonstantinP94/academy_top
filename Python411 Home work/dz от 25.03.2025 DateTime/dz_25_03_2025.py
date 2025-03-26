
from datetime import datetime, timedelta
# print(datetime.now())  # new Date() в js
# #                   Y     m (1-12) d  Hr  Min
# birthday = datetime(1986, 8,       6, 17, 45)  # часы и минуты - необязательно
# print('Прошло ', datetime.now() - birthday)
# # При вычитании из одной даты другой даты получается timedelta
# print(birthday + timedelta(10000))  # по умолчанию состоит из дней
# # Прибавить к дате дату нельзя! 
# # Что такое "прибавить месяц к 30-му января?"
# Зато можно прибавить timedelta. Он хранит разницу в днях, часах, минутах и секундах

# Можно получить отдельные части даты и времени
# print(birthday.year, birthday.month, birthday.day, birthday.hour, birthday.minute)

# Можно получить отдельные части timedelta
# td = datetime.now() - birthday
# print(td.days, td.seconds)

# как получить часы и мнуты?
# как получить полное количество секунд?


# Задача: посчитать, сколько дней осталось до вашего дня рождения.

# my_birth = datetime(1994, 12, 29)
# my_birthday_in_2025 = datetime(2025, 12, 29)
# td = my_birthday_in_2025 - datetime.now()
# # print(f"Осталось дней до дня рождения: {my_birthday_in_2025- datetime.now()}")
# print(td.days)

# data =  datetime.now() - my_birth
# print(f"ffff{data.days}")

# # А сколько часов?
# in_hour = my_birthday_in_2025 - datetime.now()
# print(f"Осталось часов до дня рождения: {in_hour.days * 24}")
# print(f"Осталось секунд до дня рождения: {in_hour.days * 86400}")


# print(birthday.strftime('%Y.%m.%d %H:%M'))
# exam = datetime.strptime(
#     '2025.09.25 19:30', '%Y.%m.%d %H:%M')




# Написать свой класс для хранения информации о человеке: фамилия, имя, отчество, дата рождения
# Написать свой класс для хранения информации об автомобиле: фирма, модель, год выпуска, объем двигателя, цвет
# Написать свой класс для хранения информации о единице одежды: тип, фирма, цвет

class Humen:
    second_name = "Поздняков" # поле
    first_name = "Константин"
    patronymic = "Александрович"
    birth_day = datetime(1994, 12, 29)
  
dt = Humen()
print(dt.birth_day, dt.second_name)

class Car:
    firm = "Audi"
    model = "A6"
    year_release = datetime(2005, 12, 12)
    engine_capacity = "2 литра"
    color = "Черный"

dt2 = Car()
print(dt2.firm, 
      dt2.model,
      dt2.year_release,
      dt2.engine_capacity,
      dt2.color
      )


class Clothes:
    type = "Рубашка"
    firm = "GJ"
    color = "Синяя"

dt3 = Clothes()
print(dt3.type, dt3.firm, dt3.color)



class DateTime:
    def init(self, year, month, day, hour, minute, second=0):
# инициализатор с параметрами
        self.year   = year
        self.month  = month
        self.day    = day
        self.hour   = hour
        self.minute = minute
        self.second = second

dt = DateTime(1994, 12, 29, 19, 45)
print(dt.year, dt.month, dt.day, dt.hour, dt.minute)