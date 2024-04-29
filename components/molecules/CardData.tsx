import { Card } from "flowbite-react";

interface Surah {
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

interface CardDataProps {
	surah: Surah;
}

const CardData = ({ surah }: CardDataProps) => {
	return (
		<Card className="max-w-sm quran__text">
		<div className="flex justify-start space-x-6">
		<div>
		<h5 className="circle-number text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{surah.number}
		</h5>
		</div>
		<div>
		<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		{surah.list.short}
		</h5>
		</div>
		</div>
		<h6 className="card-subtitle mb-2 text-muted">
		{surah.list.transliteration.id} - {surah.list.translation.id}
		</h6>
		</Card>
		);
};

export default CardData;
