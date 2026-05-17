import re
import nltk
from nltk.tokenize import word_tokenize  # type: ignore
from nltk.corpus import stopwords  # type: ignore
from nltk.stem import WordNetLemmatizer  # type: ignore

nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('omw-1.4')


def preprocess_text(text):

    # Convert to lowercase
    text = text.lower()

    # Remove punctuation and special characters
    text = re.sub(r'[^a-zA-Z\s]', '', text)

    # Tokenization
    tokens = word_tokenize(text)

    # Stop word removal
    stop_words = set(stopwords.words('english'))

    filtered_tokens = []

    for word in tokens:
        if word not in stop_words:
            filtered_tokens.append(word)

    # Lemmatization
    lemmatizer = WordNetLemmatizer()

    processed_tokens = []

    for word in filtered_tokens:
        processed_tokens.append(lemmatizer.lemmatize(word))

    return processed_tokens