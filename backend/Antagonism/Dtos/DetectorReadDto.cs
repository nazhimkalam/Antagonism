namespace Antagonism.Dtos
{
    public class DetectorReadDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int Result { get; set; }
        public string Description { get; set; }
        public string CreatedAt { get; set; }
        public string UpdatedAt { get; set; }
    }
}
