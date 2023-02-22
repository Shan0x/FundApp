using System.ComponentModel.DataAnnotations;

namespace FundApp.Models
{
    public class Users
    {
        [Key]
        public int userid { get; set; }
        public string? username { get; set; }
        public string? userpass { get; set; }
    }
}
