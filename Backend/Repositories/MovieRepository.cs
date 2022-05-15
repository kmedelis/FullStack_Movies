using System;
using Backend.DbContexts;
using Backend.DbContexts.Entities;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repositories
{
	public class MovieRepository : IMovieRepository
	{
        private readonly MovieDbContext _context;

        public MovieRepository(MovieDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<MovieDbo>> FindAll()
        {
            var result = await _context.Movies.ToListAsync();
            if (result == null)
            {
                throw new Exception("No movies found");
            }
            return result;
        }

        public async Task<Movie> Create(Movie movie)
        {
            var item = await _context.Movies.FirstOrDefaultAsync(x => x.Name == movie.Name && x.ShortDescription == movie.ShortDescription && x.YearOfRelease == movie.YearOfRelease && x.Genre == movie.Genre);
            if (item == null)
            {
                _context.Movies.Add(new MovieDbo
                {
                    Id = movie.Id,
                    Name = movie.Name,
                    Genre = movie.Genre,
                    ShortDescription = movie.ShortDescription,
                    YearOfRelease = movie.YearOfRelease,
                });
                await _context.SaveChangesAsync();
            }
            if (item != null)
            {
                throw new Exception("Movie already exists");
            }
            return movie;
        }
    }
}

