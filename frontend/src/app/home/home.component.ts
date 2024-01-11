import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private http: HttpClient) { }

  items: string[] = [];

  ngOnInit(): void {
    this.getTitles().subscribe({
      next: (response) => {
        // Assurez-vous que la réponse contient un tableau d'objets avec la propriété "name"
        this.items = response.map(item => item.title);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    });
  }

  getTitles(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/titles`);
  }

}
