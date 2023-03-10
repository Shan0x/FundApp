using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;

namespace FundApp.Models
{
    public class Users
    {
        [Key]
        public int userID { get; set; }
        public string userName { get; set; }
        public string userPassword { get; set; }
        public string? userFirstName { get; set; }
        public string? userLastName { get; set; }
        public string? userEmail { get; set;}
        public DateOnly userDOB { get; set; }
    }
}
