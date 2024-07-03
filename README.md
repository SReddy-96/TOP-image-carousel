# Image Carousel

## Objective
Using vanilla HTML, CSS and JavaScript build responsive image carousel.
### Key Points:
- Arrow either side to navigate through the images.
- Bubbles at the bottom of the carousel to show where you are in the order of image.
- The bubbles, if clicked, take the user to the desired image.
- It will also run on a 5second timer and syphon through the image one at a time in order.
- Minimal hard coding of measurements, so its easy to add more or less images to the carousel.

## Model 
### Index
![Demo Gif](image-carousel.gif)

The main premise of the layout of this project is having a image frame which shows the images that'll be displayed. Then a separate container that holds all the images, which then using `position: absolute;` then adjusting the `right` style to scroll through the images using the `width` of the frame and image to go from one to the next.

Using `dataset` in each bubble, i could easily match the bubble to the images making it easier to click from one image to the next. `setInterval` was great to run the `moveRight()` function every 5 seconds and with a little animation to give the carousel a bit of character.

Providing variables at beginning of the file to handle the width and to also work out the amount of images inside the `image-container` to work out the amount of pixels to move right to display the correct image. This make it so much easier to add or remove images to the container and the JavaScript will handle the rest, handling the image bubbles and the amount of pixels to move.

## Problems Encountered
- How to get the amount of children in an element.
- How to match the bubbles to the correct image.
- How to display the correct images and using buttons to show them.

## New Skills Acquired
- Using `childElementCount` to get the number rof images in the container.
- Using `dataset` to match the bubble id with the images index in the container.
- `Absolute` and `right` were super valuable to display the correct image.

## Technologies Used
- HTML
- CSS
- JavaScript
