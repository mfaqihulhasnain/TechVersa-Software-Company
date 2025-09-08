# Local Video Files for Process Demo

This folder contains local video files for the "Watch our process demo" modal.

## Supported Video Formats

- **MP4** (Recommended) - Best browser compatibility
- **WebM** - Good compression, modern browsers
- **OGG** - Fallback option

## How to Add Your Video

1. **Place your video file** in this folder
2. **Update the configuration** in `components/process.js`:
   ```javascript
   const videoConfig = {
     src: '/videos/your-video-name.mp4', // Update this path
     poster: '/images/video-thumbnail.jpg', // Optional thumbnail
     fallbackSrc: '/videos/your-video-name.webm', // Optional fallback
     title: 'Your Video Title'
   };
   ```

## Video Optimization Tips

- **File size**: Keep under 50MB for best performance
- **Duration**: 2-5 minutes is ideal for demo videos
- **Resolution**: 1920x1080 (1080p) is recommended
- **Compression**: Use H.264 codec for MP4 files

## Example Files

- `process-demo.mp4` - Main demo video
- `process-demo.webm` - Fallback format (optional)

## Thumbnail Image (Optional)

You can add a thumbnail image that shows before the video plays:
1. Place your thumbnail in `public/images/video-thumbnail.jpg`
2. The thumbnail will automatically be used as the video poster

## Benefits of Local Videos

- **Fast loading** - No external dependencies
- **Full control** - Complete customization
- **Offline support** - Works without internet
- **Privacy** - Your content stays on your server
- **No ads** - Clean viewing experience
