const isObject = obj => {
	return Object.prototype.toString.call(obj) === '[object Object]'
}

const collapseAll = data => {
	return JSON.parse(
		JSON.stringify(data, function(key, node) {
			if (isObject(node) && node.hasOwnProperty('isOpen')) {
				delete node.isOpen
				return node
			}
			return node
		})
	)
}

export default collapseAll
