using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FundApp.Data;
using FundApp.Models;

namespace FundApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamMembersController : ControllerBase
    {
        private readonly FundFriendsContext _context;

        public TeamMembersController(FundFriendsContext context)
        {
            _context = context;
        }

        // GET: api/TeamMembers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeamMembers>>> Getteam_members()
        {
          if (_context.team_members == null)
          {
              return NotFound();
          }
            return await _context.team_members.ToListAsync();
        }

        // GET: api/TeamMembers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TeamMembers>> GetTeamMembers(int id)
        {
          if (_context.team_members == null)
          {
              return NotFound();
          }
            var teamMembers = await _context.team_members.FindAsync(id);

            if (teamMembers == null)
            {
                return NotFound();
            }

            return teamMembers;
        }

        // PUT: api/TeamMembers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeamMembers(int id, TeamMembers teamMembers)
        {
            if (id != teamMembers.studentid)
            {
                return BadRequest();
            }

            _context.Entry(teamMembers).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamMembersExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TeamMembers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TeamMembers>> PostTeamMembers(TeamMembers teamMembers)
        {
          if (_context.team_members == null)
          {
              return Problem("Entity set 'FundFriendsContext.team_members'  is null.");
          }
            _context.team_members.Add(teamMembers);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeamMembers", new { id = teamMembers.studentid }, teamMembers);
        }

        // DELETE: api/TeamMembers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeamMembers(int id)
        {
            if (_context.team_members == null)
            {
                return NotFound();
            }
            var teamMembers = await _context.team_members.FindAsync(id);
            if (teamMembers == null)
            {
                return NotFound();
            }

            _context.team_members.Remove(teamMembers);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeamMembersExists(int id)
        {
            return (_context.team_members?.Any(e => e.studentid == id)).GetValueOrDefault();
        }
    }
}
