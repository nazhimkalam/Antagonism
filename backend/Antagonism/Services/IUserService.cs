
using System.Collections.Generic;
using Antagonism.Models;

namespace Antagonism.Services
{
    public interface IUserService
    {
        IEnumerable<User> GetAllUsers();

        User GetUserById(int id);

        void CreateUser(User user);

        bool Save();

        void UpdateUser(User user);

        void DeleteUser(User user);
    }
}
