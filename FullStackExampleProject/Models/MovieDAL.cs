using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullStackExampleProject.Models
{
    public class MovieDAL
    {
        public List<Movie> GetMovies()
        {
            using (var connect = new MySqlConnection(Secret.connection))
            {
                string sql = "Select * FROM movies";

                connect.Open();
                List<Movie> output = connect.Query<Movie>(sql).ToList();
                connect.Close();

                return output;
            }
        }

        public Movie GetMovie(int movieID)
        {
            List<Movie> output = GetMovies();
            Movie match;
            try
            {
                match = output.Where(m => m.MovieID == movieID).First();
            }
            catch 
            {
                match = new Movie();
                match.Title = $"Movie at index {movieID} does not exist, please search a new movie";
            }
            return match;
        }

        public void CreateMovie(Movie newMovie)
        {
            using (var connect = new MySqlConnection(Secret.connection))
            {
                string sql = $"INSERT INTO movies " +
                    $"values(0," +
                    $"'{newMovie.Title}'," +
                    $"'{newMovie.Genre}'," +
                    $"{newMovie.ReleaseDate})";

                connect.Open();
                connect.Query<Movie>(sql);
                connect.Close();
            }
        }

        public void DeleteMovie(int movieID)
        { 

            using (var connect = new MySqlConnection(Secret.connection))
            {
                string sql = $"DELETE FROM movies WHERE movieID={movieID}";

                connect.Open();
                connect.Query<Movie>(sql);
                connect.Close();
            }
        }

        public void UpdateMovie(int movieID, Movie newValues)
        { 

            using (var connect = new MySqlConnection(Secret.connection))
            {
                string sql = $"UPDATE movies SET " +
                    $"title = '{newValues.Title}', " +
                    $"genre = '{newValues.Genre}', " +
                    $"releaseDate = {newValues.ReleaseDate} " +
                    $"WHERE movieID = {movieID}";

                connect.Open();
                connect.Query<Movie>(sql);
                connect.Close();
            }
        }
    }
}
