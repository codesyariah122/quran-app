import * as React from 'react';
import { DefaultLayout } from '@/layouts';
import {
  useGetListData,
} from '@/hooks';
import {Loading, ListOfSurah} from '@/components'

export default function Home() {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(true);
  const [loadingMore, setLoadingMore] = React.useState<boolean>(false);
  const { data: lists, isLoading: isLoadingLists } = useGetListData({ endPoint: 'list-surah' });

  const [displayedCount, setDisplayedCount] = React.useState<number>(9); // Mulai dengan 10
  const [listData, setListData] = React.useState<Array<any>>([]);

  React.useEffect(() => {
    if (lists) {
      setListData(lists);
      setTimeout(() => {
        setIsLoaded(false)
      }, 1000)
    }
  }, [lists]);

  const loadMore = () => {
    setLoadingMore(true)
    setTimeout(() => {
      setDisplayedCount(displayedCount + 6);
      setLoadingMore(false)
    }, 1500)
  };

  return (
    <DefaultLayout isLoading={isLoaded} pageTitle="Quran Indo | Kemenag" >
    {
      isLoaded && (
        <Loading text="Waiting For Surah"/>
        ) ||
      (
        <ListOfSurah data={listData?.data} count={displayedCount} loadMore={loadMore} loadingMore={loadingMore} />
        )

    }
    </DefaultLayout>
    );
}