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
  },
};
