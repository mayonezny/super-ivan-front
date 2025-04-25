import { makeAutoObservable, runInAction } from 'mobx';

export interface TVElement {
  label: string
  description: string
}

class TVStore {
  mas: TVElement[] = [];
  actives: number[] = [];
  newElement: string = '';
  editIndex: number | null = null;

  constructor() {
    makeAutoObservable(this);
    this.loadFromLocalStorage();
  }

  loadFromLocalStorage() {
    const mas = localStorage.getItem('mas');
    const actives = localStorage.getItem('actives');

    runInAction(() => {
      this.mas = mas ? JSON.parse(mas) : [];
      this.actives = actives ? JSON.parse(actives) : [];
    });
  }

  saveToLocalStorage() {
    localStorage.setItem('mas', JSON.stringify(this.mas));
    localStorage.setItem('actives', JSON.stringify(this.actives));
  }

  setNewElement(value: string) {
    this.newElement = value;
  }

  addElement() {
    const [label, description] = this.newElement.split(':');
    if (label?.trim() && description?.trim()) {
      this.mas.push({ label: label.trim(), description: description.trim() });
      this.actives.push(1);
      this.newElement = '';
      this.saveToLocalStorage();
    }
  }

  removeElement(index: number) {
    this.actives[index] = 0;
    this.saveToLocalStorage();
  }

  resurrectElement(index: number) {
    this.actives[index] = 1;
    this.saveToLocalStorage();
  }

  editElement(index: number) {
    this.editIndex = index;
    const el = this.mas[index];
    this.newElement = `${el.label}:${el.description}`;
  }

  saveElement() {
    const [label, description] = this.newElement.split(':');
    if (label?.trim() && description?.trim() && this.editIndex !== null) {
      this.mas[this.editIndex] = {
        label: label.trim(),
        description: description.trim(),
      };
      this.editIndex = null;
      this.newElement = '';
      this.saveToLocalStorage();
    }
  }
}

export const tvStore = new TVStore();
