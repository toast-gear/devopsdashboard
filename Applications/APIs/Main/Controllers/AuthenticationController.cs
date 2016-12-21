using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Net;
using System.Net.Http;
using API.Repository;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        [Route("test")]
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok();
        }

        [Route("authenticatedomainuser")]
        [HttpPost]
        public async Task<IActionResult> AuthenticateDomainUser([FromBody] DomainAuthenticationModel DomainAuthenticationModel)
        {
            AuthenticationRepository AuthenticationRepo = new AuthenticationRepository();
            AuthenticatedDashboardUserModel dnu = new AuthenticatedDashboardUserModel();
            try
            {
                dnu = AuthenticationRepo.AuthenticateDomainUsers(DomainAuthenticationModel);
            }
            catch
            {
                return StatusCode(500);
            }
            return Ok(dnu);
            
        }
    }
    //    public async Task<HttpResponseMessage> AuthenticateDomainUser([FromBody] DomainAuthenticationModel DomainAuthenticationModel)
    //    {

    //        AuthenticationRepository AuthenticationRepo = new AuthenticationRepository();
    //        HttpResponseMessage hrm = new HttpResponseMessage();
    //        try
    //        {
    //            DashboardUserModel dnu = AuthenticationRepo.AuthenticateDomainUsers(DomainAuthenticationModel);
    //            if(dnu.group == null | dnu.username == null)
    //            {
    //                hrm.RequestMessage.CreateResponse<DashboardUserModel>(HttpStatusCode.OK, dnu);
    //            }
    //            else
    //            {
    //                hrm.RequestMessage.CreateResponse<DashboardUserModel>(HttpStatusCode.OK, dnu);
    //            }
    //        }
    //        catch (Exception ex)
    //        {
    //            hrm.RequestMessage.CreateErrorResponse(HttpStatusCode.InternalServerError, ex);
    //        }
    //        return hrm;
    //    }
    //}
}

/*
.NOTES
async Task<IActionResult> 

*/
