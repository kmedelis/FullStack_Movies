using System;
using Backend.DbContexts.Entities;
using Backend.Models;

namespace Backend.Repositories
{
	public interface IMovieRepository
	{
		Task<IEnumerable<MovieDbo>> FindAll();
		Task<Movie> Create(Movie movie);
	}
}

