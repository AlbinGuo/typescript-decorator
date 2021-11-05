/**
 * 参数装饰器
 */
// 参数：1：原型， 2：方法名， 3：参数所在的位置
function paramDecorator(target: any, key: string, paramIndex: number) {
  console.log(target, key, paramIndex);

}

class Animal {
  getInfo(name: string, @paramDecorator age: number) {
    console.log(name, age);

  }
}
const animal = new Animal();
animal.getInfo('==犀牛==', 30);
