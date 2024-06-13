using api.Dtos.Stock;
using api.Interfaces;
using api.Mappers;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StockController(IStockRepository stockRepo) : ControllerBase
    {
        private readonly IStockRepository _stockRepo = stockRepo;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<StockGetDto>>> GetStocks()
        {
            var stocks = await _stockRepo.GetAllAsync();
            if (stocks == null)
            {
                return NotFound();
            }

            var stocksDto = stocks.Select(stock => stock.ToGetDto());

            return Ok(stocksDto);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<StockGetDto>> GetStock(int id)
        {
            var stock = await _stockRepo.GetByIdAsync(id);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock.ToGetDto());
        }

        [HttpPost]
        public async Task<ActionResult<StockGetDto>> PostStock([FromBody] StockCreateDto stockRequestDto)
        {
            if (stockRequestDto == null)
            {
                return BadRequest("Stock data is null.");
            }

            var stock = stockRequestDto.ToModelCreate();
            await _stockRepo.CreateAsync(stock);

            return CreatedAtAction(nameof(GetStock), new { id = stock.Id }, stock.ToGetDto());
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutStock([FromRoute] int id, [FromBody] StockPutDto stockPutDto)
        {
            if (stockPutDto == null)
            {
                return BadRequest("Stock data is null.");
            }

            var stock = await _stockRepo.UpdateAsync(id, stockPutDto);
            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock.ToGetDto());
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStock([FromRoute] int id)
        {
            var stock = await _stockRepo.DeleteAsync(id);

            return NoContent();
        }
    }
}
