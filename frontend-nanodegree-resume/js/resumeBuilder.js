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
    biopic: 'images/fry.jpg',
  };

  var bioController = {
    getName: function() { return bioModel.name; },
    getRole: function() { return bioModel.role; },
    getMobile: function() { return bioModel.contacts.mobile; },
    getEmail: function() { return bioModel.contacts.email; },
    getGithub: function() { return bioModel.contacts.github; },
    getLocation: function() { return bioModel.contacts.location; },
    getImageUrl: function() { return bioModel.biopic; },
    getWelcomeMsg: function() { return bioModel.welcomMessage; },
    getSkills: function() { return bioModel.skills; },
    init: function() {
      bioView.init();
    },
  };

  var bioView = {
    init: function() {
      this.headerContainer = document.getElementById('header');
      this.topContacts = document.getElementById('topContacts');
      this.render();
    },
    renderHeader: function() {
      var headerElements = [
        HTMLheaderName.replace(/%data%/, bioController.getName()),
        HTMLheaderRole.replace(/%data%/, bioController.getRole()),
      ];
      var HTMLheaderElements = concatStrings(headerElements);
      this.headerContainer.insertAdjacentHTML('afterbegin', HTMLheaderElements);
    },
    renderTopContacts: function() {
      var topContactsElements = [
        HTMLmobile.replace(/%data%/, bioController.getMobile()),
        HTMLemail.replace(/%data%/, bioController.getEmail()),
        HTMLgithub.replace(/%data%/, bioController.getGithub()),
        HTMLlocation.replace(/%data%/, bioController.getLocation()),
      ];
      var HTMLtopContactsElements = concatStrings(topContactsElements)
      this.topContacts.insertAdjacentHTML('afterbegin', HTMLtopContactsElements);
    },
    renderInfo: function() {
      var skillElements = bioController.getSkills()
        .map(skill => HTMLskills.replace(/%data%/, skill));
      var HTMLskillElements = concatStrings(skillElements);
      var infoElements = [
        HTMLbioPic.replace(/%data%/, bioController.getImageUrl()),
        HTMLwelcomeMsg.replace(/%data%/, bioController.getWelcomeMsg()),
        HTMLskillsStart.replace(/%data%/, HTMLskillElements),
      ];
      var HTMLinfoElements = concatStrings(infoElements);
      this.headerContainer.insertAdjacentHTML('beforeend', HTMLinfoElements);
    },
    render: function() {
      this.renderHeader();
      this.renderTopContacts();
      this.renderInfo();      
    },
  };

  bioController.init();
})();

(function() {
  var workModel = {
    jobs: [
      {
        employer: 'Registration Office, Chiang Mai University',
        title: 'Developer',
        location: 'Chiang Mai, Thailand',
        date: '2016 - 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      },
      {
        employer: 'Skodio',
        title: 'Fullstack Developer',
        location: 'Bankong, Thailand',
        date: 'in progress',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      },
    ],
  };

  var workController = {
    getJobs: function() { return workModel.jobs; },
    init: function() {
      workView.init();
    },
  };

  var workView = {
    init: function() {
      this.workExperienceContainer = document.getElementById('workExperience');
      this.render();
    },
    render: function() {
      var jobElements = workController.getJobs()
        .map(job => {
          var workElements = [
            HTMLworkEmployer.replace(/%data%/, job.employer) +
            HTMLworkTitle.replace(/%data%/, job.title),
            HTMLworkDates.replace(/%data%/, job.date),
            HTMLworkLocation.replace(/%data%/, job.location),
            HTMLworkDescription.replace(/%data%/, job.description),
          ];
          
          var HTMLworkElements = concatStrings(workElements);
          var HTMLworkStartElement = HTMLworkStart.replace(/%data%/, HTMLworkElements);
          this.workExperienceContainer.insertAdjacentHTML('beforeend', HTMLworkStartElement);
        });  
    },
  };

  workController.init();
})();