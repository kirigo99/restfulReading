# restfulReading
Open Classrooms project that tracks your reading process

The  Book  class must have the following fields:

    title  -  string  - title of the book
    author  -  string  - author of the book
    description  -  string  - description of the book
    pages  -  number  - total number of pages
    currentPage  -  number  - page the user is currently on (between 1 and  pages  )
    read  -  boolean  - whether the user has read the book or not (default:  false  )

The  Book  class must also have the following instance method:

    readBook(page)
        allows the user to say which page they are currently on
        if the  page  argument is less than one or more than the total number of pages of the book,  readBook  must return  0
        if the  page  argument is greater than or equal to 1 and less than the total number of pages of the book,  readBook  must set the instance's  currentPage  field to the value passed as an argument and return  1
        if the  page  argument is equal to the total number of pages of the book,  readBook  must set the instance's  currentPage  field to the value passed as an argument, set the instance's  read  field to  true  , and return  1
