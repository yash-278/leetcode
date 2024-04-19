import "math"

func search(nums []int, target int) int {
	left := 0
	right := len(nums) - 1
	mid := int(math.Round(float64((left + right) / 2)))

	for left <= right {
		if nums[mid] == target {
			return mid
		}

		if nums[mid] < target {
			left = mid + 1
			mid = int(math.Round(float64((left + right) / 2)))
			continue
		}

		if nums[mid] > target {
			right = mid - 1
			mid = int(math.Round(float64((left + right) / 2)))
			continue
		}
	}

	return -1
}