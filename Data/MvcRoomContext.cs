using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication2.Models;

namespace WebApplication2.Data
{
    public class MvcRoomContext : DbContext
    {
        public MvcRoomContext (DbContextOptions<MvcRoomContext> options) : base(options)
        {
        }

        public DbSet<Room> Room { get; set; }
    }
}
