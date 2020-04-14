const movies = [
  {
    name: 'Oldboy',
    genre: 'drama',
    year: 2003
  },
  {
    name: 'Joint Security Area',
    genre: 'drama',
    year: 2000
  },
  {
    name: 'Gran Torino',
    genre: 'drama',
    year: 2008
  },
  {
    name: 'Deadpool',
    genre: 'action',
    year: 2016
  },
  {
    name: 'John Wick',
    genre: 'action',
    year: 2014
  },
  {
    name: 'Guns Akimbo',
    genre: 'comedy',
    year: 2020
  },
  {
    name: 'The Dictator',
    genre: 'comedy',
    year: 2012
  },
];

function arrayToObject(array) {
  const result = {action: [], comedy: [], drama:[]};

  array.forEach(element => {
    const obj = {...element};

    switch (obj.genre) {
    case 'action':
      delete obj.genre;
      result.action.push(obj);
      break;

    case 'comedy':
      delete obj.genre;
      result.comedy.push(obj);
      break;

    case 'drama':
      delete obj.genre;
      result.drama.push(obj);
      break;
    }
  });

  return result;
}

function iterator() {
  const object = arrayToObject(movies);

  for (const key in object) {
    object[key].forEach(element => element.name);
  }
}

iterator();