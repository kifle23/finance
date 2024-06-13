using api.Dtos.Stock;
using api.Models;

namespace api.Mappers
{
    public static class StockMappers
    {
        public static StockResponseDTO ToDto(this Stock stockResponseDTO)
        {
            return new StockResponseDTO
            {
                Id = stockResponseDTO.Id,
                Symbol = stockResponseDTO.Symbol,
                Name = stockResponseDTO.Name,
                Purchase = stockResponseDTO.Purchase,
                LastDiv = stockResponseDTO.LastDiv,
                Industry = stockResponseDTO.Industry,
                MarketCap = stockResponseDTO.MarketCap
            };
        }

        public static Stock ToModel(this StockRequestDto stockRequestDto)
        {
            return new Stock
            {
                Symbol = stockRequestDto.Symbol,
                Name = stockRequestDto.Name,
                Purchase = stockRequestDto.Purchase,
                LastDiv = stockRequestDto.LastDiv,
                Industry = stockRequestDto.Industry,
                MarketCap = stockRequestDto.MarketCap
            };
        }
    }
}
