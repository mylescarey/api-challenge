import * as React from 'react';
import styles from './genreList.module.scss';
export interface IProps {
	categories: string[];
	onChange: (category: string) => void;
	value: string;
}

const GenreList: React.SFC<IProps> = props => {
	const handleGenreChange = (e: React.ChangeEvent) => {
		const element = e.target as HTMLSelectElement;
		props.onChange(element.value);
	};
	return (
		<div className={styles.root}>
			<label className={styles.label}>Filter by Category</label>
			<select className={styles.dropdown} name="cars" value={props.value} onChange={handleGenreChange}>
				<option value={'all'}>All</option>
				{props.categories.map(item => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};

export default GenreList;
