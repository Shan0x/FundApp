using FundApp.Models;
using Microsoft.EntityFrameworkCore;

namespace FundApp.Data
{
    public class FundFriendsContext : DbContext
    {
        public FundFriendsContext(DbContextOptions<FundFriendsContext> options)
            : base(options) { }

        public DbSet<FundApp.Models.Team> team { get; set; } = default!;
    }
}
