const LIGHT_PINK   = "#ffe9ec",
      LIGHT_BLUE   = "#e9fffc",
      LIGHT_ORANGE = "#fff4b6",
      LIGHT_GREEN  = "#e6ffb7",
      LIGHT_YELLOW = "#feffb7",
      COLORS       = [
        LIGHT_PINK,
        LIGHT_BLUE,
        LIGHT_ORANGE,
        LIGHT_GREEN,
        LIGHT_YELLOW
      ];

module.exports = function(){
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};
