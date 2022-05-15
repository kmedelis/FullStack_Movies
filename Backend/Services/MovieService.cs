using System;
using Backend.DbContexts.Entities;
using Backend.Models;
using Backend.Repositories;

namespace Backend.Services
{
	public class MovieService : IMovieService
	{
        private readonly IMovieRepository _repository;

        public MovieService(IMovieRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Movie>> FindAll()
        {
            var result = (await _repository.FindAll()).Select(Map);
            return result;
        }

        public async Task<Movie> FindMovieById(int id)
        {
            var result = (await _repository.FindAll()).Select(Map).FirstOrDefault(x => x.Id == id);
            return result;
        }

        public async Task<Movie> CreateMovie(Movie movie)
        {
            var result = await _repository.Create(movie);
            return result;
        }

        private static Movie Map(MovieDbo movie)
        {
            return new Movie
            {
                Id = movie.Id,
                Name = movie.Name,
                Genre = movie.Genre,
                ShortDescription = movie.ShortDescription,
                YearOfRelease = movie.YearOfRelease,
            };
        }
    }
}

