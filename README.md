# research-navibot

Ashe is an artificially intelligent chatbot trained with machine learning to answer questions about research and scholarship at the University of Miami.

Description of each file in the application.
//- intents.json is a list of potential user intentions, separated by tags. Each tag has patterns (potential user inputs), and a series of relevant responses.

//- training_bot.ipynb The training bot reads in the json file, then a for loop tokenizes and lemmatizes the words in each pattern, adds them to objects, and creates pickle files. It then randomizes the words and creates an object with the training data array. A sequential model with a neural network then trains the model to match responses with intents, and then saves the model as a binary .h5 file.

//app.py loads in the model, the json file of intents and responses, and the pickles of words and classes created by the training_bot. The nltk library cleans up sentences input by users, predicts the class to which it belongs, and provides a response. It then renders an html template with the chatbox. The user's input routes to an address /get/<msg> and is jsonified. The bot's response to any user input (msg) goes to a div with id "bot_response".

//index.html contains a div with class "wrapper" that contains the chatbot intro, a typing field for users with a send button and a space for the bot's responses. When users click "Send," it runs the function get_comment() from an app.js file. 

//app.js gets the user's input in the div with id "data", uses d3.json to read the get/[user input] json object and returns the bot's response.