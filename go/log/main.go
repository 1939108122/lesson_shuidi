package main

import (
	// "log"
	"fmt"
	"log"
)

// struct 结构体 关键字 强类型
type User struct {
	Name string
	Age  int
}
type Person struct {
	Name string
	Age  int
}

func main() {
	u := User{
		Name: "aa",
		Age:  18,
	}
	log.Printf("hello %s age is %d", u.Name, u.Age)
	var p1 Person
	p1.Name = "阿隆戈登"
	p1.Age = 18
	var p2 = Person{Name: "阿隆戈登", Age: 25}
	// p3 := Person{Name: "子女", Age: 20}
	//format
	fmt.Println("p2=", p2)
	log.SetFlags(log.Lshortfile | log.Ldate | log.Lmicroseconds)
	log.Printf("%s login, age: %d", u.Name, u.Age)
}
