package main

import (
	"fmt"
)

// 矩形类
type Rectangle struct {
	Length int
	Width  int
}

func (r *Rectangle) Area() int {
	return r.Length * r.Width
}

func main() {
	r := Rectangle{4, 2} //go语言的面向对象
	fmt.Println(r.Area())
}
