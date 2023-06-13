const { min, max, floor } = Math
const zeroPaddedDigit = (digit) => `0${digit}`.slice(-2)
const clamp = (minV, maxV, value) => max(minV, min(maxV, value))
const query = document.querySelector.bind(document)

const numFrames = 64
const $container = query('.container')
const $image = query('img')

const getImageUrl = (frame) => {
  return `image/frame_${zeroPaddedDigit(frame)}_delay-0.05s.gif`
  
  
}

const fetchImage = (frame) =>
  new Promise(resolve => {
    let img = new Image()
    img.src = getImageUrl(frame)
    img.onload = resolve
  })

const fetchImages = () => {
  return Array.from(Array(numFrames), (_, i) => fetchImage(i))
}

const activateFrame = (frame) => {
  $image.src = getImageUrl(frame)
}

const onImagesLoaded = () => {
  document.body.classList.add('has-loaded')
}

const onPageScrolled = () => {
  document.body.classList.add('has-scrolled')
}

// Returns a number between 0 and 1, inclusive.
const getScrollAmount = ($el) => {
  return $el.scrollTop / ($el.scrollHeight - $el.clientHeight)
}

const getScrollFrame = (scrollAmount) => {
  const frame = floor(numFrames * scrollAmount)
  const overScrollFixedFrame = clamp(0, numFrames - 1, frame)
  return overScrollFixedFrame
}

const updateImage = () => {
  const scrollAmount = getScrollAmount($container)
  const frame = getScrollFrame(scrollAmount)
  activateFrame(frame)
}

$container.addEventListener('scroll', () => {
  updateImage()
  onPageScrolled()
})

Promise.all(fetchImages()).then(onImagesLoaded)