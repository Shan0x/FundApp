using FundApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FundApp.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) 
            : base(options)
        {

        }

        public DbSet<FundApp.Models.Employee> Employee { get; set; } = default!;
    }
}
