/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: queryClientsResponse
 */

import { useQuery } from "@tanstack/react-query";
import { CORE_URL } from "@/constants/env";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const fetchListData = async (props) => {
    try {
        const response = await fetch(`${baseUrl}/${props.endPoint}`, {
          method: 'GET',
          next: {
            revalidate: 10,
        },
    });

        if (!response.ok) {
          throw new Error('Fetch failed');
      }

      const result = await response.json();
      return result;
  } catch (error) {
    console.error(error);
    throw error;
}
};


const useGetListData = (props: Object) => {
    return useQuery({
        queryKey: ['getListData'],
        // enabled: false,
        queryFn: async() => await fetchListData(props)
    })
}

export {useGetListData}