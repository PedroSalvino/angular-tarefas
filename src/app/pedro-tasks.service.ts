import { Injectable } from '@angular/core';

interface Task {
  nome: string;
}

@Injectable()
export class PedroTasksService {
  listaTask: Array<Task> = [];

  constructor() {
    if (localStorage.getItem('tasks')) {
      this.listaTask = JSON.parse(localStorage.getItem('tasks'));
    } else {
      localStorage.setItem('tasks', JSON.stringify([]));
    }
  }

  adicionarTask(nome: string) {
    if (nome != '') {
      this.listaTask.push({
        nome: nome,
      });
      localStorage.setItem('tasks', JSON.stringify(this.listaTask));
    }
  }

  getTasks() {
    if (this.listaTask != null) {
      this.listaTask = JSON.parse(localStorage.getItem('tasks'));
    }
    return this.listaTask;
  }

  removerTask(index: number) {
    if (this.listaTask != null) {
      this.listaTask.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.listaTask));
    }
  }
}
