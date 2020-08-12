export class Book {
    constructor(title,author,description,pages,currentPage,read){
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(page){
        console.log (this.currentPage);
        if (page > this.pages || page < 1) {
            this.currentPage = 0 ;
        }if(page >= 1 && page < this.pages) {
            this.currentPage =page;
            console.log(1);
        }if(page === this.pages){
            this.currentPage = page;
            this.read = true;
            console.log(1);
        }
    }

}

export let books = [new Book("World Records","kirigo","UpClose",140,90,false),
                    new Book("je suis","Kirigo","The Mist",290,100,false),
                    new Book("Grcae","Kirigo","Francaise ",600,450,false)
                    
                ];
                