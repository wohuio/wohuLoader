# CLAUDE.md - Wohu Loader Component

This is a simple animated loader component featuring a bee (Hummel) icon with configurable animations.

## Project Overview

The Wohu Loader provides an animated loading indicator with multiple animation styles. This is a standalone HTML/CSS/JavaScript component, not a WeWeb custom element.

## Files

- `hummel-loader.html` - Configurable loader with multiple animation modes
- `hummel-animation.html` - Simple diagonal flying animation
- `hummel.png` - Bee icon image
- `README.md` - German documentation

## Usage

### Simple Diagonal Animation

Open `hummel-animation.html` directly in a browser to see the bee fly diagonally from bottom-left to top-right.

### Configurable Loader

Open `hummel-loader.html` and configure the animation via JavaScript:

```javascript
const config = {
    animation: 'diagonal', // Animation type
    size: 150,             // Size in pixels
    duration: 8,           // Duration for diagonal animation (seconds)
    pulseDuration: 2,      // Duration for pulse animation (seconds)
    spinDuration: 2        // Duration for spin animation (seconds)
};
```

## Available Animations

1. **diagonal** - Flies diagonally from bottom-left to top-right
2. **pulse** - Pulsates (scales larger and smaller)
3. **spin** - Rotates around its center
4. **bounce** - Bounces up and down
5. **pulse-spin** - Combination of pulse and spin

## Configuration Options

### Animation Types

- `animation`: String - One of: 'diagonal', 'pulse', 'spin', 'bounce', 'pulse-spin'
- `size`: Number - Bee icon size in pixels (default: 150)
- `duration`: Number - Duration for diagonal animation in seconds (default: 8)
- `pulseDuration`: Number - Duration for pulse effect in seconds (default: 2)
- `spinDuration`: Number - Duration for spin effect in seconds (default: 2)

### Changing Animations

To change the animation, modify the config object and call `applyConfig()`:

```javascript
config.animation = 'pulse';
config.pulseDuration = 1.5;
applyConfig();
```

## Technical Details

### Animation Implementation

All animations are pure CSS using `@keyframes`:

- **Diagonal**: Uses `left` and `bottom` positioning with opacity fade
- **Pulse**: Uses `transform: scale()` with opacity changes
- **Spin**: Uses `transform: rotate()`
- **Bounce**: Uses `transform: translateY()`
- **Pulse-Spin**: Combines pulse and spin animations

### Image Display

The bee icon is loaded as an external PNG file using CSS `background-image`:

```css
.hummel {
    background-image: url('hummel.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
```

### Browser Compatibility

Works in all modern browsers supporting CSS animations:
- Chrome/Edge
- Firefox
- Safari
- Opera

## Project History

This loader was created with the following requirements:
- Transparent background
- No rotation for the bee (it should fly naturally)
- 8-second duration for diagonal flight
- 150px size
- One-time animation loop (not infinite)
- Multiple configurable animation modes

## Development Notes

- Original bee icon: `/Users/keller/Desktop/Schwarz_Icon.png`
- Component uses external PNG file reference (not base64) to avoid display issues
- All animations are CSS-based for optimal performance
- No JavaScript frameworks required - vanilla HTML/CSS/JS
