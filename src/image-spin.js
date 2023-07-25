

/* Current image starts at 0 */
const currImagePos = 0;

/* Get the image box element */
const imageSpinBox = document.querySelector('.image-spin-box');

/* Get all the images inside the spinbox element */
const imagesToSpin = imageSpinBox.querySelectorAll('img');
const totalImages = imagesToSpin.length;

/* Calculate the angle between each image */
const anglePerImage = 360 / totalImages;

/* Set the initial angle to 0 */
let currentAngle = currImagePos > 0 ? currImagePos * anglePerImage : 0;

/* Flag to track if the motion should start */
let motionStarted = false;

/* 
TODO: 
- Handle mousedown event
- Handle mouseup event
- Handle mousemove event
 */

