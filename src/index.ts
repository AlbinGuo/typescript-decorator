/**
 * 类的装饰器 [ 类创建的时候执行，不是实例化的时候执行 ]
 * - 装饰器通过 @ 符号来使用
 * - 类装饰器接受的参数是构造函数
 * - tsconfig.json中开放出experimentalDecorators 和 emitDecoratorMetadata的注释
 * - 执行顺序：多个装饰器：从下到上，或从右向左执行
 */
function testDecorator(flag: boolean) {
  if (flag) {
    return (constructor: any) => {
      constructor.prototype.getName = () => {
        console.log('this is a test name')
      }
    }
  } else {
    return (constructor: any) => { }
  }

}


@testDecorator(false)
class Test {
}
const test = new Test();
(test as any).getName();
