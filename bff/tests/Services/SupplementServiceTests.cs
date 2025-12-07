using Xunit;

public class SupplementServiceTests
{
    [Fact]
    public void GetAll_ReturnsSeedData()
    {
        var svc = new SupplementService();
        var data = svc.GetAll();
        Assert.NotNull(data);
        Assert.Contains(data, s => s.Name == "Multivitamin");
    }
}
