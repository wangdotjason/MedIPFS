import { NextPage } from 'next';
import Image from 'next/image';
import { FilePath, fileTypes } from '../../constants/file-types';
import { MedIPFSFile } from '../../interfaces/MedIPFS-file.interface';
import { bytesToSize, showString, truncateName } from '../../utils/format';
import { Card } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';
import { AppStorage } from '../../lib/storage';

interface Props {
	file: MedIPFSFile;
}

export const FileCard: NextPage<Props> = ({ file }) => {

	const storage = new AppStorage();

	return (<Card title = {file.fileName} style={{ textAlign : 'center'}}
		cover={
			<div className='text-center mt-5 mb-0'>
				<Image
					alt="filetype"
					src={fileTypes[file.fileType ?? 'undefined'] ?? FilePath.undefined}
					width={100}
					height={100} />
			</div>
		}
		actions={[<DownloadOutlined onClick={() => storage.download(file)} key="download" />]}>
		<p> {bytesToSize(parseInt(file.fileSize))} </p>
		<p> <b> Sender: </b> {truncateName(file.uploader)} </p>
		<p> <b> CID: </b> {truncateName(file.filePath)} </p>
	</Card>)
}

