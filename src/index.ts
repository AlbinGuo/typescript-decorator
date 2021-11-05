/**
 * 类的装饰器 [ 类创建的时候执行，不是实例化的时候执行 ]
 * - 装饰器通过 @ 符号来使用
 * - 类装饰器接受的参数是构造函数
 * - tsconfig.json中开放出experimentalDecorators 和 emitDecoratorMetadata的注释
 * - 执行顺序：多个装饰器：从下到上，或从右向左执行
 */
function testDecorator() {
  return function <T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
      name = 'guonan====';
      getName() {
        return this.name;
      }
    };
  }
}



const Test = testDecorator()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
)

const test = new Test('===guoguo==');
console.log(test.getName())
