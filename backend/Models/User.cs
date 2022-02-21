using System.ComponentModel.DataAnnotations;

namespace Antagonism.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string Email { get; set; }

    }
}
