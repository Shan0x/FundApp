namespace FundApp.Models
{
    public class Donations
    {
        public int? donationID { get; set; }
        public int? fundraiserID { get; set; }
        public double? donationAmount { get; set; }
        public string? donatorName { get; set; }
        public DateOnly? dontationDate { get; set; }
    }
}
