// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/krithik-krishna.github.io/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/krithik-krishna.github.io/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/krithik-krishna.github.io/projects/";
          },
        },{id: "post-cats-coaches-and-the-coast-my-first-1ac-journey",
        
          title: "Cats, Coaches, and the Coast: My First 1AC Journey",
        
        description: "A memorable overnight journey from Bengaluru to Vasai with two unexpected feline travelers.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/krithik-krishna.github.io/blog/2026/first-1ac-train-journey/";
          
        },
      },{id: "post-the-best-thing-how-i-found-my-panda",
        
          title: "The Best Thing: How I Found My Panda 🐼",
        
        description: "A story of support, opposite interests, and a mutual decision for a life together.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/krithik-krishna.github.io/blog/2020/the-panda-and-me/";
          
        },
      },{id: "news-excited-to-share-that-i-ve-joined-whirlybird-electronics-pvt-ltd-as-an-embedded-software-engineer-in-vasai",
          title: 'Excited to share that I’ve joined Whirlybird Electronics Pvt. Ltd. as an Embedded...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/krithik-krishna.github.io/assets/pdf/Krithik_Krishna_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%72%69%74%68%69%6B%73%6D%6F%6B%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/krithik-krishna/", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/krithik-777", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
