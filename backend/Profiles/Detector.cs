using Antagonism.Dtos;
using Antagonism.Models;
using AutoMapper;

namespace Detectors.Profiles
{
    public class DetectorProfile : Profile
    {
        public DetectorProfile()
        {
            // Source -> Target
            CreateMap<Detector, DetectorReadDto>();
            CreateMap<DetectorCreateDto, Detector>();

        }
    }

}