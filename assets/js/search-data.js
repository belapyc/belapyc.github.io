// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed papers, conference work, and manuscripts in preparation, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Current and past research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Full academic CV. A shorter version is also available here.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-welcome",
        
          title: "Welcome",
        
        description: "A brief introduction",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/welcome/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-spoke-at-the-cambridge-ai-in-medicine-seminar-series-on-deep-learning-based-follicle-growth-prediction-using-a-transformer-architecture-a-decoder-only-gpt-style-model-trained-on-28k-ivf-icsi-cycles",
          title: 'Spoke at the Cambridge AI in Medicine Seminar Series on Deep Learning-Based Follicle...',
          description: "",
          section: "News",},{id: "news-passed-my-phd-viva-thesis-title-bridging-the-chasm-improved-healthcare-using-both-established-and-novel-analytical-frameworks-graduation-ceremony-scheduled-for-july-2026",
          title: 'Passed my PhD viva! Thesis title: Bridging the Chasm: Improved Healthcare Using Both...',
          description: "",
          section: "News",},{id: "news-returned-to-the-university-of-st-andrews-to-guest-lecture-for-cs5014-machine-learning-covering-sequence-processing-rnns-attention-and-transformers-a-full-circle-moment",
          title: 'Returned to the University of St Andrews to guest-lecture for CS5014 (Machine Learning),...',
          description: "",
          section: "News",},{id: "news-i-ve-officially-started-my-cruk-aced-pathway-award-at-the-university-of-cambridge-stepping-into-my-first-principal-investigator-role-two-years-190k-building-dynamic-ai-for-5-year-breast-cancer-risk-prediction-from-longitudinal-mammography-tada",
          title: 'I’ve officially started my CRUK ACED Pathway Award at the University of Cambridge...',
          description: "",
          section: "News",},{id: "projects-dynamic-ai-for-breast-cancer-risk-cruk-aced-pathway-award",
          title: 'Dynamic AI for Breast Cancer Risk (CRUK ACED Pathway Award)',
          description: "Sequence-aware vision transformers for 5-year breast cancer risk prediction from longitudinal mammography.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_pathway_award/";
            },},{id: "projects-transformer-posterior-estimator-tpe",
          title: 'Transformer Posterior Estimator (TPE)',
          description: "Amortised Bayesian calibration of cancer microsimulation models using transformers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_tpe/";
            },},{id: "projects-decoder-only-transformer-for-follicle-growth",
          title: 'Decoder-only Transformer for Follicle Growth',
          description: "A GPT-style transformer that predicts full follicle size distributions during IVF.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_follicle_transformer/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%68%32%34%32%37@%63%61%6D.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
