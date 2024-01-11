/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Rojan Ulak",
    title: "Hello all, I'm Rojan",
    subTitle: emoji(
        "With over 17 years of management and software development experience in overseeing enterprise-level development and support for diverse application ecosystems, I find immense fulfillment in providing hands-on technical leadership to guide engineering teams towards continuous success.I can't imagine a better career than providing the hands-on technical leadership that guides engineering teams to continuously achieve success."
    ),
    resumeLink:
        "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/r-ulak",
    linkedin: "https://www.linkedin.com/in/rojan-ulak/",
    gmail: "rojan.ulak@gmail.com",
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "Techinical Leadership",
    subTitle: "Software development leader with over 17 years of expertise, specializing in strategic planning, technical leadership, and proficient project delivery ",
    skills: [
        emoji("⚡ Hands on approach on software development, infrastructure , deployment pipelines design and code security"),
        emoji("⚡ Led initiatives to fortify code and infrastructure security, demonstrating a steadfast commitment to robust practices, achieving industry compliance, and addressing potential vulnerabilities"),
        emoji("⚡ Proven track record in driving innovation, legacy code migration,  implementing best practices, and delivering complex projects on time and within budget.")
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "DevOps",
            fontAwesomeClassname: "cib:azure-pipelines",
            style: {
                color: "#F15A24",
            },
        },
        {
            skillName: "C#",
            fontAwesomeClassname: "simple-icons:csharp",
            style: {
                color: "#239120",
            },
        }, {
            skillName: "Git",
            fontAwesomeClassname: "simple-icons:git",
            style: {
                color: "#F1502F",
            },
        },
        {
            skillName: "API/REST/RPC",
            fontAwesomeClassname: "icon-park:api",
        },
        {
            skillName: "HTML5",
            fontAwesomeClassname: "simple-icons:html5",
            style: {
                color: "#E34F26",
            },
        },
        {
            skillName: "CSS3",
            fontAwesomeClassname: "devicon:css3",
            style: {
                color: "#512BD4",
            },
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "simple-icons:javascript",
            style: {
                color: "#F7DF1E",
            },
        },
        {
            skillName: "Angular",
            fontAwesomeClassname: "devicon:angular",
            style: {
                color: "#DA552F",
            },
        },
        {
            skillName: "Distributed Systems",
            fontAwesomeClassname: "logos:redis"
        },
        {
            skillName: "Asp.Net Core",
            fontAwesomeClassname: "simple-icons:dotnet",
            style: {
                color: "#512BD4",
            },
        },

        {
            skillName: "RabbitMq",
            fontAwesomeClassname: "simple-icons:rabbitmq",
            style: {
                color: "#FF6600",
            },
        },
        {
            skillName: "Apache Kafka",
            fontAwesomeClassname: "simple-icons:apachekafka",
            style: {
                color: "#239120",
            },
        },
         {
            skillName: "DesignPatterns",
            fontAwesomeClassname: "carbon:ibm-watsonx-code-assistant-for-z-refactor",
            style: {
                color: "#FFD700",
            },
        },
        {
            skillName: "MongoDb",
            fontAwesomeClassname: "devicon:mongodb",
            style: {
                color: "#FF8C00",
            },
        }, {
            skillName: "GenerativeAI",
            fontAwesomeClassname: "arcticons:openai-chatgpt",
            style: {
                color: "teal",
            },
        },
        {
            skillName: "Kendo UI",
            imageSrc: "Kendo_UI_vector_logo.png"
        }, {
            skillName: "Secure Coding",
            fontAwesomeClassname: "iconoir:secure-window",
            style: {
                color: "#FF8C00",
            },
        },
        {
            skillName: "Sitefinity",
            imageSrc: "sitefinity.svg",
            style: {
                fill: "#5ce500",
            },
        },
        {
            skillName: "Database-Design",
            fontAwesomeClassname: "devicon:azuresqldatabase",
            style: {
                color: "#0089D6",
            },
        }, {
            skillName: "IOT",
            fontAwesomeClassname: "eos-icons:iot",
            style: {
                color: "#4479A1",
            },
        }
        ,
        {
            skillName: "Automation",
            fontAwesomeClassname: "vaadin:automation",
            style: {
                color: "#4479A1",
            },
        },
        {
            skillName: "QuantConnect",
            fontAwesomeClassname: "simple-icons:quantconnect",
            style: {
                color: "#f5ae29",
            },

        },
        {
            skillName: ".NET MAUI",
            fontAwesomeClassname: "devicon:xamarin",
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

const cloudSkillsSection = {
    title: "Cloud Technologies",
    subTitle: "Proficient in cloud platforms , containerization (Docker), and serverless architectures",
    skills: [
        emoji(
            "⚡ Hold multiple Azure certifications, including Azure Solutions Architect Expert"
        ),
        emoji("⚡ Demonstrated expertise in Cloud Cost Management, reducing Azure costs by 40% through optimization of cloud resources while increasing the Azure footprint."),
        emoji(
            "⚡ Implemented Azure monitoring solutions for real-time performance tracking, identifying bottlenecks and optimizing cloud infrastructure to deliver optimal user experiences"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "Azure Cloud",
            fontAwesomeClassname: "simple-icons:microsoftazure",
            style: {
                color: "#0089D6",
            },
        },
        {
            skillName: "Docker",
            fontAwesomeClassname: "simple-icons:docker",
            style: {
                color: "#2496ED",
            },
        },
        {
            skillName: "Azure Machine Learning",
            fontAwesomeClassname: "carbon:machine-learning",
            style: {
                color: "#0089D6",
            },
        },
        {
            skillName: "Azure Cognitive Services",
            fontAwesomeClassname: "streamline:brain-cognitive-solid",
            style: {
                color: "#0089D6",
            },
        },
        {
            skillName: "CosmosDb",
            fontAwesomeClassname: "devicon:cosmosdb",
            style: {
                color: "#00B88B",
            },
        },
        {
            skillName: "Azure Event Hubs",
            fontAwesomeClassname: "ic:outline-hub",
            style: {
                color: "#0078D4",
            },
        },
   
        {
            skillName: "VNET",
            fontAwesomeClassname: "fluent:virtual-network-20-filled",
            style: {
                color: "#F03A17",
            },
        },
        {
            skillName: "Azure Functions",
            fontAwesomeClassname: "simple-icons:azurefunctions",
            style: {
                color: "yellow",
            },
        },
        {
            skillName: "Azure Key Vault",
            fontAwesomeClassname: "ph:vault-bold",
            style: {
                color: "yellow",
            },
        },
        {
            skillName: "Azure Storage",
            fontAwesomeClassname: "solar:cloud-storage-outline",
            style: {
                color: "#008AD7",
            },
        },
        {
            skillName: "Gateway",
            fontAwesomeClassname: "ant-design:gateway-outlined",
            style: {
                color: "#008AD7",
            },
        },
        {
            skillName: "WAF",
            fontAwesomeClassname: "mdi:firewall",
            style: {
                color: "red",
            },
        },
        {
            skillName: "Load Balancer",
            fontAwesomeClassname: "carbon:load-balancer-network",
            style: {
                color: "red",
            },
        },
        {
            skillName: "Azure App Service",
            fontAwesomeClassname: "ph:globe-bold",
            style: {
                color: "#0089D6",
            },
        },
        {
            skillName: "Bicep/ARM",
            fontAwesomeClassname: "icomoon-free:insert-template",
            style: {
                color: "yellow",
            },
        }
    ],
    display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "Colorado State University",
            logo: require("./assets/images/csu.png"),
            subHeader: "Master of Science in Computer Science",
            desc: "GPA 3.85",
       
        },
        {
            schoolName: "University of Central Oklahoma",
            logo: require("./assets/images/uco.png"),
            subHeader: "Bachelor of Science in Computer Science",
            desc: "Outstanding Student Researcher Award 2009",
            descBullets: [
                "Consortium for Computing Sciences in Colleges 20thAnnual South Central Regional Conference - 1st Prize Recipient",
                "Dean's Honor Roll -University of Central Oklahoma 2005, 2006, 2007, 2008,2009"
            ]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: false, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend/Design", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "60%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Senior Manager Software Engineer",
            company: "DART",
            companylogo: require("./assets/images/dart.png"),
            date: "Aug 2019 – Present",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            descBullets: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            ]
        },
        {
            role: "Founder",
            company: "Rojan Ulak LLC",
            companylogo: require("./assets/images/jpcycle.svg"),
            date: "Jan 2016 – Present",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Senior Software Engineer - Contractor",
            company: "Thompson Reuters",
            companylogo: require("./assets/images/wg.png"),
            date: "Jun 2019 – Aug 2019",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Senior Software Engineer",
            company: "WatchGuard Video",
            companylogo: require("./assets/images/hpe.png"),
            date: "Dec 2018 – Jun 2019",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Senior Developer | Architect - Contractor",
            company: "DART",
            companylogo: require("./assets/images/jpcycle.svg"),
            date: "Jul 2017 – Dec 2018",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Founder",
            company: "DataCareEmr",
            companylogo: require("./assets/images/jpcycle.svg"),
            date: "Dec 2012 – Jan 2018",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Senior Developer - Contractor",
            company: "WorldVentures",
            companylogo: require("./assets/images/jpcycle.svg"),
            date: "Dec 2012 – Jan 2018",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Software Engineer III - Contractor",
            company: "Motorsport Aftermarket Group, Inc. (MAG)",
            companylogo: require("./assets/images/jpcycle.svg"),
            date: "Sep 2015 – Mar 2016",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "Technical Lead",
            company: "Hewlett Packard Enterprise",
            companylogo: require("./assets/images/jpcycle.svg"),
            date: "Oct 2009 – Sep 2015",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            role: "CoFounder",
            company: "Collaborative Fusion Solution",
            companylogo: require("./assets/images/jpcycle.svg"),
            date: "Dec 2008 – Dec 2009",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/saayaHealthLogo.webp"),
            projectName: "Saayahealth",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://saayahealth.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "Nextu",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "http://nextu.se/"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle:
        "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "20th Annual South Central Regional Conference",
            subtitle:
                "1st Prize Recipient- Consortium for Computing Sciences in Colleges",
            image: require("./assets/images/ccsc.png"),
            imageAlt: "CSSC logo",
            footerLink: [
                {
                    name: "Poster",
                    url: "https://www.ccsc.org/southcentral/E-Journal/2009/student_posters.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle:
                "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [
                {
                    name: "View Google Assistant Action",
                    url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
                }
            ]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            imageAlt: "PWA Logo",
            footerLink: [
                { name: "Certification", url: "" },
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle:
        "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [
        {
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description:
                "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description:
                "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [
        {
            title: "Build Actions For Google Assistant",
            subtitle: "Codelab at GDG DevFest Karachi 2019",
            slides_url: "https://bit.ly/saadpasta-slides",
            event_url: "https://www.facebook.com/events/2339906106275053/"
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
    email_address: "rojan.ulak@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    cloudSkillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable
};
