import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  constructor(private http: HttpClient) { }

  items: string[] = [];

  ngOnInit(): void {
    this.getPosts().subscribe({
      next: (response) => {
        // Assurez-vous que la réponse contient un tableau d'objets avec la propriété "name"
        this.items = response.map(item => item.title);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    });
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/titles`);
  }
}
