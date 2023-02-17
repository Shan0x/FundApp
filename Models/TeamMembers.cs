using System.ComponentModel.DataAnnotations;

namespace FundApp.Models
{
    public class TeamMembers
    {
        [Key]
        public int studentid { get; set; }
        public string? name { get; set; }
        public string? role { get; set; }
    }
}
