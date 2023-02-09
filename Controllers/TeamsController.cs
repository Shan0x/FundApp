using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FundApp.Data;
using FundApp.Models;
using Microsoft.AspNetCore.Cors;

namespace FundApp
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeamsController : ControllerBase
    {
        private readonly FundFriendsContext _context;

        public TeamsController(FundFriendsContext context)
        {
            _context = context;
        }

        // GET: api/Teams
        [EnableCors]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Team>>> Getteam()
        {
          var team = _context.team.AsQueryable();

          if (_context.team == null)
          {
              return NotFound();
          }
            return await team.ToListAsync();
        }

        // GET: api/Teams/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Team>> GetTeam(int id)
        {
          if (_context.team == null)
          {
              return NotFound();
          }
            var team = await _context.team.FindAsync(id);

            if (team == null)
            {
                return NotFound();
            }

            return team;
        }

        // PUT: api/Teams/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeam(int id, Team team)
        {
            if (id != team.studentid)
            {
                return BadRequest();
            }

            _context.Entry(team).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TeamExists(id))
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

        // POST: api/Teams
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Team>> PostTeam(Team team)
        {
          if (_context.team == null)
          {
              return Problem("Entity set 'FundFriendsContext.team'  is null.");
          }
            _context.team.Add(team);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTeam", new { id = team.studentid }, team);
        }

        // DELETE: api/Teams/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeam(int id)
        {
            if (_context.team == null)
            {
                return NotFound();
            }
            var team = await _context.team.FindAsync(id);
            if (team == null)
            {
                return NotFound();
            }

            _context.team.Remove(team);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TeamExists(int id)
        {
            return (_context.team?.Any(e => e.studentid == id)).GetValueOrDefault();
        }
    }
}
