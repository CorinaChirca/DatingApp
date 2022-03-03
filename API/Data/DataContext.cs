using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        //costructor
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //numele tabelei
        public DbSet<AppUser> Users { get; set; }
    }
}