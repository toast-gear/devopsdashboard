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
        public string Domain { get; set; }
        public string Password { get; set; }
        public string UserName { get; set; }
    }

    public class AuthenticatedDashboardUserModel
    {
        public AuthenticatedDashboardUserModel()
        {

        }
        public string UserName { get; set; }
        public string Roles { get; set; }
        public Boolean isAuthenticated { get; set; }
    }
}