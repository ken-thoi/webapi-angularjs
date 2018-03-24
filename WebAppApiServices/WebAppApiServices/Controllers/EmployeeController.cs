using Newtonsoft.Json;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using WebAppApiServices.Models;

namespace WebAppApiServices.Controllers
{
    public class EmployeeController : ApiController
    {
        [HttpGet]
        [Authorize]
        public HttpResponseMessage GetEmployees()
        {
            using (var db = new AppDbContext())
            {
                var employees = db.Employees.ToList();
                return new HttpResponseMessage()
                {
                    Content = new StringContent(JsonConvert.SerializeObject(employees))
                };
            }
        }
    }
}
