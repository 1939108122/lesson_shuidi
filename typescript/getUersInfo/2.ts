const getUserInfo3 = function(user :{name: string, age:number}) {
  return `name: ${user.name}, age: ${user.age}`
}
console.log(getUserInfo3({name: "刘子民", age: 18}))