using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class DomainAuthenticationModel
    {

        public DomainAuthenticationModel()
        {

        }
        public string domain { get; set; }
        public string password { get; set; }
        public string username { get; set; }
    }
}
