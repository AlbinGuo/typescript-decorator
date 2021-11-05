/**
 * 类的装饰器 [ 类创建的时候执行，不是实例化的时候执行 ]
 * - 装饰器通过 @ 符号来使用
 * - 类装饰器接受的参数是构造函数
 * - tsconfig.json中开放出experimentalDecorators 和 emitDecoratorMetadata的注释
 * - 执行顺序：多个装饰器：从下到上，或从右向左执行
 */
function testDecorator(constructor: any) {
  constructor.prototype.getName = () => {
    console.log('=====decorator000===')
  }
  console.log('=====decorator000===')
}

function testDecorator1(constructor: any) {
  console.log('====decorator111===')
}

@testDecorator
@testDecorator1
class Test {
}
const test = new Test();
// (test as any).getName();
