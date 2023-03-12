using FundApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FundApp.Data
{
    public class FundFriendsContext : DbContext
    {
        public FundFriendsContext(DbContextOptions<FundFriendsContext> options)
            : base(options) { }


        //DbSets map models to database tables.
        public DbSet<FundApp.Models.Users> Users { get; set; } = default!;
    }
}
