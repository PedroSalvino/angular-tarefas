import { Component, OnInit } from '@angular/core';
import { PedroTasksService } from '../pedro-tasks.service';

@Component({
  selector: 'app-pedro-home',
  templateUrl: './pedro-home.component.html',
  styleUrls: ['./pedro-home.component.css'],
})
export class PedroHomeComponent implements OnInit {
  constructor(public listTasks: PedroTasksService) {}

  ngOnInit() {}
}
