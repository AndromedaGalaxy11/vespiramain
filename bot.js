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

bot.run('https://gyazo.com/b004f5a7ffee4a4513c7aec0cb79c667')
