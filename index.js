document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("image-container");
  const imageCount = imageContainer.childElementCount;

  // buttons
  const moveRightButton = document.getElementById("moveRightButton");
  const moveLeftButton = document.getElementById("moveLeftButton");

  //  change with the width of the frame and images
  const FrameWidth = 500;

  let containerWidth = 0;
  const maxWidth = (imageCount - 1) * FrameWidth;

  // create image bubbles
  createImageCounters(imageCount);
  const bubbles = document.querySelectorAll(".bubble");

  moveRightButton.addEventListener("click", function () {
    const moveRightReturn = moveRight(
      containerWidth,
      maxWidth,
      imageContainer,
      FrameWidth
    );
    containerWidth = moveRightReturn;
    imageIdentifier(containerWidth, FrameWidth);
  });

  moveLeftButton.addEventListener("click", function () {
    const moveLeftReturn = moveLeft(
      containerWidth,
      maxWidth,
      imageContainer,
      FrameWidth
    );
    containerWidth = moveLeftReturn;
    imageIdentifier(containerWidth, FrameWidth);
  });

  bubbles.forEach((bubble) => {
    bubble.addEventListener("click", function () {
      const result = goToImage(bubble.dataset.id, imageContainer, FrameWidth);
      containerWidth = result;
      imageIdentifier(containerWidth, FrameWidth);
    });
  });

  setInterval(() => {
    const moveRightReturn = moveRight(
      containerWidth,
      maxWidth,
      imageContainer,
      FrameWidth
    );
    containerWidth = moveRightReturn;
    imageIdentifier(containerWidth, FrameWidth);
  }, 5000);
});

function moveRight(containerWidth, maxWidth, imageContainer, FrameWidth) {
  if (containerWidth === maxWidth) {
    containerWidth = 0;
    imageContainer.style.right = `${containerWidth}px`;
    return containerWidth;
  } else {
    containerWidth += FrameWidth;
    imageContainer.style.right = `${containerWidth}px`;
    return containerWidth;
  }
}

function moveLeft(containerWidth, maxWidth, imageContainer, FrameWidth) {
  if (containerWidth === 0) {
    containerWidth = maxWidth;
    imageContainer.style.right = `${containerWidth}px`;
    return containerWidth;
  } else {
    containerWidth -= FrameWidth;
    imageContainer.style.right = `${containerWidth}px`;
    return containerWidth;
  }
}

function createImageCounters(imageCount) {
  const imageCounters = document.getElementById("image-counters");
  for (let i = 0; i < imageCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    bubble.dataset.id = i;
    if (i === 0) {
      bubble.classList.add("activeBubble");
    }
    imageCounters.append(bubble);
  }
}

function imageIdentifier(containerWidth, FrameWidth) {
  const bubbles = document.querySelectorAll(".bubble");
  const currentImage = containerWidth / FrameWidth;

  let newImage = bubbles[currentImage];

  bubbles.forEach((bubble) => (bubble.className = "bubble"));
  newImage.classList.add("activeBubble");
}

function goToImage(bubbleId, imageContainer, FrameWidth) {
  imageContainer.style.right = `${bubbleId * FrameWidth}px`;
  return bubbleId * FrameWidth;
}
