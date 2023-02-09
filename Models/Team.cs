using System.ComponentModel.DataAnnotations;

namespace FundApp.Models
{
    public class Team
    {
        [Key]
        public int studentid { get; set; }
        public string? name { get; set; }
        public string? major { get; set; }
        public string? role { get; set; }
    }
}
