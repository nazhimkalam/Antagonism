using System.ComponentModel.DataAnnotations;

namespace Antagonism.Dtos
{
    public class DetectorCreateDto
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public int Result { get; set; }
        [Required]
        public string Description { get; set; }

    }
}
