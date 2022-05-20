class BaseEntity {
  readonly id: number;
  readonly created: string;
  constructor() {
    this.id = Math.random();
    this.created = new Date().toLocaleDateString();
  }
}

class Course extends BaseEntity {
  constructor(public name: string) {
    super();
  }
}

let englishCourse = new Course('English');
console.log('id: ' + englishCourse.id);
console.log('created: ' + englishCourse.created);

function Base(ctr: Function) {
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date().toLocaleString('es-ES');
}
