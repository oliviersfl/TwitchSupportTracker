using Microsoft.EntityFrameworkCore;
using webapi.Entities;

namespace webapi.Data
{
    public class MainDbContext : DbContext
    {
        public DbSet<Streamer> Streamers { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        public MainDbContext(DbContextOptions<MainDbContext> options)
        : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Transaction>()
                .HasOne(t => t.Streamer)
                .WithMany(s => s.Transactions)
                .HasForeignKey(t => t.StreamerId);
        }
    }

}
