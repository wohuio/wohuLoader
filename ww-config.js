export default {
  editor: {
    label: {
      en: 'Wohu Loader',
      de: 'Wohu Loader',
    },
    icon: 'fontawesome/solid/spinner',
  },
  properties: {
    animation: {
      label: {
        en: 'Animation Type',
        de: 'Animationstyp',
      },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'diagonal', label: 'Diagonal Flight' },
          { value: 'pulse', label: 'Pulse' },
          { value: 'spin', label: 'Spin' },
          { value: 'bounce', label: 'Bounce' },
          { value: 'pulse-spin', label: 'Pulse + Spin' },
          { value: 'multi-position', label: 'Multi-Position Fade' },
        ],
      },
      defaultValue: 'diagonal',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Valid values: diagonal | pulse | spin | bounce | pulse-spin',
      },
      /* wwEditor:end */
    },
    size: {
      label: {
        en: 'Size (px)',
        de: 'Größe (px)',
      },
      type: 'Number',
      section: 'settings',
      min: 50,
      max: 500,
      step: 10,
      defaultValue: 150,
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Size of the loader in pixels',
      },
      /* wwEditor:end */
    },
    duration: {
      label: {
        en: 'Duration (seconds)',
        de: 'Dauer (Sekunden)',
      },
      type: 'Number',
      section: 'settings',
      min: 1,
      max: 20,
      step: 0.5,
      defaultValue: 8,
      bindable: true,
      hidden: (content) => content?.animation !== 'diagonal',
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Duration for diagonal animation in seconds',
      },
      propertyHelp: {
        en: 'Duration for the diagonal flight animation',
      },
      /* wwEditor:end */
    },
    pulseDuration: {
      label: {
        en: 'Pulse Duration (seconds)',
        de: 'Puls-Dauer (Sekunden)',
      },
      type: 'Number',
      section: 'settings',
      min: 0.5,
      max: 5,
      step: 0.1,
      defaultValue: 2,
      bindable: true,
      hidden: (content) =>
        content?.animation !== 'pulse' &&
        content?.animation !== 'pulse-spin' &&
        content?.animation !== 'bounce',
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Duration for pulse/bounce animation in seconds',
      },
      propertyHelp: {
        en: 'Duration for the pulse or bounce animation cycle',
      },
      /* wwEditor:end */
    },
    spinDuration: {
      label: {
        en: 'Spin Duration (seconds)',
        de: 'Dreh-Dauer (Sekunden)',
      },
      type: 'Number',
      section: 'settings',
      min: 0.5,
      max: 5,
      step: 0.1,
      defaultValue: 2,
      bindable: true,
      hidden: (content) =>
        content?.animation !== 'spin' &&
        content?.animation !== 'pulse-spin',
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Duration for spin animation in seconds',
      },
      propertyHelp: {
        en: 'Duration for one full rotation',
      },
      /* wwEditor:end */
    },
    backgroundColor: {
      label: {
        en: 'Background Color',
        de: 'Hintergrundfarbe',
      },
      type: 'Color',
      section: 'style',
      defaultValue: 'transparent',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Background color for the loader container',
      },
      /* wwEditor:end */
    },
    customImage: {
      label: {
        en: 'Custom Image URL',
        de: 'Eigene Bild-URL',
      },
      type: 'Text',
      section: 'settings',
      defaultValue: '',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Custom image URL (leave empty to use default bee icon)',
      },
      propertyHelp: {
        en: 'Leave empty to use the default bee icon, or provide a custom image URL',
      },
      /* wwEditor:end */
    },
    fadeEffect: {
      label: {
        en: 'Fade Effect',
        de: 'Fade-Effekt',
      },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'none', label: 'None' },
          { value: 'fade', label: 'Smooth Fade' },
          { value: 'pulse', label: 'Pulse Fade' },
          { value: 'blink', label: 'Blink' },
        ],
      },
      defaultValue: 'fade',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Valid values: none | fade | pulse | blink',
      },
      propertyHelp: {
        en: 'Adds additional fade/blink effects to the loader animation',
      },
      /* wwEditor:end */
    },
    fadeSpeed: {
      label: {
        en: 'Fade Speed (seconds)',
        de: 'Fade-Geschwindigkeit (Sekunden)',
      },
      type: 'Number',
      section: 'settings',
      min: 0.3,
      max: 3,
      step: 0.1,
      defaultValue: 1,
      bindable: true,
      hidden: (content) => content?.fadeEffect === 'none',
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Speed of the fade effect in seconds',
      },
      propertyHelp: {
        en: 'Controls how fast the fade/blink effect occurs',
      },
      /* wwEditor:end */
    },
    brightness: {
      label: {
        en: 'Brightness (%)',
        de: 'Helligkeit (%)',
      },
      type: 'Number',
      section: 'style',
      min: 0,
      max: 200,
      step: 10,
      defaultValue: 100,
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Icon brightness percentage (0-200)',
      },
      /* wwEditor:end */
    },
    saturation: {
      label: {
        en: 'Saturation (%)',
        de: 'Sättigung (%)',
      },
      type: 'Number',
      section: 'style',
      min: 0,
      max: 200,
      step: 10,
      defaultValue: 100,
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Icon saturation percentage (0-200)',
      },
      /* wwEditor:end */
    },
    hueRotate: {
      label: {
        en: 'Hue Rotate (degrees)',
        de: 'Farbton drehen (Grad)',
      },
      type: 'Number',
      section: 'style',
      min: 0,
      max: 360,
      step: 10,
      defaultValue: 0,
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Rotate hue to change icon color (0-360 degrees)',
      },
      propertyHelp: {
        en: 'Change the icon color by rotating the hue (0° = original, 180° = opposite color)',
      },
      /* wwEditor:end */
    },
  },
};
