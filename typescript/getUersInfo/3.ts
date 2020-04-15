interface IUser {
  name: string;
  age: number;
}
const getUserInfo = (user:IUser): string => {
  // if (true) {
  //   return 123 //二义性
  // }
  return `name: ${user.name}, age: ${user.age}`
}
console.log(getUserInfo({name: '乌布雷', age:22}))