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
        [StringLength(20)]
        public string UserName { get; set; }

        [Required]
        public string Password { get; set; }

        public string CreatedAt { get; set; }

        public string UpdatedAt { get; set; }

    }
}
