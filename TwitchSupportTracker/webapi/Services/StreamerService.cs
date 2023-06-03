using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Entities;

namespace webapi.Services
{
    public class StreamerService
    {
        private readonly MainDbContext _context;

        public StreamerService(MainDbContext context)
        {
            _context = context;
        }

        public List<Streamer> GetAllStreamers()
        {
            return _context.Streamers.Include(s => s.Transactions).ToList();
        }

        public Streamer GetStreamerById(int id)
        {
            return _context.Streamers.Include(s => s.Transactions).FirstOrDefault(s => s.Id == id);
        }

        public void AddStreamer(Streamer streamer)
        {
            _context.Streamers.Add(streamer);
            _context.SaveChanges();
        }

        public void UpdateStreamer(Streamer streamer)
        {
            _context.Streamers.Update(streamer);
            _context.SaveChanges();
        }

        public void DeleteStreamer(int id)
        {
            var streamer = _context.Streamers.FirstOrDefault(s => s.Id == id);
            if (streamer != null)
            {
                _context.Streamers.Remove(streamer);
                _context.SaveChanges();
            }
        }
    }
}
