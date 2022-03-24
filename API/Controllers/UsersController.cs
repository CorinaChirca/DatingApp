using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }

        //returnez toti userii(deci o lista)
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
        {
            ////return await _context.Users.ToListAsync();

            //var users = await _userRepository.GetUsersAsync();
            //var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);
            //return Ok(usersToReturn);

            var users = await _userRepository.GetMembersAsync();
            return Ok(users);
        }

        // api/users/3
        //returnez doar un user
        [HttpGet("{id}")]
        [Authorize]
        //[HttpGet("{username}")]
        public async Task<ActionResult<MemberDto>> GetUser(int id)
        {
            //var user = await _userRepository.GetUserByIdAsync(id);
            //return _mapper.Map<MemberDto>(user);

            return await _userRepository.GetMemberAsync(id);
            //return await _userRepository.GetUserByUsernameAsync(username);  -- in functie declar string username
        }
    }
}