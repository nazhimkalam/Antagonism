
using System.Collections.Generic;
using Antagonism.Models;

namespace Antagonism.Services
{
    public interface IUserService
    {
        // returns a collection of Users
        IEnumerable<User> GetAllUsers();

        // returns a single User
        User GetUserById(int id);

        // Creating a user 
        void CreateUser(User user);

        // for saving the data in the database
        bool Save();

        // Updating a user
        void UpdateUser(User user);

        // Delete a user
        void DeleteUser(User user);
    }
}
