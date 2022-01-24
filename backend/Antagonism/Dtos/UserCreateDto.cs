using System.ComponentModel.DataAnnotations;

namespace Antagonism.Dtos
{
    public class UserCreateDto
    {
        [Required]
        public string FullName { get; set; }

        [Required]
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }

    }
}
