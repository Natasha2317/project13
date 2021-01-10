export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Иван', surname: 'Иванов', phone: '+7 (987) 654-32-10', type: 0 },
  { id: 2, name: 'Петр', surname: 'Петров', phone: '+7 (987) 654-32-11',type: 1 },
  { id: 3, name: 'Сидор', surname: 'Сидоров', phone: '+7 (987) 654-32-12',type: 2 },
  { id: 4, name: 'Василий', surname: 'Васильев', phone: '+7 (987) 654-32-13',type: 3 },
  { id: 5, name: 'Семён', surname: 'Семёнов', phone: '+7 (987) 654-32-14',type: 0 },
];
