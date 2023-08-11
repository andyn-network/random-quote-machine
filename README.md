# random-quote-machine
 Random quote machine using vite, react and typescript. 

## Random Quote Machine

This React application displays random quotes and allows users to change the displayed quote along with its author. It also provides the option to tweet the displayed quote on Twitter.

### Imports

The necessary dependencies and styles are imported, including React components, FontAwesome icons, and the 'quotes.json' file containing an array of quote objects.

### Quote Interface

The `Quote` interface is defined using TypeScript to specify the structure of a quote object, including a `quote` string and an `author` string.

### Random Quote and Color Generation Functions

- The `getRandomQuote()` function selects a random quote from the imported `quotes` array using a random index.
- The `getRandomColor()` function generates a random RGB color by selecting random values for red, green, and blue components.

### Transition Animation

The `transition` constant defines the CSS transition property for smooth background color transitions.

### App Component

The main component named `App` is defined. It uses the `useState` hook to manage two state variables:
- `quote`: Stores the currently displayed quote.
- `randomColor`: Stores the background color.

### Change Quote Function

The `changeQuote` function updates the `quote` state with a new random quote and the `randomColor` state with a new random color.

### JSX Markup

The UI is structured using JSX markup:
- The main container with class `background` sets the background color based on the `randomColor` state.
- The `quote-box` div holds the quote content and buttons.
- The quote and author are displayed within the `quote-content` div, with text color set to the current `randomColor`.
- "Change Quote" and "Tweet Quote" buttons are provided, each with appropriate functionality and styling.

### Tweet Quote

The "Tweet Quote" button is an anchor tag (`<a>`) with its `href` set to a Twitter intent URL. The URL includes the quote's text, hashtags, and user mentions.

### Button Clicks

Event handlers are assigned to the "Change Quote" and "Tweet Quote" buttons:
- Clicking "Change Quote" triggers the `changeQuote` function to update the quote and color.
- Clicking "Tweet Quote" opens a new window to tweet the quote on Twitter.

### Export

The `App` component is exported as the default export of the module.
