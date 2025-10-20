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
    horizontalAlign: {
      label: {
        en: 'Horizontal Alignment',
        de: 'Horizontale Ausrichtung',
      },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ],
      },
      defaultValue: 'center',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Valid values: left | center | right',
      },
      /* wwEditor:end */
    },
    verticalAlign: {
      label: {
        en: 'Vertical Alignment',
        de: 'Vertikale Ausrichtung',
      },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'top', label: 'Top' },
          { value: 'center', label: 'Center' },
          { value: 'bottom', label: 'Bottom' },
        ],
      },
      defaultValue: 'center',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Valid values: top | center | bottom',
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
    iconColor: {
      label: {
        en: 'Icon Color',
        de: 'Icon-Farbe',
      },
      type: 'Color',
      section: 'style',
      defaultValue: '',
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Direct color for the icon (leave empty for original colors)',
      },
      propertyHelp: {
        en: 'Set a direct color for the icon. Leave empty to use original icon colors with hue/brightness/saturation filters.',
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
  },
};
