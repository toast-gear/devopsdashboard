using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repository
{
    public class AuthenticationRepository
    {
        public AuthenticatedDashboardUserModel AuthenticateDomainUsers(DomainAuthenticationModel DomainAuthenticationModel)
        {
            AuthenticatedDashboardUserModel AuthModel = new AuthenticatedDashboardUserModel();
            if (DomainAuthenticationModel.Domain == "sudo" & DomainAuthenticationModel.UserName == "sudo" & DomainAuthenticationModel.Password == "sudo")
            {
                AuthModel.Roles = "Admin";
                AuthModel.UserName = "sudo";
                AuthModel.isAuthenticated = true;
                return AuthModel;
            }
            else
            {
                // This is where you would implement your AD AUTHENTICATION methods. For now I will just return a false
                AuthModel.Roles = null;
                AuthModel.UserName = null;
                AuthModel.isAuthenticated = false;
                return AuthModel;
            }
        }

        /*

        As of 2016-06-20 this does not work in ASP.NET core 1.0.
        https://stackoverflow.com/questions/34834504/asp-net-5-mvc-6-on-premises-active-directory

        Potential solution ---> https://github.com/jesblit/ASPNET5-FormAuthenticationLDAP

        public bool LDAPAuthenticateUser(string UserName, string password, string domain)
        {
            var context = new PrincipalContext(ContextType.Domain, domain);
            // Authenticate the user
            if (context.ValidateCredentials(UserName, password) == true)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public dynamic LDAPGetGroup(string UserName, string domain)
        {
            // Get the group that user is in
            using (var searcher = new PrincipalSearcher())
            {
                var GroupAdmin = "DevOpsDashboardAdmins";
                var GroupGuest = "DevOpsDashboardGuests";
                var context = new PrincipalContext(ContextType.Domain, domain);
                var AdminGroupPrincipal = new GroupPrincipal(context, GroupAdmin);
                searcher.QueryFilter = AdminGroupPrincipal;
                var AdminGroup = searcher.FindOne() as GroupPrincipal;

                if (AdminGroup != null)
                {
                    foreach (Principal member in AdminGroup.Members)
                    {
                        if (UserName == member.SamAccountName)
                        {
                            dynamic Account = new ExpandoObject();
                            Account.Domain = domain;
                            Account.UserName = UserName;
                            Account.Group = GroupAdmin;
                            return Account;
                        }
                    }
                }

                var GuestGroupPrincipal = new GroupPrincipal(context, GroupGuest);
                searcher.QueryFilter = GuestGroupPrincipal;
                var GuestGroup = searcher.FindOne() as GroupPrincipal;
                if (GuestGroup != null)
                {
                    foreach (Principal member in GuestGroup.Members)
                    {
                        if (UserName == member.SamAccountName)
                        {
                            dynamic Account = new ExpandoObject();
                            Account.Domain = domain;
                            Account.UserName = UserName;
                            Account.Group = GroupGuest;
                            return Account;
                        }
                    }
                }
                dynamic AccountTwo = new ExpandoObject();
                AccountTwo.Domain = domain;
                AccountTwo.UserName = UserName;
                AccountTwo.Group = "UNKNOWN";
                return AccountTwo;
            }
        }

        */
    }
}
