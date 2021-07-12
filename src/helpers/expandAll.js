const isObject = obj => {
	return Object.prototype.toString.call(obj) === '[object Object]'
}

const expandAll = data => {
	return JSON.parse(
		JSON.stringify(data, function(key, node) {
			if (isObject(node) && node.type === 'folder') {
				return {
					...node,
					isOpen: true
				}
			}
			return node
		})
	)
}

export default expandAll
