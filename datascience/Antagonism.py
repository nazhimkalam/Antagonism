
# # Antagonism
# 
# - This notebook contains code for the hate speech classification model.
# - This is a sentiment analaysis problem.
# - We will be using the Twitter dataset.
# - The term hate speech is understood as any type of verbal, written or behavioural communication that attacks or uses derogatory or discriminatory language against a person or group based on what they are, in other words, based on their religion, ethnicity, nationality, race, colour, ancestry, sex or another identity factor.
# 
# ### About the dataset
# - The data set we will use for the hate speech detection model consists of a test and train set. The training package includes a list of 31,962 tweets, a corresponding ID and a tag 0 or 1 for each tweet. The particular sentiment we need to detect in this dataset is whether or not the tweet is based on hate speech
# 
# - 0: NotHate
# - 1: Hate

# ### Importing libraries
import pandas as pd
import re
import pickle

from sklearn.utils import resample
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.linear_model import SGDClassifier

from sklearn.model_selection import train_test_split
from sklearn.metrics import f1_score, accuracy_score, precision_score

# ### Reading the Train and Test dataset 
train_data = pd.read_csv('dataset/train.csv')
test_data = pd.read_csv('dataset/test.csv')

# Reading first 15 rows of the training data
train_data.head(15)

# Size of dataset
print("Training Set:"% train_data.columns, train_data.shape) # 31962 rows for Training dataset
print("Testing Set:"% test_data.columns, test_data.shape)    # 171197 rows for Testing dataset

# ### Cleaning the dataset 
def  clean_text(df, text_field): #
    # This function removes all unnecessary characters from the text
    df[text_field] = df[text_field].str.lower()
    df[text_field] = df[text_field].apply(lambda elem: re.sub(r"(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)|^rt|http.+?", "", elem))  
    return df

train_clean = clean_text(train_data, "tweet")
test_clean = clean_text(test_data, "tweet")

# You can now see that the tweets are cleaned and readable
train_clean.head(15)

# Getting count of Negative and Positive label from train dataset
print("The count for NOT HATE label from train dataset: ", len(train_clean[train_clean.label == 0]))
print("The count for HATE label from train dataset: ", len(train_clean[train_clean.label == 1]))

# The output is clearly imbalanced

# ### Handling the imbalance in the data
train_not_hate = train_clean[train_clean.label == 0]
train_hate = train_clean[train_clean.label == 1]

train_hate_upsampled = resample(train_hate, 
                                replace=True,    
                                n_samples=len(train_not_hate),   
                                random_state=123)

train_upsampled = pd.concat([train_hate_upsampled, train_not_hate])
train_upsampled['label'].value_counts()


# ### Creating pipeline using sklearn
pipeline_sgd = Pipeline([('vect', CountVectorizer()), 
                         ('tfidf',  TfidfTransformer()), 
                         ('nb', SGDClassifier()),])


# ### Training the model 
X_train, X_test, y_train, y_test = train_test_split(train_upsampled['tweet'],
                                                    train_upsampled['label'],
                                                    random_state = 0)
model = pipeline_sgd.fit(X_train, y_train)


# ### Evaluating the model
y_predict = model.predict(X_test)
f1_score_result = f1_score(y_test, y_predict)
accuracy_score_result = accuracy_score(y_test, y_predict)
precision_score_result = precision_score(y_test, y_predict)

print("F1 score %s" % round(f1_score_result*100, 2), "%")
print("Accuracy score %s" % round(accuracy_score_result*100, 2), "%")
print("Precision score %s" % round(precision_score_result*100, 2), "%")

# ### Saving model
pickle.dump(model, open("antagonism_model", 'wb'))

# ### Loading model
loaded_model = pickle.load(open("antagonism_model", 'rb'))

# ### Testing the model
def clean_text(text):
    text = text.lower()
    text = re.sub(r"(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)|^rt|http.+?", "", text)
    return text

test_data = pd.read_csv('dataset/test.csv')

for i in range (test_data.size):
    sampleTestTweet = test_data.iloc[i].tweet
    sampleTestTweet = clean_text(sampleTestTweet)

    output = ["Not hate", "hate"]
    result = loaded_model.predict(pd.Series(sampleTestTweet))[0]
    if(result == 1):
        print(sampleTestTweet, "<==>", output[result])
        print()
