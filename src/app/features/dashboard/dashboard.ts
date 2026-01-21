import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { UserService, User } from '../../core/services/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, MatCardModule, MatTableModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email'];
  users: User[] = [];

  stats = [
    { title: 'Users', value: 0 },
    { title: 'Orders', value: 350 },
    { title: 'Revenue', value: '$24K' }
  ];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;
        this.stats[0].value = data.length;
      },
      error: (err: unknown) => {
        console.error('Failed to load users', err);
      }
    });
  }
}