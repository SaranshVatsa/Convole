import nltk
from dataset import reviews
# data set of only 1 movie named "shawshank redemption"
opinion_data = []  # We will store opinion data here

for sent in reviews: # for every single review
    pos_tagged = nltk.word_tokenize(sent)  # bracking into words
    pos_tagged = nltk.pos_tag(pos_tagged)  # geting POS of words

    wordsCount = len(pos_tagged)
    for i in range(0, wordsCount):  # Moving from word to word
        # print(pos_tagged[i])
        if pos_tagged[i][1] == "JJ" or pos_tagged[i][1] == "JJS":
            if pos_tagged[i-1][1] == "DT" or pos_tagged[i-1][1] == "VBP":
                if pos_tagged[i+1][1] == "NN" or pos_tagged[i+1][1] == "NNS":
                    """
                    Appending all the opinion that satisify this (DT or VBP)(JJ or JJS)(NNS or NN)
                    """
                    opinion_data += [[pos_tagged[i-1][0], pos_tagged[i][0], pos_tagged[i+1][0]]]
                    print(pos_tagged[i-1][0], pos_tagged[i][0], pos_tagged[i+1][0])

"""
This is heuristical method therefore not good enough
"""

# print(opinion_data)
