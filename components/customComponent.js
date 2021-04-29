import Link from 'next/link'
const CustomLink = props => {
	return (
		<>
			<div
				style={{
					lineHeight: '30px',
					padding: '0 8px'
				}}
			>
				<Link href={props.href}>{props.title}</Link>
			</div>
		</>
	)
}

const RowCenterDiv = ({ children }) => (
	<div className="row-center">{children}</div>
)

export { CustomLink, RowCenterDiv }
