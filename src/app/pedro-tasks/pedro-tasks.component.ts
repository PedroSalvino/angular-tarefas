import { Component, OnInit } from '@angular/core';
import { PedroTasksService } from '../pedro-tasks.service';

@Component({
  selector: 'app-pedro-tasks',
  templateUrl: './pedro-tasks.component.html',
  styleUrls: ['./pedro-tasks.component.css'],
})
export class PedroTasksComponent implements OnInit {
  constructor(public listaTasks: PedroTasksService) {}

  ngOnInit() {}
}
