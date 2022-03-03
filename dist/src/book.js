"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
class Books {
    constructor() {
        this.books = [];
    }
    equals(b1, b2) {
        return b1 != null && b1 != undefined && b2 != null && b2 != undefined && typeof (b1) === "object" && typeof (b2) === "object" && b1.author == b2.author && b1.title == b2.title;
    }
    add(b, key) {
        if (b != null && b != undefined && typeof (b) === "object" && this.keyOf(b) == -1) {
            var i = 0;
            if (key == undefined || key == null) {
                i = this.books.length;
            }
            else {
                i = key;
            }
            if (this.at(i) == null) {
                this.books.splice(i, 0, b);
            }
            return i;
        }
        else {
            return -1;
        }
    }
    keyOf(b) {
        return this.books.indexOf(b);
    }
    remove(key) {
        if (this.books.length > 0 && this.books[key] != undefined && this.books[key] != null) {
            this.books.splice(key, 1);
            return true;
        }
        else {
            return false;
        }
    }
    size() {
        return this.books.length;
    }
    at(key) {
        return this.books[key];
    }
    all() {
        return this.books;
    }
}
exports.Books = Books;
//# sourceMappingURL=book.js.map