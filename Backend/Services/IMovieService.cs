using System;
using Backend.Models;

namespace Backend.Services
{
	public interface IMovieService
	{
		Task<IEnumerable<Movie>> FindAll();
		Task<Movie> FindMovieById(int id);
		Task<Movie> CreateMovie(Movie movie);
	}
}

