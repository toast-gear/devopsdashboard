using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Net;
using System.Net.Http;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        [Route("test")]
        [HttpGet]
        public async Task<HttpResponseMessage> GetAll()
        {
            HttpResponseMessage hrm = new HttpResponseMessage();
            hrm.StatusCode = HttpStatusCode.OK;
            hrm.ReasonPhrase = "true";
            return hrm;
        }

        [Route("authenticatedomainuser")]
        [HttpPost]
        public async Task<HttpResponseMessage> authenticatedomainuser([FromBody] DomainAuthenticationModel DomainAuthenticationModel)
        {
            HttpResponseMessage hrm = new HttpResponseMessage();
            try
            {
                if (DomainAuthenticationModel.domain == "REDWARE" & DomainAuthenticationModel.username == "callum.tait" & DomainAuthenticationModel.password == "Get1n2it")
                {
                    hrm.StatusCode = HttpStatusCode.OK;
                    hrm.ReasonPhrase = "true";
                    return hrm;
                }
                else
                {
                    hrm.StatusCode = HttpStatusCode.OK;
                    hrm.ReasonPhrase = "false";
                    return hrm;
                }
            }
            catch (Exception ex)
            {
                hrm.StatusCode = HttpStatusCode.InternalServerError;
                hrm.ReasonPhrase = ex.Message;
                return hrm;
            }
        }
    }
}
