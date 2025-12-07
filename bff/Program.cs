using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<SupplementService>();
builder.Services.AddCors(options => options.AddDefaultPolicy(policy =>
{
    policy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
}));

var app = builder.Build();

app.UseCors();

app.MapGet("/api/supplements", (SupplementService svc) => Results.Ok(svc.GetAll()));

app.Run();

public partial class Program { }
