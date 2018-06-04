var oBlank = {
  color: {
    DEFAULT : '#252525',
    GREY: '#ffffff'
  },

  init: function () {
    var setColor = oBlank.getBackgroundColor();
    document.body.style.backgroundColor = setColor;
    oBlank.bindEvents();
  },

  bindEvents: function () {
    document.addEventListener("click", function () {
      if (document.body.style.backgroundColor !== oBlank.color.DEFAULT) {
        document.body.style.backgroundColor = oBlank.color.GREY;
        oBlank.setBackgrounColor(oBlank.color.GREY);
      } else {
        document.body.style.backgroundColor = oBlank.color.DEFAULT;
        oBlank.setBackgrounColor(oBlank.color.DEFAULT);
      }
    });
  },

  setBackgrounColor: function(color) {
    window.localStorage.setItem('oBlank.background', color);
  },

  getBackgroundColor: function() {
    return window.localStorage.getItem('oBlank.background')
  }
}

oBlank.init();