import * as React from 'react';
import { Card, Button } from "flowbite-react";
import {Loading, CardData, FilterSurah} from '@/components';


interface Surah {
	id: number;
	number: number;
	list: {
		short: string;
		transliteration: {
			id: string;
		};
		translation: {
			id: string;
		};
	};
}
interface ListOfSurahProps {
	data: Surah[]; 
	count: number;
	loadingMore: boolean;
	loadMore: () => void;
}


const ListOfSurah = ({data, count, loadMore, loadingMore}: ListOfSurahProps) => {
	const [changeSurah, setChangeSurah] = React.useState<boolean | false>(false);
	const [loadingChange, setLoadingChange] = React.useState<boolean | false>(false);
	const [selectedSurah, setSelectedSurah] = React.useState<Surah | null>(null);

	const handleSurahChange = (newSurah: Surah) => {
		setLoadingChange(true)
		setTimeout(() => {
			setChangeSurah(true)
			setLoadingChange(false)
			setSelectedSurah(newSurah);
		}, 1000)
	};

	const filteredData = selectedSurah
	? data.filter((surah) => surah.number === selectedSurah.number)
	: data;

	return (
		<React.Fragment>
		<div className="grid grid-cols-1 mb-6">
		<div className="col-span-full place-self-center w-full max-w-full">
		<h1 className="text-3xl font-bold">Daftar Surah</h1>
		</div>
		</div>
		<div className="grid grid-cols-1 mb-6">
		<div className="col-span-full place-self-center w-full max-w-full">
		<FilterSurah lists={data} onChange={handleSurahChange}/>
		</div>
		</div>
		<div className="grid grid-cols-3 place-content-center gap-6 mb-6">
		{
			loadingChange && (
				<Loading text="Waiting for selected surah ..."/>
				)
		}
		{!loadingChange && filteredData?.slice(0, count).map((surah, idx) => (
			<CardData key={surah.number} surah={surah} />
			))}
		</div>

		{
			loadingMore  && (
				<Loading text="Waiting for more surah ..."/>
				)
		}

		{!changeSurah && data?.length && count < data.length && (
			<div className="flex justify-center py-4">
			<div className="flex items-center">
			<Button onClick={loadMore} outline gradientDuoTone="purpleToBlue">
			Load More
			</Button>
			</div>
			</div>
			)}
		</React.Fragment>
		)
}

export default ListOfSurah;