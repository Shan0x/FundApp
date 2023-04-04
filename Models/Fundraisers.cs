using Azure.Identity;
using System.ComponentModel.DataAnnotations;

namespace FundApp.Models
{
    public class Fundraisers
    {
        [Key]
        public int fundraiserID { get; set; } = -1;
        public int userID { get; set; } = -1;
        public string fundraiserStatus { get; set; } = "ACTIVE";
        public string fundraiserSummary { get; set; } = "N/A";
        public double fundraiserGoalAmount { get; set; } = 0.00;
    }
}