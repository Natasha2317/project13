import { Component } from '@angular/core';
import { MyWorker, MyWorkersDatabase, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;
  edit: boolean = false;

  workerUser = {
    id: this.workers[0].id,
    name: this.workers[0].name,
    surname: this.workers[0].surname,
    phone: this.workers[0].phone,
    type: this.workers[0].type
  };

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  onAddWorker(worker) {
    let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    this.workers.push(worker);
  }

  onEditById(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    this.workerUser = {
      id: this.workers[index].id,
      name: this.workers[index].name,
      surname: this.workers[index].surname,
      phone: this.workers[index].phone,
      type: this.workers[index].type
    }
    this.edit = true;
  }

  onEditWorker(worker) {
    this.edit = false;
    let index = this.workers.findIndex((workerEd) => workerEd.id === worker.id);
    this.workers[index].name = worker.name;
    this.workers[index].surname = worker.surname;
    this.workers[index].phone = worker.phone;
    this.workers[index].type = worker.type;
  }

  onCancelPopup() {
    this.edit = false;
  }
}
