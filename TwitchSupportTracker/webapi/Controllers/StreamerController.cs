using Microsoft.AspNetCore.Mvc;
using webapi.Entities;
using webapi.Services;

namespace webapi.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class StreamerController : ControllerBase
    {
        private readonly StreamerService _streamerService;

        public StreamerController(StreamerService streamerService)
        {
            _streamerService = streamerService;
        }

        [HttpGet]
        public ActionResult<List<Streamer>> GetAll()
        {
            return _streamerService.GetAllStreamers();
        }

        [HttpGet("{id}")]
        public ActionResult<Streamer> GetById(int id)
        {
            var streamer = _streamerService.GetStreamerById(id);
            if (streamer == null)
            {
                return NotFound();
            }
            return streamer;
        }

        [HttpPost]
        public ActionResult<Streamer> Create(Streamer streamer)
        {
            _streamerService.AddStreamer(streamer);
            return CreatedAtAction(nameof(GetById), new { id = streamer.Id }, streamer);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Streamer streamer)
        {
            if (id != streamer.Id)
            {
                return BadRequest();
            }
            _streamerService.UpdateStreamer(streamer);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _streamerService.DeleteStreamer(id);
            return NoContent();
        }
    }

}
