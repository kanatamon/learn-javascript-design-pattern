(function() {
  var bioModel = {
    name: 'Kantapon Sritiyot',
    role: 'Fx Trader, Fullstack Developer, and Traveler',
    contacts: {
      mobile: '+668-5529-6837',
      email: 'kantapon.sritiyot@gmail.com',
      github: 'kanatamon',
      location: 'Chiang Mai, Thailand',
    },
    welcomMessage: `It's a good day, isn't it?`,
    skills: [
      'Fx Trading',
      'Javascript',
      'English',
      'ไทย',
      '日本語',
    ],
    biopic: '../images/fry.jpg',
  };

  var bioController = {
    getName: function() { return bioModel.name; },
    getRole: function() { return bioModel.role; },
    init: function() {
      bioView.init();
    },
  };

  var bioView = {
    init: function() {
      this.headerContainer = document.getElementById('header');
      this.render();
    },
    render: function() {
      var headerElements = [
        HTMLheaderName.replace(/%data%/, bioController.getName()),
        HTMLheaderRole.replace(/%data%/, bioController.getRole()),
      ];

      this.headerContainer.innerHTML = headerElements.reduce(
        (done, element) => done + element,
        ''
      );
    },
  };

  bioController.init();
})();