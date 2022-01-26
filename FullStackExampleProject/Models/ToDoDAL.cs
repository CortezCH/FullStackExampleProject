using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullStackExampleProject.Models
{
    public class ToDoDAL
    {
        public List<ToDo> GetToDos()
        {
            using (var connect = new MySqlConnection(Secret.toDoConnection))
            {
                string sql = "Select * FROM ToDos";

                connect.Open();
                List<ToDo> output = connect.Query<ToDo>(sql).ToList();
                connect.Close();

                return output;
            }
        }

        public ToDo GetToDo(int id)
        {
            List<ToDo> output = GetToDos();
            ToDo match;
            try
            {
                match = output.Where(t => t.Id == id).First();
            }
            catch
            {
                match = new ToDo();
                match.Name = $"ToDO at index {id} does not exist, please search a new movie";
            }
            return match;
        }

        public void CreateToDo(ToDo newToDo)
        {
            using (var connect = new MySqlConnection(Secret.toDoConnection))
            {
                string sql = $"INSERT INTO ToDos " +
                    $"values(0," +
                    $"{newToDo.AssignedTo}," +
                    $"'{newToDo.Name}'," +
                    $"'{newToDo.Description}'," +
                    $"{newToDo.HoursNeeded}," +
                    $"{newToDo.IsCompleted})";

                connect.Open();
                connect.Query<ToDo>(sql);
                connect.Close();
            }
        }

        public void DeleteToDo(int toDoID)
        {
            using (var connect = new MySqlConnection(Secret.toDoConnection))
            {
                string sql = $"DELETE FROM todos WHERE id={toDoID}";

                connect.Open();
                connect.Query<ToDo>(sql);
                connect.Close();
            }
        }

        public void EditToDo(int toDoId, ToDo newToDo)
        {
            using (var connect = new MySqlConnection(Secret.toDoConnection))
            {
                string sql = $"UPDATE ToDos " +
                    $"SET " +
                    $"AssignedTo = {newToDo.AssignedTo}, " +
                    $"`Name` = '{newToDo.Name}', " +
                    $"Description = '{newToDo.Description}', " +
                    $"HoursNeeded = {newToDo.HoursNeeded}, " +
                    $"IsComplete = {newToDo.IsCompleted} " +
                    $"WHERE ID = {toDoId}";

                Console.WriteLine(sql);
                connect.Open();
                connect.Query<ToDo>(sql);
                connect.Close();
            }
        }
    }
}
