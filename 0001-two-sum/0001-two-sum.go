func twoSum(nums []int, target int) []int {

	hashMap := make(map[int]int)

	for index, num := range nums {
		if index == 0 {
			hashMap[num] = index
			continue
		}

		hashNum, ok := hashMap[target-num]
		if ok {
			return []int{hashNum, index}
		}
		hashMap[num] = index
	}
	return []int{}
}
