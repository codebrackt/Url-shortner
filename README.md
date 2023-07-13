# URL Shortener

This is a React application that allows users to shorten URLs using the [shrtco.de](https://shrtco.de/) API. It provides a simple user interface for entering a URL and generating a shortened version of it. The application also saves the generated links for future reference.

## Getting Started

To run this application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project directory.
3. Start the development server with `npm start`.
4. Access the application in your web browser at `http://localhost:3000`.

## Features

- User input: Users can enter the URL they want to shorten in the input field provided.
- Shortened link generation: When the user clicks the "Submit URL" button, the application sends a request to the shrtco.de API to generate a shortened link based on the user's input.
- Copy to clipboard: Users can copy the generated shortened link to their clipboard by clicking the "Copy URL to Clipboard" button.
- Saved links: The application keeps track of the generated shortened links and displays them under the "Saved Links" section. The links are also saved in the local storage for persistence.

## Dependencies

This application uses the following dependencies:

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [react-copy-to-clipboard](https://www.npmjs.com/package/react-copy-to-clipboard): A React component that allows copying text to the clipboard.
- [axios](https://axios-http.com/): A popular JavaScript library for making HTTP requests.
- [@mui/material](https://mui.com/): A set of React components implementing Google's Material Design.

## Usage

1. Open the application in your web browser.
2. Enter the URL you want to shorten in the "Enter link to be shortened" input field.
3. Click the "Submit URL" button.
4. The application will generate a shortened link and display it below the input field.
5. To copy the shortened link to your clipboard, click the "Copy URL to Clipboard" button.
6. The generated link will also be saved under the "Saved Links" section for future reference.

## Notes

- If an error occurs during the URL shortening process, an error message will be displayed to the user.
