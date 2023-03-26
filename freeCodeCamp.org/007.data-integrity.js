/*

   Data Integrity

   Data Integrity is about having the correct data in your database. When we are storing data we do not want to store
   incorrect data, repeating values or broken relationships between tables.

   The term relational comes from the mathematical concept of connection of sets and not relationship.

   3 main types of data integrity are:
    1. Entity integrity
    Entity is anything about which we store data. Data integrity among entities means having unique id for each user
    so that we can differentiate between 2 entities.

    2. Referential integrity
    This refers to having some connection with another tables which helps to get more details about the current tables
    content. For example - the comment table is a table which also has the userId which helps to know the details
    about the user who posted the comment.

    3. Domain integrity
    Domain means the acceptable value in the field in which we are storing the data. For example - for user name we
    allow the user to store the value just in string with some constraints on the number of characters. All domain
    integrity allows to store data in a data type. We can classify data as numbers, text or dates.
    Foreign keys allows us to connect tables. The child cant exist without the parent. Foreign key constraints help to
    see that if the user gets removed then remove all the tables associated with the parents foreign key.

 */