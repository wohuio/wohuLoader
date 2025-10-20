# Wohu Loader

Animierter Hummel-Loader mit verschiedenen Animationsmodi.

## Dateien

- `hummel-loader.html` - Konfigurierbarer Loader mit mehreren Animationen
- `hummel-animation.html` - Einfache diagonale Flug-Animation
- `hummel.png` - Hummel-Icon

## Verwendung

### Einfache Verwendung

Öffne `hummel-loader.html` direkt im Browser.

### Konfiguration

Im `hummel-loader.html` kannst du die Animation anpassen:

```javascript
const config = {
    animation: 'diagonal', // 'diagonal', 'pulse', 'spin', 'bounce', 'pulse-spin'
    size: 150,             // Größe in Pixeln
    duration: 8,           // Dauer für diagonal (Sekunden)
    pulseDuration: 2,      // Dauer für pulse (Sekunden)
    spinDuration: 2        // Dauer für spin (Sekunden)
};
```

## Verfügbare Animationen

1. **diagonal** - Fliegt diagonal von links unten nach rechts oben
2. **pulse** - Pulsiert (größer/kleiner)
3. **spin** - Dreht sich um die eigene Achse
4. **bounce** - Hüpft auf und ab
5. **pulse-spin** - Kombination aus Pulsieren und Drehen

## Beispiel

```html
<!-- Animation zu Pulse ändern -->
<script>
    config.animation = 'pulse';
    config.pulseDuration = 1.5;
    applyConfig();
</script>
```
