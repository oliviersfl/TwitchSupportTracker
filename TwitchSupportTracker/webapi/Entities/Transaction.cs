namespace webapi.Entities
{
    public class Transaction
    {
        public int Id { get; set; }
        public int StreamerId { get; set; }
        public string TransactionType { get; set; }
        public double AmountSpent { get; set; }
        public int? Bits { get; set; } // Nullable, because it's not marked as NOT NULL in your schema
        public DateTime TransactionDate { get; set; }
        public string Currency { get; set; }
        public string Notes { get; set; }

        // Navigation property for the related streamer
        public Streamer Streamer { get; set; }
    }
}
