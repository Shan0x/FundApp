using FundApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FundApp.Data
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) 
            : base(options)
        {

        }

        public DbSet<FundApp.Models.Employee> employees { get; set; }
    }
}
