using System;
namespace Backend.Models
{
    public class Movie
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Genre { get; set; }
        public string ShortDescription { get; set; }
        public int YearOfRelease { get; set; }
    }
}

