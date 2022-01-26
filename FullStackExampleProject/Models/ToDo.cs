using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FullStackExampleProject.Models
{
    public class ToDo
    {
        [Key]
        public int Id { get; set; }
        public int AssignedTo { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int HoursNeeded { get; set; }
        public bool IsCompleted { get; set; }
    }
}
