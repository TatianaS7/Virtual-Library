// import the Media class:
import Media from ".classes/Media.js";

// create your Movie class:
class Movie extends Media {
  constructor(director, duration, rating) {
    super(title, year, genre);
    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration} minutes, Rating: ${this.rating}`;
  }

  static longestMovie(movies) {
    let longest = movies[0];

    for (let i = 1; i < movies.length; i++) {
      if (movies[i].duration > longest.duration) {
        longest = movies[i];
      }
    }

    return longest;
  }
}
// don't change below
export default Movie;
