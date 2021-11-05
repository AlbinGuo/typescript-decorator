/**
 * 函数装饰器
 */

function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
  descriptor.writable = true;
  // descriptor.value = function () {
  //   return '====deeded====';
  // }

}

class Student {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  @getNameDecorator
  getName(): string {
    return this.name;
  }
}

const stu = new Student('常山赵子龙');
// stu.getName = function () {
//   return '===张三====';
// }
console.log("---", stu.getName());
;