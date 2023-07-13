import React, { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import { TextField, Button, Typography } from "@mui/material";
// we are using material you to make the ui more interactive

const URLShortener: React.FC = () => {
  // State variables to hold the shortened link and user input
  const [shortenedLink, setShortenedLink] = useState("");
  const [userInput, setUserInput] = useState("");
  // using this to show the saved links 
  const [savedLinks, setSavedLinks] = useState<string[]>([]);

  useEffect(() => {
    // Load saved links from local storage on component mount
    const savedLinksFromStorage = localStorage.getItem("savedLinks");
    if (savedLinksFromStorage) {
      setSavedLinks(JSON.parse(savedLinksFromStorage));
    }
  }, []);

  // Function to fetch data from the API and set the shortened link
  const fetchData = async (): Promise<void> => {
    try {
      // Fetching data from the API and setting the shortened link
      // when we pass the url to the api it gives this response in return
      /*
      {
    "ok": true,
    "result": {
        "code": "kHk4TC",
        "short_link": "shrtco.de\/kHk4TC",
        "full_short_link": "https:\/\/shrtco.de\/kHk4TC",
        "short_link2": "9qr.de\/kHk4TC",
        "full_short_link2": "https:\/\/9qr.de\/kHk4TC",
        "short_link3": "shiny.link\/kHk4TC",
        "full_short_link3": "https:\/\/shiny.link\/kHk4TC",
        "share_link": "shrtco.de\/share\/kHk4TC",
        "full_share_link": "https:\/\/shrtco.de\/share\/kHk4TC",
        "original_link": "http:\/\/google.com"
    }
}
      */
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${userInput}`
      );
      const { full_short_link: shortenedUrl } = response.data.result;
      setShortenedLink(shortenedUrl);
      const updatedLinks = [...savedLinks, shortenedUrl];
      setSavedLinks(updatedLinks);
      localStorage.setItem("savedLinks", JSON.stringify(updatedLinks));
    } catch (error) {
      // if there is any errors encountered it will be catched here and will be displayed to the user
      console.log(error);
      // Display an error message to the user
      setShortenedLink("Error occurred. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleCopyToClipboard = () => {
    // Display a success message to the user after copying to clipboard
    alert("URL copied to clipboard!");
  };

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="text-center">
        <Typography variant="h4" color="green" gutterBottom>
          Infinity <span className="text-red-400">URL Shortener</span>
        </Typography>
        <div>
          {/* Input field for the user to enter the link */}
          <TextField
            label="Enter link to be shortened"
            variant="outlined"
            size="small"
            value={userInput}
            /*
           The onChange event handler is used to capture changes that occur in an input element, such as a text field or a dropdown menu. In this case, it is being used in the context of a user input field.
           */
            onChange={handleInputChange}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={fetchData}
            sx={{ ml: 2 }}
          >
            Submit URL
          </Button>
          <div className="mt-5">
            {shortenedLink && (
              <>
                <div>{shortenedLink}</div>
                <CopyToClipboard
                  text={shortenedLink}
                  onCopy={handleCopyToClipboard}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ ml: 2 }}
                  >
                    Copy URL to Clipboard
                  </Button>
                </CopyToClipboard>
              </>
            )}
          </div>
          <div className="mt-5">
            <Typography variant="h6" gutterBottom>
              Saved Links:
            </Typography>
            {savedLinks.map((link, index) => (
              <div key={index}>{link}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default URLShortener;
