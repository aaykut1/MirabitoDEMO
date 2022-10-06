using DemoAPI.Data;
using DemoAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DemoAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly DemoDB DemoDB;
        public EmployeesController(DemoDB demoDB)
        {
            this.DemoDB = demoDB;
        }
        [HttpGet]
        public async Task<IActionResult> GetEmployees()
        {

            var employees = await DemoDB.employees.ToListAsync();
            return Ok(employees);
        }

        [HttpGet("{id:Guid}")]
        public async Task<IActionResult> GetEmployeeById(Guid id)
        {
            var employee = await DemoDB.employees.FirstOrDefaultAsync(x => x.id == id);
            if (employee == null) return NotFound();
            return Ok(employee);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployee(Employee employeRequest)
        {
            employeRequest.id = Guid.NewGuid();
            await DemoDB.employees.AddAsync(employeRequest);
            await DemoDB.SaveChangesAsync();
            return Ok(employeRequest);
        }

        [HttpPut("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee(Guid id, Employee updatedEmployee)
        {

            var employee = await DemoDB.employees.FirstAsync(x => x.id == updatedEmployee.id);

            if (employee == null) return NotFound();
            employee.id = updatedEmployee.id;
            employee.first_name = updatedEmployee.first_name;
            employee.last_name = updatedEmployee.last_name;
            employee.salary = updatedEmployee.salary;

            await this.DemoDB.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpDelete("{id:Guid}")]
        public async Task<IActionResult> DeleteEmployee(Guid id)
        {
            var employee = await DemoDB.employees.FindAsync(id);
            if (employee == null) return NotFound();
            DemoDB.employees.Remove(employee);
            await this.DemoDB.SaveChangesAsync();
            return Ok(employee);
        }
    }
}
