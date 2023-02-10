using FundApp.Data;
using Microsoft.EntityFrameworkCore;
using Npgsql;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//*****************************************************************************
//Block of code that connects to the database server.
//ConnectionString can be found in appsettings.json
var conn = builder.Configuration.GetConnectionString("awsconnection");
builder.Services.AddDbContext<FundFriendsContext>(options =>
    options.UseNpgsql(conn));
//*****************************************************************************


//builder.Services.AddControllersWithViews();
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseCors();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
