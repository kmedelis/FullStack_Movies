using System;
using Backend.DbContexts.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.DbContexts;

public class MovieDbContext : DbContext
{
    public DbSet<MovieDbo> Movies { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseInMemoryDatabase("MegaCity");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MovieDbo>(entity => { entity.Property(e => e.Id).ValueGeneratedOnAdd(); });
        modelBuilder.Entity<MovieDbo>().HasKey(x => x.Id);

        modelBuilder.Entity<MovieDbo>().HasData(
            new MovieDbo { Id = 1, Name = "Mad Max", Genre = "Action", ShortDescription = "A very good movie", YearOfRelease = 2015 },
            new MovieDbo { Id = 2, Name = "Morbius", Genre = "Crime", ShortDescription = "A not so good movie", YearOfRelease = 2022 },
            new MovieDbo { Id = 3, Name = "Morbius2", Genre = "Drama", ShortDescription = "Not that good", YearOfRelease = 1900 },
            new MovieDbo { Id = 4, Name = "Morbius3", Genre = "Thriller", ShortDescription = "Still not good", YearOfRelease = 1901 },
            new MovieDbo { Id = 5, Name = "Morbius4", Genre = "Crime", ShortDescription = "No", YearOfRelease = 1902 },
            new MovieDbo { Id = 6, Name = "Morbius5", Genre = "Historical", ShortDescription = "Bad movie", YearOfRelease = 1903 },
            new MovieDbo { Id = 7, Name = "Morbius6", Genre = "Drama", ShortDescription = "Not again", YearOfRelease = 1904 },
            new MovieDbo { Id = 8, Name = "Batman", Genre = "Action", ShortDescription = "Not actually a movie", YearOfRelease = 2011 }
        );
    }
}
