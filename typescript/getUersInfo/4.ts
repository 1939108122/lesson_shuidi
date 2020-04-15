type IUserInfoFunc = (user: IUser) => string;

interface  IUser {
  name: string,
  age: number
}

// 
const getUserInfos:IUserInfoFunc = (user) => {
  return `name: ${user.name}, age: ${user.age}`;
}
console.log(getUserInfos({name: '库兹马', age:24}))