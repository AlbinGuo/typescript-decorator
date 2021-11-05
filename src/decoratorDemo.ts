/**
 * 装饰器使用：例子
 */
const userInfo: any = undefined;

// 异常装饰器
function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor): any {
    const fn = descriptor.value;
    descriptor.value = () => {
      try {
        fn();
      } catch (error) {
        console.log(msg);

      }
    }
  }

}
class User {
  @catchError('userinfo的name不存在')
  getUserName() {
    return userInfo.name;
  }
  @catchError('userinfo的age不存在')
  getUserAge() {
    return userInfo.age;
  }
}
const user = new User();
user.getUserName();
user.getUserAge();