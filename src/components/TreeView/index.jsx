import React from 'react'

import { Plus } from '../../assets/icons'

import { Parent, Node, Children, AddIcon } from './styles'

const TreeView = (props) => {
	const { data, onSelection, onToggle, onFolderClick } = props
	if (data.length === 0) {
		return <div>No Folders!</div>
	}
	return data.map((node) => {
		return (
			node.name && (
				<Parent key={node.name}>
					<Node
						isOpen={node.isOpen}
						onClick={() => onSelection(node)}
					>
						<span>{node.name}</span>
						<AddIcon onClick={() => onFolderClick(node)}>
							<Plus />
						</AddIcon>
					</Node>
					{node.isOpen && (
						<Children>
							{node.children.length > 0 && (
								<TreeView
									data={node.children}
									onFolderClick={onFolderClick}
									onSelection={onSelection}
									onToggle={onToggle}
								/>
							)}
						</Children>
					)}
				</Parent>
			)
		)
	})
}

export default TreeView
