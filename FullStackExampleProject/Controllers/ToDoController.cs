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
    public class ToDoController : ControllerBase
    {
        ToDoDAL toDoDAL = new ToDoDAL();

        [HttpGet]
        public List<ToDo> GetToDos()
        {
            return toDoDAL.GetToDos();
        }

        [HttpGet("getToDo/{id}")]
        public ToDo GetToDo(int id)
        {
            return toDoDAL.GetToDo(id);
        }

        [HttpPost("createToDo")]
        public void CreateToDo(ToDo newToDo)
        {
            toDoDAL.CreateToDo(newToDo);
        }

        [HttpDelete("delete/{toDoID}")]
        public void DeleteToDo(int toDoID)
        {
            toDoDAL.DeleteToDo(toDoID);
        }

        [HttpPut("edit/{toDoID}")]
        public void EditToDo(int toDoID, ToDo newToDo)
        {
            toDoDAL.EditToDo(toDoID, newToDo);
        }
    }
}
