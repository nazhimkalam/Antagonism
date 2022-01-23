using System.ComponentModel.DataAnnotations;

namespace Antagonism.Models
{
    public class Detector
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }

        [Required]
        public int Result { get; set; }

        [Required]
        public string Description { get; set; }

        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
    }
}
