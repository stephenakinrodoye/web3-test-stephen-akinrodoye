Instructions:
1. Create an input field for the user to type in their search query.
2. Display a list of items below the input field. Each item is a string of text.
3. As the user types in the search field, filter the list of items to show only those that contain the search query.
4. Highlight the matching part of the text in each item.
Sample Item List:
const items = [
  'JavaScript programming',
  'HTML and CSS basics',
  'Frontend development',
  'Web design principles',
  'Dynamic content handling'
]
Bonus:
- Implement case-insensitive searching.
- Maintain the original text structure and only wrap the matching part with a `<span>` for highlighting.
