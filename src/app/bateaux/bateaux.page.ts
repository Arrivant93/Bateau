import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  bateaux: any[] = [];

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('assets/data/bateaux.json').subscribe((data) => {
      this.bateaux = data;
    });
  }

  goToDetail(id: number) {
    this.router.navigate(['/bateaux', id]);
  }
}
