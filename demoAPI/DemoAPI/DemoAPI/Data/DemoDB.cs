using DemoAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace DemoAPI.Data
{
    public class DemoDB : DbContext
    {
        public DemoDB(DbContextOptions opt): base(opt) { }
        public DbSet<Employee> employees { get; set; }
    }
}
