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

        [HttpGet("{id}", Name = "GetUserById")]
        public ActionResult<UserReadDto> GetUserById(int id)
        {
            var user = _userService.GetUserById(id);
            if (user != null)
            {
                return Ok(_mapper.Map<UserReadDto>(user));
            }
            return NotFound();
        }

        [HttpPost]
        public ActionResult<UserReadDto> CreateUser(UserCreateDto createUserReq)
        {
            var userModel = _mapper.Map<User>(createUserReq);
            _userService.CreateUser(userModel);
            _userService.Save();

            var resultUser = _mapper.Map<UserReadDto>(userModel);

            return CreatedAtRoute(nameof(GetUserById), new { Id = resultUser.Id }, resultUser);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateUser(int id, UserUpdateDto updateUserReq)
        {
            var userToUpdate = _userService.GetUserById(id);
            if (userToUpdate == null)
            {
                return NotFound();
            }

            _mapper.Map(updateUserReq, userToUpdate);
            _userService.UpdateUser(userToUpdate);
            _userService.Save();

            var updatedResult = _userService.GetUserById(id);
            return Ok(_mapper.Map<UserReadDto>(updatedResult));
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteUser(int id)
        {

            var userToDelete = _userService.GetUserById(id);
            if (userToDelete == null)
            {
                return NotFound();
            }

            _userService.DeleteUser(userToDelete);
            _userService.Save();

            return Ok("Deleted Successfully object with id = " + userToDelete.Id);
        }

    }
}
