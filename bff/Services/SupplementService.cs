using System.Collections.Generic;

public class SupplementService
{
    public IEnumerable<Supplement> GetAll()
    {
        return new[] {
            new Supplement { Id = 1, Name = "Multivitamin", Description = "Daily multivitamin" },
            new Supplement { Id = 2, Name = "Omega-3", Description = "Fish oil supplements" }
        };
    }
}
