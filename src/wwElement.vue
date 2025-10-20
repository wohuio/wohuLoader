<template>
  <div class="wohu-loader" :style="loaderStyle">
    <div
      class="hummel-container"
      :class="`animation-${content?.animation || 'diagonal'}`"
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

    const loaderStyle = computed(() => ({
      width: '100%',
      height: '100%',
      minHeight: '200px',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: props.content?.backgroundColor || 'transparent',
    }));

    const hummelStyle = computed(() => {
      const size = props.content?.size || 150;
      const duration = props.content?.duration || 8;
      const pulseDuration = props.content?.pulseDuration || 2;
      const spinDuration = props.content?.spinDuration || 2;

      return {
        '--size': `${size}px`,
        '--duration': `${duration}s`,
        '--pulse-duration': `${pulseDuration}s`,
        '--spin-duration': `${spinDuration}s`,
      };
    });

    return {
      imageUrl,
      loaderStyle,
      hummelStyle,
    };
  },
};
</script>

<style scoped lang="scss">
.wohu-loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hummel-container {
  width: var(--size);
  height: var(--size);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hummel-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  10% {
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  50% {
    left: 115%;
    bottom: 115%;
    opacity: 0;
  }
  100% {
    left: -15%;
    bottom: -15%;
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
</style>
