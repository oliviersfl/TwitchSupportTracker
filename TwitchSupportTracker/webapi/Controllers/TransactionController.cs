using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Entities;
using webapi.Services;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly TransactionService _transactionService;

        public TransactionController(TransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpGet]
        public ActionResult<List<Transaction>> GetAll()
        {
            return _transactionService.GetAllTransactions();
        }

        [HttpGet("{id}")]
        public ActionResult<Transaction> GetById(int id)
        {
            var transaction = _transactionService.GetTransactionById(id);
            if (transaction == null)
            {
                return NotFound();
            }
            return transaction;
        }

        [HttpPost]
        public ActionResult<Transaction> Create(Transaction transaction)
        {
            _transactionService.AddTransaction(transaction);
            return CreatedAtAction(nameof(GetById), new { id = transaction.Id }, transaction);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Transaction transaction)
        {
            if (id != transaction.Id)
            {
                return BadRequest();
            }
            _transactionService.UpdateTransaction(transaction);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _transactionService.DeleteTransaction(id);
            return NoContent();
        }
    }

}
