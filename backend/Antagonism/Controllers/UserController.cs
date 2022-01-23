using AutoMapper;
using Antagonism.Models;
using Antagonism.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Antagonism.Dtos;

namespace Antagonism.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<User>> GetAllUsers()
        {
            var users = _userService.GetAllUsers();
            return Ok(_mapper.Map<IEnumerable<UserReadDto>>(users));
        }
    }
}
