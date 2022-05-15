using System;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MoviesController
	{
         private readonly IMovieService _service;

        public MoviesController(IMovieService service)
        {
            _service = service;
        }

        [HttpGet("{movieId}")]
        public async Task<ActionResult> GetMovie(int movieId)
        {
            return new OkObjectResult(await _service.FindMovieById(movieId));
        }

        [HttpGet()]
        public async Task<ActionResult> GetAllMovies()
        {
            return new OkObjectResult(await _service.FindAll());
        }

        [HttpPost()]
        public async Task<ActionResult> AddMovie([FromBody] Movie movie)
        {
            return new OkObjectResult(await _service.CreateMovie(movie));
        }
    }
}

