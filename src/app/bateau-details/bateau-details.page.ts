import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bateau-details',
  templateUrl: './bateau-details.page.html',
  styleUrls: ['./bateau-details.page.scss'],
})
export class BateauDetailsPage implements OnInit {
  bateau: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any[]>('assets/data/bateaux.json').subscribe((bateaux) => {
      this.bateau = bateaux.find(b => b.id == id);
    });
  }
}
