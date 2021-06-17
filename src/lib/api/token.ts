import Axios from 'axios';
import { Token } from 'src/interfaces/token';

const MyriadAPI = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

type NewAssetProps = {
  userId: string;
  tokenId: string;
};

export const getTokens = async () => {
  const { data } = await MyriadAPI.request<Token[]>({
    url: '/tokens',
    method: 'GET'
  });

  return data;
};

export const searchToken = async (query: string) => {
  console.log('the values:', query);
  const { data } = await MyriadAPI.request<Token[]>({
    url: `/tokens`,
    method: 'GET',
    params: {
      filter: {
        where: {
          name: {
            like: query
          }
        }
      }
    }
  });

  return data;
};

export const addNewToken = async (values: NewAssetProps) => {
  console.log('the values:', values);
  const { data } = await MyriadAPI.request<Token[]>({
    url: `/user-tokens`,
    method: 'POST',
    data: values
  });

  return data;
};
