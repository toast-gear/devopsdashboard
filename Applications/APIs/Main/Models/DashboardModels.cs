using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class PasswordsModel
    {
        public PasswordsModel()
        {

        }
        public int Product { get; set; }
        public int Company { get; set; }
        public int Environment { get; set; }
        public string URL { get; set; }
        public string Password { get; set; }
    }
}