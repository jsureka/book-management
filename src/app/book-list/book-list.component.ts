import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }
  books = this.bookService.getBooks();

  ngOnInit(): void {
  }

  deleteBook(id: number): void{
      this.bookService.deleteBooks(id)
  }

  updateBook(givenBook: Book){
    this.bookService.setBookToBeUpdated(givenBook);
    this.router.navigate(['updateBook'])
  }




}
