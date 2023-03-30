/*

    Designing many to many relationship

    It is difficult to design many to many relationship in database.

    The way to write relationship in sql are :
    One to One- 1 : 1
    One to Many- 1 : N
    Many to Many- M : N

    In many to many relationship we build an intermediate table which holds the many values from tables. ->
    example 1

    example 1
    one table                   intermediate table                  another table

    Class                       Class   -     Student               Student

    one ----------------->      many          many  <---------------------one

    Parent Class                Child Class                         Parent Class

 */