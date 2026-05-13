import pdfplumber  # type: ignore
import re

def extract_text_from_pdf(pdf_path):

    text = ""

    with pdfplumber.open(pdf_path) as pdf:

        for page in pdf.pages:

            extracted_text = page.extract_text()

            if extracted_text:
                text += extracted_text + "\n"

    # Remove multiple spaces
    text = re.sub(r'\s+', ' ', text)

    # Remove repeated characters
    text = re.sub(r'(.)\1{4,}', r'\1', text)

    return text