import fitz  # PyMuPDF

def extract_text_from_pdf(pdf_path):
    # Open the PDF file
    doc = fitz.open(pdf_path)
    
    text = ""
    # Iterate through each page
    for page_num in range(len(doc)):
        page = doc.load_page(page_num)  # zero-based page indexing
        text += page.get_text()  # extract text of the page
    
    return text

pdf_file = "example.pdf"
extracted_text = extract_text_from_pdf(pdf_file)
print(extracted_text)

