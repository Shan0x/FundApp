using Microsoft.AspNetCore.Mvc;
using System.Drawing.Text;
using FundApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace FundApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FundraiserController : ControllerBase
    {
        // GET: api/<FundraiserCreationController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<FundraiserCreationController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<FundraiserCreationController>
        [HttpPost]
        [Route("create")]
        public int createFundraiser([FromBody] Fundraiser fundraiser)
        {
            int? userID = fundraiser.userID;
            string? fundName = fundraiser.fundraiserName;
            string? fundSummary = fundraiser.fundraiserSummary;
            double? fundGoalAmt = fundraiser.fundraiserGoalAmount;

            //TODO
            /*
             * >Confirm variables are not empty or null
             * >Confirm user does not already have 5 fundraiser entries
             * >Create DB connection
             * >Create DB query
             * >Execut query
             */

            return 0;
        }

        // PUT api/<FundraiserCreationController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<FundraiserCreationController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
