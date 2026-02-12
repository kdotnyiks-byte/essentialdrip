# Hero Slideshow Background Images

## How to Use Your Custom Images

To replace the placeholder images with your custom sneaker photos:

### Option 1: Upload to Image Hosting (Recommended)
1. Upload your 5 sneaker images to an image hosting service like:
   - Imgur (https://imgur.com)
   - Cloudinary (https://cloudinary.com)
   - ImgBB (https://imgbb.com)

2. Get the direct image URLs for each image

3. Open `index.html` and replace the URLs in lines 63-67:
   ```html
   <div class="slide active" style="background-image: url('YOUR_IMAGE_1_URL');"></div>
   <div class="slide" style="background-image: url('YOUR_IMAGE_2_URL');"></div>
   <div class="slide" style="background-image: url('YOUR_IMAGE_3_URL');"></div>
   <div class="slide" style="background-image: url('YOUR_IMAGE_4_URL');"></div>
   <div class="slide" style="background-image: url('YOUR_IMAGE_5_URL');"></div>
   ```

### Option 2: Use Local Images
1. Create an `images` folder in your project if it doesn't exist
2. Copy your 5 sneaker images into the `images` folder
3. Name them: `slide1.jpg`, `slide2.jpg`, `slide3.jpg`, `slide4.jpg`, `slide5.jpg`
4. Update the URLs in `index.html`:
   ```html
   <div class="slide active" style="background-image: url('images/slide1.jpg');"></div>
   <div class="slide" style="background-image: url('images/slide2.jpg');"></div>
   <div class="slide" style="background-image: url('images/slide3.jpg');"></div>
   <div class="slide" style="background-image: url('images/slide4.jpg');"></div>
   <div class="slide" style="background-image: url('images/slide5.jpg');"></div>
   ```

## Image Recommendations
- **Resolution**: 1920x1080 or higher for best quality
- **Format**: JPG or PNG
- **File Size**: Keep under 500KB each for fast loading
- **Aspect Ratio**: 16:9 works best
- **Subject**: Center your sneakers in the frame for best visual impact

## Slideshow Features
- ✨ Smooth fade transitions (2 seconds)
- 🎬 Ken Burns zoom effect for dynamic feel
- ⏱️ Auto-advance every 5 seconds
- 🌑 Dark overlay for text readability
- 💫 Blue accent glow effect
- 📱 Fully responsive on all devices

## Current Images (Placeholders)
The slideshow currently uses Unsplash placeholder images. Replace them with your custom sneaker photos for the best effect!
