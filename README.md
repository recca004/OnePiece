# OnePiece Animation

This project showcases an animation featuring images from the popular OnePiece series. The animation is implemented using JavaScript and HTML, allowing the images to be dynamically loaded and displayed based on the user's scrolling behavior.

# Demo
https://recca004.github.io/OnePiece/

## Usage

To run the OnePiece animation locally, follow these steps:

1. Clone this repository:
    
    bashCopy code
    
    `git clone https://github.com/recca004/OnePiece.git`
    
2. Open the `index.html` file in your web browser.
    
3. Scroll within the animation container to view the images transitioning.

## Code Overview

The JavaScript code performs the following tasks:

1. Defines utility functions:
    
    - `zeroPaddedDigit`: Adds leading zeros to a digit.
    - `clamp`: Clamps a value between a minimum and maximum range.
    - `query`: A shorthand function for querying elements from the DOM.
2. Sets the total number of frames for the animation to 66 (`numFrames`).
    
3. Retrieves references to HTML elements:
    
    - `$container`: Represents the container element with the class "container".
    - `$image`: Represents the `<img>` element.
4. Defines functions to fetch and load the animation images:
    
    - `getImageUrl`: Generates the URL for a specific frame's image file based on the frame number.
    - `fetchImage`: Fetches and loads an image for a specific frame. Returns a `Promise` that resolves once the image has loaded.
    - `fetchImages`: Fetches all the images for the animation using `fetchImage`. Returns an array of `Promise` objects.
5. Defines functions to activate and update the animation frames:
    
    - `activateFrame`: Updates the source (`src`) of the `$image` element to display a specific frame's image.
    - `onImagesLoaded`: Called when all the images have finished loading. Adds the "has-loaded" class to the `<body>` element.
    - `onPageScrolled`: Called when the user scrolls within the `$container` element. Adds the "has-scrolled" class to the `<body>` element.
    - `getScrollAmount`: Calculates the scroll amount as a value between 0 and 1 (inclusive) based on the `$container` element's scroll position.
    - `getScrollFrame`: Maps the scroll amount to a specific frame number based on the total number of frames (`numFrames`).
    - `updateImage`: Updates the displayed image based on the current scroll position.
6. Adds a scroll event listener to the `$container` element, which calls `updateImage` and `onPageScrolled` when the user scrolls.
    
7. Uses `Promise.all` to wait for all the images to load. Once all images have loaded, it calls the `onImagesLoaded` function.

## Contributing

Contributions are welcome! Fork this repository and make your desired changes. Feel free to open an issue or submit a pull request for improvements or bug fixes.

## Acknowledgments

Special thanks to the creators of OnePiece for their amazing work and inspiration.

## Contact

For any inquiries or feedback, please contact https://www.linkedin.com/in/mario-neita/.
