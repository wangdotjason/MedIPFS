
import { Col, Empty, Row } from 'antd';
import { NextPage } from 'next'
import { MedIPFSFile } from '../../interfaces/MedIPFS-file.interface';
import { FileCard } from './file-card';


interface Props {
	files: MedIPFSFile[];
}

export const Projects: NextPage<Props> = ({ files }) => {

	if (files.length === 0) return <Empty />;

	return (
		<div className='w-auto m-auto'>
			<Row gutter={[16, 16]}>
				{files.map((item, i) =>
				(<Col key={i} xs={12} sm={8} lg={6} >
					<FileCard file={item}></FileCard>
				</Col>))}
			</Row>
		</div>)
}