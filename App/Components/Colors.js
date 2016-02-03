class Colors {
    constructor(colors){
        this.primaryDark = colors.primaryDark;
        this.primaryDefault = colors.primaryDefault;
        this.primaryLight = colors.primaryLight;
        this.textIcons = colors.textIcons;
        this.accent = colors.accent;
        this.primaryText = colors.primaryText;
        this.secondaryText = colors.secondaryText;
        this.divider = colors.divider;
    }
}

var green = new Colors({
    primaryDark: '#388E3C',
    primaryDefault: '#4CAF50',
    primaryLight: '#C8E6C9',
    textIcons: '#FFFFFF',
    accent: '#9E9E9E',
    primaryText: '#212121',
    secondaryText: '#727272',
    divider: '#B6B6B6'
});

var yellow = new Colors({
    primaryDark: '#FBC02D',
    primaryDefault: '#FFEB3B',
    primaryLight: '#FFF9C4',
    textIcons: '#212121',
    accent: '#9E9E9E',
    primaryText: '#212121',
    secondaryText: '#727272',
    divider: '#B6B6B6'
});

var red = new Colors({
    primaryDark: '#D32F2F',
    primaryDefault: '#F44336',
    primaryLight: '#FFCDD2',
    textIcons: '#FFFFFF',
    accent: '#9E9E9E',
    primaryText: '#212121',
    secondaryText: '#727272',
    divider: '#B6B6B6'
});


module.exports = {
    green: green,
    yellow: yellow,
    red: red
};