import requests
from bs4 import BeautifulSoup
import re

def get_citation_count():
    url = "https://scholar.google.com/citations?user=UNchM2kAAAAJ"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    citation_element = soup.find('td', {'class': 'gsc_rsb_std'})
    return citation_element.text

def update_html_file(citation_count):
    with open("index.html", "r") as file:
        content = file.read()
    content = re.sub(r'(<span id="citation-count">)(\d+)(</span>)', fr'\g<1>{citation_count}\g<3>', content)
    with open("index.html", "w") as file:
        file.write(content)

if __name__ == "__main__":
    citation_count = get_citation_count()
    update_html_file(citation_count)