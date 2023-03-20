using Azure.Identity;
using System.ComponentModel.DataAnnotations;

namespace FundApp.Models
{
    public class SettingsUpdateRequest
    {
        [Key]
        public string? userName { get; set; }
        public string? userPassword { get; set; }
        public string? newUserPassword { get; set; }
        public string? userEmail { get; set; }
    }
}
