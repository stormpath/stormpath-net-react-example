using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Stormpath.AspNetCore;
using Stormpath.Configuration.Abstractions;

namespace stormpath_net_react_example
{
  public class Startup
  {
    public Startup(IHostingEnvironment env)
    {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
          .AddEnvironmentVariables();
      Configuration = builder.Build();
    }

    public IConfigurationRoot Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddStormpath(new StormpathConfiguration()
      {
        Web = new WebConfiguration()
        {
          Produces = new string[] { "application/json" },
          ForgotPassword = new WebForgotPasswordRouteConfiguration()
          {
            Uri = "/api/forgot"
          },
          ChangePassword = new WebChangePasswordRouteConfiguration()
          {
            Uri = "/api/change"
          },
          Login = new WebLoginRouteConfiguration()
          {
            Uri = "/api/login"
          },
          Oauth2 = new WebOauth2RouteConfiguration()
          {
            Uri = "/api/oauth/token"
          },
          Me = new WebMeRouteConfiguration()
          {
            Uri = "/api/me"
          },
          Logout = new WebLogoutRouteConfiguration()
          {
            Uri = "/api/logout"
          },
          Register = new WebRegisterRouteConfiguration()
          {
            Uri = "/api/register"
          },
          VerifyEmail = new WebVerifyEmailRouteConfiguration()
          {
            Uri = "/api/verify"
          }
        }
      });

      // Add framework services.
      services.AddMvc();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      loggerFactory.AddConsole(Configuration.GetSection("Logging"));
      loggerFactory.AddDebug();

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
        {
          HotModuleReplacement = true,
          ReactHotModuleReplacement = true
        });
      }
      else
      {
        app.UseExceptionHandler("/Home/Error");
      }

      app.UseStaticFiles();
      app.UseStormpath();

      app.UseMvc(routes =>
      {
        routes.MapRoute(
                  name: "default",
                  template: "{controller=Home}/{action=Index}/{id?}");

        routes.MapRoute(
                  name: "api",
                  template: "api/{controller=Default}/{action=Index}/{id?}"
              );

        routes.MapSpaFallbackRoute(
                  name: "spa-fallback",
                  defaults: new { controller = "Home", action = "Index" });

      });
    }
  }
}
