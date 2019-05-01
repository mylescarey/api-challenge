import * as React from 'react';
import styles from './croppedImage.module.scss';
export interface IProps {
	src: string;
	position?: string;
}

const CroppedImage: React.SFC<IProps> = props => {
	return (
		<div
			className={styles.croppedImage}
			style={{
				backgroundImage: 'url(' + props.src + ')',
				backgroundPosition: props.position ? props.position : 'top',
			}}
		/>
	);
};

export default CroppedImage;
