import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  constructor( private bookService:BookService, private router:Router) { 
    
  }
  givenBook = this.bookService.getBookToBeUpdated();
  ngOnInit(): void {
  }
  updateBook(){
    console.log(this.givenBook);
    this.router.navigate(['books'])

  }

}
