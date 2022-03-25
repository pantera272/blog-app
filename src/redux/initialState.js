const initialState = {
  posts : [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-03-14T09:46:35.000Z',
      author: 'John Doe',
      category: 'Sport'
    },
    {
      id: '2',
      title: 'Article',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-03-14T09:46:35.000Z',
      author: 'Mark',
      category: 'Movies'
    },
    {
      id: '3',
      title: 'Title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-03-14T09:46:35.000Z',
      author: 'John',
      category: 'Sport'
    },
    {
      id: '4',
      title: 'Header',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-03-14T09:46:35.000Z',
      author: 'Doe',
      category: 'Sport'
      }
  ],
  categories: [ 'Sport', 'News', 'Movies'],
}

export default initialState;