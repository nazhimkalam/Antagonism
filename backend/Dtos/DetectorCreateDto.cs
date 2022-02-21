using System.ComponentModel.DataAnnotations;

namespace Antagonism.Dtos
{
    public class DetectorCreateDto
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Result { get; set; }

    }
}
