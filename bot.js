bot = commands.Bot(command_prefix='$')

@bot.event
async def on_ready():
    print('Logged in as')
    print(bot.user.name)
    print(bot.user.id)
    print('------')

@bot.command()
async def greet(ctx):
    await ctx.send(":smiley: :wave: Up yours!")

bot.run('NDQ0Nzg0OTM1Njk0MjM3NzA4.DeNHOg.M9gNY80oeZ4BN7FaRIg_78Bx9FA')
