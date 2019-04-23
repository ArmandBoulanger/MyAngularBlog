import {Post} from '../models/post';

export const POST_MOCKED: Post[] = [
  {
    tittle: 'Mon premier Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    createdAt: new Date(),
    loveIts: 1
  }, {
    tittle: 'Mon Second Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    createdAt: new Date(),
    loveIts: -1
  }, {
    tittle: 'Encore un Post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
    createdAt: new Date(),
    loveIts: 0
  }
];
