var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(item){
			return item **2;
		})
	},


	sum: function (arr) {
		var total = 0
		arr.forEach(function(item){
			total += item;
		})
		return total;
	},

	// findDuplicates: function (arr) {
	// 	return arr.map(function(item){
	// 		return arr.find;
	// 	})
	// },

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function(item){
			return item !== valueToRemove;
		})
	},

	findIndexesOf: function (arr, itemToFind) {
		var IndexesOfItem = [];
		arr.forEach(function(item, index){
			if(item === itemToFind){
				IndexesOfItem.push(index);
			}
		})
		return IndexesOfItem;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		return arr.reduce(function(sum, value){
			if(value %2 === 0){
				return sum + (Math.pow(value, 2));
			}
			return sum;
		},0);
	}

	// sumOfAllEvenNumbersSquared: function (arr) {
	// 	var SquaredArray = [];
	// 	arr.forEach(function(item){
	// 		if(item %2 === 0){
	// 			SquaredArray.push(item **2)
	// 		}
	// 	})
	// 	return SquaredArray;
	// }

	// sumOfAllEvenNumbersSquared: function (arr) {
	// 	var SquaredArray = [];
	// 	arr.forEach(function(item){
	// 		if(item %2 === 0){
	// 			SquaredArray.push(Math.pow(item, 2));
	// 		}
	// 	})
	// 	SquaredArray.reduce(function(sum, value){
	// 		return sum + value;
	// 	},0);

	// 	return SquaredArray;
	// }

}

module.exports = arrayTasks
