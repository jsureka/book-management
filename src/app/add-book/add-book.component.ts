import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService:BookService) { }
  newBook = new Book();
  ngOnInit(): void {
  }

  addBook(){
    console.log(this.newBook);
    this.bookService.addBook(this.newBook);
  }
}
