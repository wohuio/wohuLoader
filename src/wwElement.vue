<template>
  <div class="wohu-loader" :style="loaderStyle">
    <div
      class="hummel-container"
      :class="[
        `animation-${content?.animation || 'diagonal'}`,
        fadeEffect !== 'none' ? `fade-${fadeEffect}` : ''
      ]"
      :style="hummelStyle"
    >
      <img
        :src="imageUrl"
        alt="Hummel Loader"
        class="hummel-image"
      />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'WohuLoader',
  props: {
    uid: { type: String, required: true },
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  setup(props) {
    const imageUrl = computed(() => {
      return props.content?.customImage || 'https://raw.githubusercontent.com/wohuio/wohuLoader/main/hummel.png';
    });

    const fadeEffect = computed(() => {
      return props.content?.fadeEffect || 'fade';
    });

    const loaderStyle = computed(() => {
      const horizontalAlign = props.content?.horizontalAlign || 'center';
      const verticalAlign = props.content?.verticalAlign || 'center';

      let justifyContent = 'center';
      if (horizontalAlign === 'left') justifyContent = 'flex-start';
      if (horizontalAlign === 'right') justifyContent = 'flex-end';

      let alignItems = 'center';
      if (verticalAlign === 'top') alignItems = 'flex-start';
      if (verticalAlign === 'bottom') alignItems = 'flex-end';

      return {
        width: '100%',
        height: '100%',
        minHeight: '200px',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: props.content?.backgroundColor || 'transparent',
        display: 'flex',
        justifyContent,
        alignItems,
      };
    });

    const hummelStyle = computed(() => {
      const size = props.content?.size || 150;
      const duration = props.content?.duration || 8;
      const pulseDuration = props.content?.pulseDuration || 2;
      const spinDuration = props.content?.spinDuration || 2;
      const fadeSpeed = props.content?.fadeSpeed || 1;
      const iconColorDirect = props.content?.iconColor || '';
      const brightness = props.content?.brightness || 100;
      const saturation = props.content?.saturation || 100;
      const hueRotate = props.content?.hueRotate || 0;

      // Build color filter
      let filterParts = [];

      // If direct color is set, use drop-shadow to colorize
      if (iconColorDirect) {
        filterParts.push(`brightness(0) saturate(100%)`);
        filterParts.push(`drop-shadow(0 0 0 ${iconColorDirect})`);
      } else {
        // Use filter adjustments
        if (brightness !== 100) {
          filterParts.push(`brightness(${brightness}%)`);
        }
        if (saturation !== 100) {
          filterParts.push(`saturate(${saturation}%)`);
        }
        if (hueRotate !== 0) {
          filterParts.push(`hue-rotate(${hueRotate}deg)`);
        }
      }

      return {
        '--size': `${size}px`,
        '--duration': `${duration}s`,
        '--pulse-duration': `${pulseDuration}s`,
        '--spin-duration': `${spinDuration}s`,
        '--fade-speed': `${fadeSpeed}s`,
        '--icon-filter': filterParts.length > 0 ? filterParts.join(' ') : 'none',
        '--icon-color': iconColorDirect || 'transparent',
      };
    });

    return {
      imageUrl,
      fadeEffect,
      loaderStyle,
      hummelStyle,
    };
  },
};
</script>

<style scoped lang="scss">
.wohu-loader {
  /* Flexbox set via inline styles for dynamic alignment */
}

.hummel-container {
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hummel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: var(--icon-filter);
}

/* Diagonal Animation */
.animation-diagonal {
  position: absolute;
  animation: flyDiagonal var(--duration) ease-in-out infinite;
}

@keyframes flyDiagonal {
  0% {
    left: -15%;
    bottom: -15%;
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    left: 115%;
    bottom: 115%;
    opacity: 0;
  }
}

/* Pulse Animation */
.animation-pulse {
  animation: pulse var(--pulse-duration) ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.3);
    opacity: 0.7;
  }
}

/* Spin Animation */
.animation-spin {
  animation: spin var(--spin-duration) linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Bounce Animation */
.animation-bounce {
  animation: bounce var(--pulse-duration) ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

/* Pulse-Spin Animation */
.animation-pulse-spin {
  animation:
    pulse var(--pulse-duration) ease-in-out infinite,
    spin var(--spin-duration) linear infinite;
}

/* Multi-Position Fade Animation */
.animation-multi-position {
  position: absolute;
  animation: multiPositionFade var(--duration) ease-in-out infinite;
}

@keyframes multiPositionFade {
  /* Position 1: Top Left */
  0%, 5% {
    left: 20%;
    top: 20%;
    opacity: 0;
  }
  6%, 14% {
    opacity: 1;
  }
  15%, 19% {
    opacity: 0;
  }

  /* Position 2: Top Right */
  20% {
    left: 70%;
    top: 20%;
    opacity: 0;
  }
  21%, 34% {
    opacity: 1;
  }
  35%, 39% {
    opacity: 0;
  }

  /* Position 3: Bottom Right */
  40% {
    left: 70%;
    top: 70%;
    opacity: 0;
  }
  41%, 54% {
    opacity: 1;
  }
  55%, 59% {
    opacity: 0;
  }

  /* Position 4: Bottom Left */
  60% {
    left: 20%;
    top: 70%;
    opacity: 0;
  }
  61%, 74% {
    opacity: 1;
  }
  75%, 79% {
    opacity: 0;
  }

  /* Position 5: Center */
  80% {
    left: 45%;
    top: 45%;
    opacity: 0;
  }
  81%, 94% {
    opacity: 1;
  }
  95%, 100% {
    opacity: 0;
  }
}

/* Fade Effects */
.fade-fade {
  animation-name: flyDiagonal, smoothFade;
  animation-duration: var(--duration), var(--fade-speed);
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

@keyframes smoothFade {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

.fade-pulse {
  animation-name: flyDiagonal, pulseFade;
  animation-duration: var(--duration), var(--fade-speed);
  animation-timing-function: ease-in-out, ease-in-out;
  animation-iteration-count: infinite, infinite;
}

@keyframes pulseFade {
  0% {
    opacity: 0.5;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.fade-blink {
  animation-name: flyDiagonal, blinkEffect;
  animation-duration: var(--duration), var(--fade-speed);
  animation-timing-function: ease-in-out, step-end;
  animation-iteration-count: infinite, infinite;
}

@keyframes blinkEffect {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}

/* Override for non-diagonal animations with fade effects */
.animation-pulse.fade-fade,
.animation-spin.fade-fade,
.animation-bounce.fade-fade,
.animation-pulse-spin.fade-fade {
  animation-name: pulse, smoothFade;
}

.animation-pulse.fade-pulse,
.animation-spin.fade-pulse,
.animation-bounce.fade-pulse,
.animation-pulse-spin.fade-pulse {
  animation-name: pulse, pulseFade;
}

.animation-pulse.fade-blink,
.animation-spin.fade-blink,
.animation-bounce.fade-blink,
.animation-pulse-spin.fade-blink {
  animation-name: pulse, blinkEffect;
}

.animation-spin.fade-fade {
  animation-name: spin, smoothFade;
}

.animation-spin.fade-pulse {
  animation-name: spin, pulseFade;
}

.animation-spin.fade-blink {
  animation-name: spin, blinkEffect;
}

.animation-bounce.fade-fade {
  animation-name: bounce, smoothFade;
}

.animation-bounce.fade-pulse {
  animation-name: bounce, pulseFade;
}

.animation-bounce.fade-blink {
  animation-name: bounce, blinkEffect;
}

.animation-pulse-spin.fade-fade {
  animation-name: pulse, spin, smoothFade;
  animation-duration: var(--pulse-duration), var(--spin-duration), var(--fade-speed);
}

.animation-pulse-spin.fade-pulse {
  animation-name: pulse, spin, pulseFade;
  animation-duration: var(--pulse-duration), var(--spin-duration), var(--fade-speed);
}

.animation-pulse-spin.fade-blink {
  animation-name: pulse, spin, blinkEffect;
  animation-duration: var(--pulse-duration), var(--spin-duration), var(--fade-speed);
}
</style>
