package main

import "fmt"

func singleNumber(nums []int) int {
	// return 0
	m := make(map[int]int)
	for _, v := range nums {
		// fmt.Println(v)
		_, ok := m[v] //检测 hashmap 有这个k吗
		// fmt.Println(ok)
		if ok { //出现过
			delete(m, v)
		} else {
			m[v] = 1
		}
	}
	for k := range m {
		// fmt.Println(k)
		return k
	}

	return 0
}
func main() {
	fmt.Printf("%d", singleNumber([]int{1, 4, 1, 2, 2}))
}
