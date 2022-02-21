using Antagonism.Dtos;
using Antagonism.Models;
using AutoMapper;

namespace Users.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            // Source -> Target
            CreateMap<User, UserReadDto>();
            CreateMap<UserCreateDto, User>();
            CreateMap<UserUpdateDto, User>();

        }
    }

}