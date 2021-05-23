
function sum(array) {
	let sum = 0
	array.forEach(value => {
		sum += value
	})
	
	return sum
}

function findBalancedIndex(array) {
	const total = sum(array)
	
	let leftSum = 0
	for (let i = 0; i < array.length - 2; i++) {
		leftSum += array[i]
		if (leftSum === total - leftSum - array[i + 1]) {
			return i + 1
		}
	}
	
	return null
}

function main() {
	console.log('Pivot of [4, 1, 2, 3, 3] is: ', findBalancedIndex([4, 1, 2, 3, 3]))
}

main()
