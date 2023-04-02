/*

    Foreign Keys Constraints

    Foreign Keys Constraints make sure that if the parent updates then the children are also going to update or cause an
    error. Foreign Keys Constraints helps to protect our database.

    Foreign Keys Constraints refers to the parent. ONDELETE and ONUPDATE are sql queries we can use to update or
    change the child table.
    ONDELETE and ONUPDATE are available on the parent table.
    For ONDELETE and ONUPDATE we can give either of the 3 options RESTRICT(No Action), CASCADE and SET NULL which refers
    to what happens to the child.

    When we update or delete the parent we want the child table to also reflect the changes.

    RESTRICT throws an error.
    ONDELETE - RESTRICT throws an error when we have deleted the parent. ONUPDATE - RESTRICT does not let us make changes
    in the primary keys used as a foreign key in another table.

    CASCADE will let us do whatever we do to the parent.
    ONDELETE - CASCADE deletes the child if we have deleted the parent. For example if we delete the user then all the
    comments by the user will also be deleted.
    ONUPDATE - CASCADE, If we change the primary key then the foreign key also changes in the child table.

    ONDELETE - SET NULL, when the parent table is deleted the foreign key referencing the parent table will be
    set to null rather than being deleted or throwing an error. ONUPDATE - SET NULL, if we change the primary key then
    the foreign key in another table will be set to null.

    If we have set the children to Not Null and if any changes in the parent table lead to have a null property on the
    child table then it can throw an error. It is not a good practise to set null on foreign keys.

 */