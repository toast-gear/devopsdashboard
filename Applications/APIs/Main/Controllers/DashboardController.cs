using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.Repository;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class DashboardController : Controller
    {
        [HttpGet("{id}")]
        public List<PasswordsModel> GetPasswords()
        {
            List<PasswordsModel> PasswordsModelList = new List<PasswordsModel>();
            DashboardRepository DashboardRepo = new DashboardRepository();
            PasswordsModelList = DashboardRepo.GetPasswords();
            return PasswordsModelList;
        }

        [Route("widgetword")]
        [HttpGet]
        public async Task<WordWidgetModel> GetRandomWord()
        {
            try
            {
                return await DashboardRepository.getwordwidget();
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
