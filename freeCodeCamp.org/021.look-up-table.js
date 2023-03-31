/*

    Look up table

    For example we want to create a table which has the user details and their card membership stated. So, the easiest
    way to create a table is having the user details and their membership type. But we do not want to repeat our
    membership all the time so we use a lookup table in which we create a unique id and the membership type.

    Using this lookup table we create the primary table and use just the membership id reference in our user table.
    This avoids repetition. Updating the table in the look up table leads to update in other tables as well.

    Advantages of look up table:
    Keys protect integrity.
    Keys are unique.
    They help to improve functionality.
    It makes updating faster as we do not have to manually go through each value.
    Allows for added complexity

 */