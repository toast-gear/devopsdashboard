using API.Models;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Repository
{
    public class DashboardRepository
    {
        public List<PasswordsModel> GetPasswords()
        {
            List<PasswordsModel> PasswordModelList = new List<PasswordsModel>();
            try
            {
                if (System.IO.File.Exists(System.IO.Path.Combine((""))))
                {
                    PasswordsModel pm = new PasswordsModel();
                    pm.Company = 1;
                    pm.Product = 1;
                    pm.Environment = 1;
                    pm.URL = "test";
                    pm.Password = "test";
                    PasswordModelList.Add(pm);
                }
            }
            catch (Exception ex)
            {
                return null;
            }
            return PasswordModelList;
        }
    }
}
