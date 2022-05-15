using Backend.DbContexts;
using Backend.Repositories;
using Backend.Services;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("policy",
    builder =>
    {
                    builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle


builder.Services.AddDbContext<MovieDbContext>();
builder.Services.AddTransient<IMovieRepository, MovieRepository>();
builder.Services.AddTransient<IMovieService, MovieService>();

var app = builder.Build();

using (var context = new MovieDbContext()) { context.Database.EnsureCreated(); } // Seed

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{

}


app.UseRouting();

app.UseCors("policy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});

app.Run();
