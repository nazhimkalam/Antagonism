using Antagonism.Models;
using Microsoft.EntityFrameworkCore;

namespace Antagonism.Services
{
    public class AntagonismContext : DbContext
    {
        public AntagonismContext(DbContextOptions<AntagonismContext> opt) : base(opt)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Detector> Detections { get; set; }
    }
}



