/*
    Problem Statement
    Movie Recommendation Engine (Advanced Arrays)
    About the Question
    You need to build the logic for a personalised movie recommendation system.
    The input is an array of movie objects, each containing:

    title (movie name)
    genre (category)
    rating (from 1 to 5)
    watchCount (number of views)
    Your goal is to transform this dataset into a structured recommendation report using array methods.

    Tasks
    Filter → Remove movies with a rating lower than 4.
    Group → Organize remaining movies by their genre.
    Sort → Within each genre, sort movies by watchCount in descending order.
    Slice → Select only the top 2 movies from each genre.
    Format → Return the result as an object with genre keys and arrays of movie objects containing only title and watchCount.

    Tip: Think step by step — filter ➝ group ➝ sort ➝ slice ➝ format.
*/

movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 4.8, watchCount: 1500 },
    { title: "The Matrix", genre: "Sci-Fi", rating: 4.7, watchCount: 2000 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 4.6, watchCount: 1800 },
    { title: "The Godfather", genre: "Crime", rating: 4.9, watchCount: 2500 },
    { title: "Pulp Fiction", genre: "Crime", rating: 4.5, watchCount: 2200 },
    { title: "The Dark Knight", genre: "Action", rating: 4.9, watchCount: 3000 },
    { title: "Avengers: Endgame", genre: "Action", rating: 4.4, watchCount: 2800 } ]

function getTopMoviesByGenre(movies) {
  // Step 1: Filter out movies with rating < 4

  // TODO: Filter out movies with rating less than 4 using .filter
  const filtered = movies.filter(movie => movie.rating >= 4);

  // Step 2: Group movies by genre

  // TODO: Use .reduce to group movies by their genre into an object
  const grouped = filtered.reduce((acc, movie) => {
    if(!acc[movie.genre]){
      acc[movie.genre] = [];
    }
    acc[movie.genre].push(movie);
    return acc;
  },{}
  );

  // Step 3: Sort each genre's movies by watch count in descending order

  // TODO: For each genre, sort the movies by watchCount from highest to lowest

  for (const genre in grouped) {
    grouped[genre].sort((a, b) => b.watchCount - a.watchCount);
  }

  // Step 4: Extract top 2 movies from each genre and return only title and watchCount

  // TODO: Use .slice and .map to return top 2 movies per genre with only title and watchCount
  const result = {};
    for (const genre in grouped) {
        result[genre] = grouped[genre]
            .slice(0, 2)
            .map(movie => ({ title: movie.title, watchCount: movie.watchCount }));
    }

  return result;
}

console.log(getTopMoviesByGenre(movies));
