# jokeapi
This is a web application which gets a random joke from an external API using an XML Request.

# How the web app works
1) The user clicks the random joke button which triggers an event listener running a "getJoke" function.

2) The function makes an XML request, displays the joke's setup and dynamically adds a "show punchline button".

3) Once the user clicks show punchline the punchline will be revealed. 

4)When the user clicks the random joke button again the function will remove the entire joke and show punchline button

5) Process begins again when user clicks the random joke button.
