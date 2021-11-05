/**
 * 属性装饰器
 */
// 修改的是原型上的属性
function propertyDecorator(target: any, key: string): any {
  // 修改属性的描述器descriptor
  // const descriptor: PropertyDescriptor = {
  //   writable: true
  // }

  target[key] = '==香蕉==';
  // return descriptor;
}

// name是在实例上
class Fruit {
  @propertyDecorator
  name: string = '==苹果==';
}
const fruit = new Fruit();
console.log(fruit.name); // 打印的是实例上的属性
console.log((fruit as any).__proto__.name); // 打印的是原型上的属性
