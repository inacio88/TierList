using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Tier.Models
{
    public class ItemModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ImageId { get; set; }
        public int Ranking { get; set; }
        public int ItemType { get; set; }
    }
}