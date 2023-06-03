using System.Transactions;

namespace webapi.Entities
{
    public class Streamer
    {
        public int Id { get; set; }
        public string StreamerName { get; set; }
        public string TwitchId { get; set; }

        // Navigation property for related transactions
        public List<Transaction> Transactions { get; set; }
    }
}
