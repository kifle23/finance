using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    public class Stock
    {
        public int Id { get; set; }
        public string Symbol { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;

        [Column(TypeName = "decimal(18, 2)")]
        public decimal Purchase { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal LastDiv { get; set; }
        public string Industry { get; set; } = string.Empty;
        public long MarketCap { get; set; }

        public List<Comment> Comments { get; set; } = [];
    }
}
