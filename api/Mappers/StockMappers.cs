using api.Dtos.Stock;
using api.Models;

namespace api.Mappers
{
    public static class StockMappers
    {
        public static StockGetDto ToGetDto(this Stock stockGetDto)
        {
            return new StockGetDto
            {
                Id = stockGetDto.Id,
                Symbol = stockGetDto.Symbol,
                Name = stockGetDto.Name,
                Purchase = stockGetDto.Purchase,
                LastDiv = stockGetDto.LastDiv,
                Industry = stockGetDto.Industry,
                MarketCap = stockGetDto.MarketCap
            };
        }

        public static Stock ToModelCreate(this StockCreateDto stockCreateDto)
        {
            return new Stock
            {
                Symbol = stockCreateDto.Symbol,
                Name = stockCreateDto.Name,
                Purchase = stockCreateDto.Purchase,
                LastDiv = stockCreateDto.LastDiv,
                Industry = stockCreateDto.Industry,
                MarketCap = stockCreateDto.MarketCap
            };
        }

        public static Stock ToModelPut(this StockPutDto stockPutDto)
        {
            return new Stock
            {
                Symbol = stockPutDto.Symbol,
                Name = stockPutDto.Name,
                Purchase = stockPutDto.Purchase,
                LastDiv = stockPutDto.LastDiv,
                Industry = stockPutDto.Industry,
                MarketCap = stockPutDto.MarketCap
            };
        }
    }
}
