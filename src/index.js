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
  }
];

const arrayToObject = function(array) {
  const result = array.reduce((accamulator, film) => {
    const key = film['genre'];
    if (!accamulator[key]) {
      accamulator[key] = [];
    }
    delete film.genre;
    accamulator[key].push(film);

    return accamulator;
  }, {});

  return result;
};

arrayToObject(movies);

const moviesObj = arrayToObject(movies);

moviesObj[Symbol.iterator] = function() {
  const categories = Object.values(this);
  let index = 0;
  let indexCategories = 0;

  return {
    next() {
      if (index === categories[indexCategories].length) {
        indexCategories++;
        // eslint-disable-next-line no-magic-numbers
        index = 0;
      }

      if (indexCategories === categories.length) {
        return { done: true };
      }

      return {
        done: false,
        value: categories[indexCategories][index++]
      };
    }
  };
};

for (const movie of moviesObj) {
  // eslint-disable-next-line no-console
  console.log(movie);
}