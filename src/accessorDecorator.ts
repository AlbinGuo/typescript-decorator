/**
 * 访问器装饰器
 */
function accessorDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(descriptor)
}

class Teacher {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
  @accessorDecorator
  set name(name: string) {
    this._name = name;
  }
}
const teacher = new Teacher('==张雪峰老师==');
// teacher.name = '==苍老师==';
console.log(teacher.name);
