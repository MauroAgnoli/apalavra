const adviceButton = document.querySelector('#adviceButton');
const adviceBook = document.querySelector('#adviceBook');
const adviceChapter = document.querySelector('#adviceChapter');
const adviceText = document.querySelector('#adviceText');
function fetchBible() {
	fetch(
		'https://raw.githubusercontent.com/MauroAgnoli/bible/main/xml/nvi.min.xml'
	)
		.then((res) => {
			return res.text();
		})
		.then((xmlString) => {
			const xmlDocument = new DOMParser().parseFromString(
				xmlString,
				'text/xml'
			);
			const verseTag = xmlDocument.getElementsByTagName('v');
			const randomVerses = Math.floor(Math.random() * verseTag.length);

			const book =
				verseTag[randomVerses].parentNode.parentNode.getAttribute('name');
			const chapter = verseTag[randomVerses].parentNode.getAttribute('n');
			const verseText = verseTag[randomVerses].textContent;

			appendBible(book, chapter, verseText);
		});
}
function appendBible(book, chapter, verse) {
	adviceBook.textContent = book;
	adviceChapter.textContent = chapter;
	adviceText.textContent = verse;
}
adviceButton.addEventListener('click', () => {
	fetchBible();
});
