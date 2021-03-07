# research-navibot

Ashe is an artificially intelligent chatbot trained with machine learning 
to answer questions about research and scholarship at the University of Miami.

Description of each file in the application.
//- intents.json is a list of potential user intentions, separated by tags. Each tag
has patterns (potential user inputs), and a series of relevant responses.

//- training_bot.ipynb The training bot reads in the json file, then a for loop
tokenizes and lemmatizes the words in each pattern and adds them to objects,
and creates pickle files. 