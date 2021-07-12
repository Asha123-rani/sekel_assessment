import React from 'react'
import ReactDOM from 'react-dom'

import './styles.scss'

// Components
import { TreeView } from './components'

// Helpers
import { toggleNode, expandAll, collapseAll } from './helpers'

const FileExplorer = () => {
	const [data, setData] = React.useState([])
	const [isDisabled, setDisabled] = React.useState(true)
	const [name, setName] = React.useState('')
	const [error, setError] = React.useState('')

	const onToggle = (node) => {
		const mutated = toggleNode(data, node)
		setData(mutated)
	}

	const onFolderClick = (node) => {
		name &&
			node.children.push({
				name: name,
				type: 'folder',
				children: []
			})
	}

	const onSelection = (node) => {
		if (node.type === 'folder') onToggle(node.name)
	}

	const collapseAllFn = () => {
		const mutated = collapseAll(data)
		setData(mutated)
	}

	const expandAllFn = () => {
		const mutated = expandAll(data)
		setData(mutated)
	}

	const createFolder = () => {
		name &&
			setData([
				{
					name: name,
					type: 'folder',
					children: []
				}
			])
		setDisabled(true)
	}

	const handleChange = (event) => {
		if (data.length === 0) {
			if (event.target.value && event.target.value !== '') {
				setError('')
				setName(event.target.value)
				setDisabled(false)
			} else {
				setError('This field is required')
				setDisabled(true)
			}
		} else {
			setDisabled(true)
			if (event.target.value && event.target.value !== '') {
				setError('')
				setName(event.target.value)
			} else {
				setError('This field is required')
				setName('')
			}
		}
	}
	return (
		<div id="wrapper">
			<sidebar>
				<header>
					<button onClick={collapseAllFn}>Collapse All</button>
					<button onClick={expandAllFn}>Expand All</button>
					<button disabled={isDisabled} onClick={createFolder}>
						create folder
					</button>
				</header>
				folder Name:
				<input type="text" onChange={(e) => handleChange(e)} />
				<div>{error}</div>
				<main>
					<TreeView
						data={data}
						onSelection={onSelection}
						onToggle={onToggle}
						onFolderClick={onFolderClick}
						error={error}
					/>
				</main>
			</sidebar>
		</div>
	)
}

ReactDOM.render(<FileExplorer />, document.getElementById('root'))
