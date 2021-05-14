import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output()
  onSearch = new EventEmitter();

  @Output()
  getEmployees = new EventEmitter();

  @Output()
  onSubmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.onSubmit.emit(addForm);
  }

  public onAddModal(): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#addEmployeeModal');
    container?.appendChild(button);
    button.click();
  }

  public searchEmployees(key: String): void {
    this.onSearch.emit(key);
  }
}
