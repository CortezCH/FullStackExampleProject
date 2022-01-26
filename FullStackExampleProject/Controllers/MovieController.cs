using FullStackExampleProject.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullStackExampleProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : ControllerBase
    {
        MovieDAL movieDAL = new MovieDAL();

        [HttpGet]
        public List<Movie> GetMovies()
        {
            return movieDAL.GetMovies();
        }

        [HttpGet("{movieID}")]
        public Movie GetMovie(int movieID)
        {
            return movieDAL.GetMovie(movieID);
        }

        [HttpPost("createMovie")]
        public void CreateMovie(Movie newMovie)
        {
            movieDAL.CreateMovie(newMovie);
        }

        [HttpDelete("delete/{movieID}")]
        public void DeleteMovie(int movieID)
        {
            movieDAL.DeleteMovie(movieID);
        }

        [HttpPut("update/{movieID}")]
        public void UpdateMovie(int movieID, Movie newValues)
        {
            movieDAL.UpdateMovie(movieID, newValues);
        }
    }
}
