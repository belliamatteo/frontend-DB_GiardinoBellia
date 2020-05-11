import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendDB';
  results: string[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://4200-a8267d57-2988-4c4e-beec-ee0ab5757985.ws-eu01.gitpod.io/').subscribe(data => {
      this.results = data['results'];
    });
  }
}
