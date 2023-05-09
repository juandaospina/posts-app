import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  public url: string | null = null;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.url = this.route.url
  }

  ngOnDestroy(): void {
    this.url = null;
  }
}
