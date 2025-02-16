import { TImage } from '@/models/Image';
import { TUser } from '@/models/User';

import { UserResponse } from '@/types/contributor';
import { StrapiResponse } from '@/types/strapi';

import { formatUser } from '@/utils/user';

export const MOCK_AVATAR: TImage = {
  hash: 'image_de1e29b0b7',
  url: 'https://res.cloudinary.com/dn5vw6fjp/image/upload/v1726630608/image_de1e29b0b7.png',
};

export const MOCK_USERS: TUser[] = [
  {
    id: '1',
    username: 'Adela Parkson',
    firstName: 'User 1',
    email: 'user1@gmail.com',
    role: { name: 'Creative Director' },
    createdAt: new Date('2024-08-17T07:25:04.188Z'),
    rating: 29,
    avatar: MOCK_AVATAR,
    phoneNumber: '123555141',
  },
  {
    id: '2',
    username: 'user2',
    firstName: 'User 2',
    email: 'user2@gmail.com',
    role: { name: 'Product Designer' },
    createdAt: new Date('2024-08-13T07:25:04.188Z'),
    rating: 72,
    avatar: MOCK_AVATAR,
    phoneNumber: '123555141',
  },
  {
    id: '3',
    username: 'user3',
    firstName: 'User 3',
    email: 'user3@gmail.com',
    role: { name: 'Product Designer' },
    createdAt: new Date('2024-01-13T07:25:04.188Z'),
    rating: 89,
    avatar: MOCK_AVATAR,
    phoneNumber: '123555141',
  },
  {
    id: '4',
    username: 'user4',
    firstName: 'User 4',
    email: 'user4@gmail.com',
    role: { name: 'Junior Graphic Designer' },
    createdAt: new Date('2024-08-18T07:25:04.188Z'),
    rating: 52,
    avatar: MOCK_AVATAR,
    phoneNumber: '123555141',
  },
];

export const MOCK_ROLE_RESPONSE: StrapiResponse<{ id: string; name: string }> =
  {
    id: '1',
    attributes: { name: 'Developer' },
  };

export const MOCK_IMAGE_RESPONSE: StrapiResponse<TImage> = {
  id: '1',
  attributes: {
    hash: 'image_de1e29b0b7',
    url: 'https://res.cloudinary.com/dn5vw6fjp/image/upload/v1726630608/image_de1e29b0b7.png',
  },
};

export const MOCK_USERS_RESPONSE: StrapiResponse<UserResponse>[] =
  MOCK_USERS.map(({ id, ...attributes }) => ({
    attributes: {
      ...formatUser({ ...attributes, id }),
      avatar: { data: MOCK_IMAGE_RESPONSE },
      role: MOCK_ROLE_RESPONSE,
      join_nfts: { data: [] },
    },
    id,
  }));

export const MOCK_USER_INFO = {
  fullName: 'John Doe',
  phoneNumber: '123456789',
  avatar: '',
};
