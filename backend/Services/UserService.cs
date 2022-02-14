using System;
using System.Collections.Generic;
using System.Linq;
using Antagonism.Models;

namespace Antagonism.Services
{
    public class UserService : IUserService
    {
        private AntagonismContext _context;

        public UserService(AntagonismContext context) 
        {
            _context = context;    
        }

        public void CreateUser(User user)
        {
            if (user == null)
                throw new ArgumentNullException(nameof(user));

            _context.Users.Add(user);
        }

        public void DeleteUser(User user)
        {
            if (user == null)
                throw new ArgumentNullException(nameof(user));

            _context.Users.Remove(user);
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }

        public User GetUserById(int userId)
        {
            return _context.Users.FirstOrDefault(user => user.Id == userId);
        }

        public bool Save() => _context.SaveChanges() >= 0;

        async public void UpdateUser(User user)
        {
            try
            {
                User updateUser = _context.Users.Where(user_ => user_.Id.Equals(user.Id)).FirstOrDefault();

                if (updateUser == null)
                    throw new Exception("User not found");

                if (user.Email != null)
                    updateUser.Email = user.Email;

                if (user.FullName != null)
                    updateUser.FullName = user.FullName;

                if (user.FullName != null)
                    updateUser.UpdatedAt = DateTime.UtcNow.ToString();

                var response =  await _context.SaveChangesAsync();

                if (response != 0)
                    throw new Exception("Something went wrong when updating the user");
            }
            catch (Exception ex) {
                throw new Exception(ex.Message, ex);
            }
        }
    }
}
    