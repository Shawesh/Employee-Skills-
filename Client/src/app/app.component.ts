import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
          label: 'Employees List',
          icon: 'pi pi-fw pi-list', command: () => {}},
      {
          label: 'Create New',
          icon: 'pi pi-fw pi-plus'
      },
      {
          label: 'Data Admin',
          icon: 'pi pi-fw pi-cog',
          items: [
              {
                  label: 'Skills',
                  icon: 'pi pi-fw pi-pencil',
              },
              {
                label: 'Fields',
                icon: 'pi pi-fw pi-pencil',
            }
          ]
      }
  ];
}
}