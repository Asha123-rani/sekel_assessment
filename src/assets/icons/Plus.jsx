import React from 'react'

const Plus = ({ size = 16, color = '#000000' }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		stroke={color}
		strokeWidth="3"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z" />
	</svg>
)

export default Plus
