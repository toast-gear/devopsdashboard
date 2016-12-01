using API.Models;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;

namespace API.Repository
{
    public class DashboardRepository
    {
        public List<PasswordsModel> GetPasswords()
        {
            List<PasswordsModel> PasswordModelList = new List<PasswordsModel>();
            try
            {
                if (File.Exists(System.IO.Path.Combine((""))))
                {
                    PasswordsModel PasswordModel = new PasswordsModel();
                    PasswordModel.Company = 1;
                    PasswordModel.Product = 1;
                    PasswordModel.Environment = 1;
                    PasswordModel.URL = "test";
                    PasswordModel.Password = "test";
                    PasswordModelList.Add(PasswordModel);
                }
            }
            catch
            {
                return null;
            }
            return PasswordModelList;
        }
    }
}
