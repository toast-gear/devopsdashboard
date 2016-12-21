using API.Models;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using System.Net.Http;
using Newtonsoft.Json;

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

        public static async Task<WordWidgetModel> getwordwidget()
        {
            List<object> ResultObjects = new List<object>();
            using (var Client = new HttpClient())
            {
                WordWidgetModel WordWidgetModel = new WordWidgetModel();
                using (var WordResponse = await Client.GetAsync(new Uri("http://www.setgetgo.com/randomword/get.php")))
                {
                    WordWidgetModel.Word = await WordResponse.Content.ReadAsStringAsync();
                    // using (var DefinitionResponse = await Client.GetAsync(new Uri("http://api.pearson.com/v2/dictionaries/entries?headword=" + WordWidgetModel.Word)))
                    using (var Response = await Client.GetAsync(new Uri("http://api.pearson.com/v2/dictionaries/entries?headword=dog")))
                    {
                        // Part of the response is just junk we dont want to deserialise
                        var Results = JsonConvert.DeserializeObject(await Response.Content.ReadAsStringAsync());
                        WordWidgetModel.Definition = "Test definiton data";
                        return WordWidgetModel;
                    }
                }
            }
        }
    }
}
