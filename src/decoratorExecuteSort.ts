/**
 * 装饰器的执行顺序
 */
import 'reflect-metadata';

function showData(target: typeof User) {
  for (let key in target.prototype) {
    console.log(key);

    const data = Reflect.getMetadata('data', target.prototype, key);
    console.log("===showdata===" + data);
  }
}

function setData(dataKey: string, msg: string) {
  return function (target: User, key: string) {
    console.log('====setData====');

    Reflect.defineMetadata(dataKey, msg, target, key);
  };
}

@showData
class User {
  @setData('data', 'age')
  getName() { }

  @setData('data', 'age')
  getAge() { }
}
