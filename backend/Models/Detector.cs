using System.ComponentModel.DataAnnotations;

namespace Antagonism.Models
{
    public class Detector
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        [Required]
        public int Result { get; set; }

        [Required]
        public string Description { get; set; }
    }
}
