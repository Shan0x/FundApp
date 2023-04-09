using FundApp.Data;
using Microsoft.EntityFrameworkCore;
using Npgsql;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Identity;
using FundApp.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

//*****************************************************************************
//Block of code that connects to the database server.
//ConnectionString can be found in appsettings.json
//# --- REMOTE --- #
//var conn = builder.Configuration.GetConnectionString("awsconnection");
//
//# --- LOCAL --- #
var conn = builder.Configuration.GetConnectionString("localconnection");
builder.Services.AddDbContext<FundFriendsContext>(options =>
    options.UseNpgsql(conn));
//*****************************************************************************


builder.Services.ConfigureApplicationCookie(options =>
{
    options.Cookie.Name = "FundFriends.Cookie";
    options.Cookie.HttpOnly = true;
    options.Cookie.SameSite = SameSiteMode.Strict;
    options.ExpireTimeSpan = System.TimeSpan.FromMinutes(60);
    options.LoginPath = "/api/auth/dashboard";
    //options.LogoutPath = "/api/auth/logout";
    options.SlidingExpiration = true;
});

//builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
//    .AddCookie(options =>
//    {
//        options.LoginPath = "/api/auth/dashboard";
//        //options.LogoutPath = "/api/auth/logout";
//    });



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
app.UseAuthentication();
app.UseCors();
app.MapControllers();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
