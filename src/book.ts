export interface IBook {
    title : string
    author : string
}

export class Books {
    
    books: Array<IBook>;
    constructor(){ 
        this.books  = [] ;
        }
    equals(b1:IBook,b2:IBook) {
        return  b1!=null && b1!=undefined && b2!=null && b2!=undefined && typeof(b1)==="object" && typeof(b2)==="object"&&b1.author == b2.author && b1.title == b2.title ;
    }
    add(b:IBook,key?:number): number{
        if (b != null && b!= undefined && typeof(b)=== "object" && this.keyOf(b) == -1 ){
            var i = 0;
            if (key == undefined || key == null){
                i = this.books.length;
            }else{
                    i=key;
            }
            if(this.at(i) == null){
                this.books.splice(i,0,b);
            }
            return i;
        }else{
            return -1;
        }
    }
    keyOf(b:IBook): number{
        return this.books.indexOf(b);
    }
    
    remove(key:number):boolean{
        if (this.books.length > 0 && this.books[key]!=undefined && this.books[key]!=null){
            this.books.splice(key, 1);
            return true;
        }else{
            return false;
        }
    }
    
    size():number{
        return this.books.length;
    }
    
    at(key:number):IBook{
        return this.books[key];
    }
    
    all():IBook[]{
        return this.books;
    }
    
}



