using api.Dtos.Comment;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommentController(ICommentRepository commentRepository, IStockRepository stockRepository) : ControllerBase
    {
        private readonly ICommentRepository _commentRepository = commentRepository;
        private readonly IStockRepository _stockRepository = stockRepository;

        [HttpGet]
        public async Task<ActionResult<List<Comment>>> GetAll()
        {
            var comments = await _commentRepository.GetAllAsync();
            var commentDtos = comments.Select(x => x.ToCommentDto()).ToList();
            return Ok(commentDtos);

        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<Comment>> GetById([FromRoute] int id)
        {
            var comment = await _commentRepository.GetByIdAsync(id);
            if (comment == null)
            {
                return NotFound();
            }

            return Ok(comment.ToCommentDto());
        }

        [HttpPost]
        [Route("{stockId:int}")]
        public async Task<ActionResult<Comment>> Create([FromRoute] int stockId, CreateCommentDto commentDto)
        {
            var stock = await _stockRepository.GetByIdAsync(stockId);
            if (stock == null)
            {
                return BadRequest("Stock not found");
            }

            var comment = commentDto.ToCommentFromDto(stockId);
            var createdComment = await _commentRepository.CreateAsync(comment);
            return CreatedAtAction(nameof(GetById), new { id = createdComment.Id }, createdComment);
        }

        
        [HttpPut]
        [Route("{id:int}")]
        public async Task<ActionResult<Comment>> Update([FromRoute] int id, [FromBody] UpdateCommentRequestDto updateDto)
        {
            var updatedComment = await _commentRepository.UpdateAsync(id, updateDto.ToCommentFromUpdate(id));
            if (updatedComment == null)
            {
                return NotFound();
            }

            return updatedComment;
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<ActionResult<Comment>> Delete([FromRoute] int id)
        {
            var deletedComment = await _commentRepository.DeleteAsync(id);
            if (deletedComment == null)
            {
                return NotFound("Comment does not exist");
            }

            return Ok(deletedComment);
        }
    }
}
