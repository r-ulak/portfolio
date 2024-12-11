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
        "I am a visionary technology leader with experience in building high-performing teams and driving digital transformation. My specialization is building innovative, revenue-generating products. I lead my team to create impactful solutions that enhance efficiency and customer experience. I am a trusted partner among my C-level executives. They have confidence in me to align IT initiatives with business goals, delivering measurable value and fostering a culture of collaboration, and engagement.  I find immense fulfillment in providing hands-on technical leadership to guide engineering teams towards continuous success. I can't imagine a better career than providing the leadership that guides technology teams to continuously achieve success."
    ),
    resumeLink:
        "https://drive.google.com/file/d/1e4ZqfBiPnE4UWRg026Ry5heU8qzYFKQK/view?usp=sharing", // Set to empty to hide the button
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
    subTitle: "Software development leader with over 20 years of expertise, specializing in strategic planning, technical leadership, and proficient project delivery ",
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
                "Dean's Honor Roll -University of Central Oklahoma 2005, 2006, 2007, 2008, 2009"
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
            companylogo: require("./assets/images/work.png"),
            date: "Aug 2019 – Present",
            desc: "Demonstrated success in improving code security, achieving PCI compliance, and leading agile practices implementation for enhanced project outcomes.",
            descBullets: [
                "Implemented cost-saving measures, reducing Azure costs by 40% and adopting a cloud-first approach for legacy app migrations.",
                "Led the swift, in-house development of DARTAccess, generating $15 million annually, replacing a failed third-party vendor."
            ]
        },
        {
            role: "Founder",
            company: "Rojan Ulak LLC",
            companylogo: require("./assets/images/work.png"),
            date: "Jan 2016 – Present",
            desc: "Established an independent software consulting business, specializing in custom software solutions.",
            descBullets: [
                "Managed end-to-end project lifecycles, including requirement analysis, solution design, coding, testing, and deployment.",
                "Demonstrated adaptability by working on a variety of projects spanning different industries, showcasing a versatile skill set."
            ]
        },
        {
            role: "Senior Software Engineer - Contractor",
            company: "Thompson Reuters",
            companylogo: require("./assets/images/work.png"),
            date: "Jun 2019 – Aug 2019",
            desc: "Results-driven Senior Software Engineer at Thomson Reuters, contributing to the development of innovative solutions for a multinational media conglomerate.",
            descBullets: [
                "Spearheaded the Dockerization of Node.js applications, optimizing efficiency and scalability in a corporate tax application.",
                "Conducted comprehensive training sessions on Docker solutions, empowering developers with valuable skills and best practices."
            ]
        },
        {
            role: "Senior Software Engineer",
            company: "WatchGuard Video",
            companylogo: require("./assets/images/work.png"),
            date: "Dec 2018 – Jun 2019",
            desc: "Proven expertise in optimizing video archival processes and deploying microservices using Docker.",
            descBullets: [
                "Spearheaded the implementation of a RabbitMQ-based messaging system for a long-running video import process, enhancing data management efficiency.",
                "Led the conversion of a cloud-based Evidence Management Solution to an On-Premise model, providing flexibility for customers who prefer local data storage."
            ]
        },
        {
            role: "Senior Developer | Architect - Contractor",
            company: "DART",
            companylogo: require("./assets/images/work.png"),
            date: "Jul 2017 – Dec 2018",
            desc: "Played a pivotal role in modernizing legacy intranet ASP code to the latest .NET platforms, and introduced microservices architecture with ASP.NET Web API hosted on Azure.",
            descBullets: [
                "Revamped legacy intranet ASP code to contemporary .NET platforms and .NET Core 2.0.",
                "Implemented microservices architecture utilizing ASP.NET Web API hosted on Azure, enhancing scalability and performance."
            ]
        },
        {
            role: "Founder",
            company: "DataCareEmr",
            companylogo: require("./assets/images/work.png"),
            date: "Dec 2012 – Jan 2018",
            desc: "Founded DatacareEMR, which is an open-source electronic health records (EHR) and medical practice management solution. It provides features such as appointment scheduling, medical billing, prescription management, and patient demographics. OpenEMR supports various medical specialties and is designed to be customizable and adaptable to different healthcare settings.",
        },
        {
            role: "Senior Developer - Contractor",
            company: "WorldVentures",
            companylogo: require("./assets/images/work.png"),
            date: "Dec 2012 – Jan 2018",
            desc: "Revamped legacy systems at WorldVentures with microservices and continuous integration, utilizing .NET and Angular, ensuring enhanced efficiency and scalability.",
            descBullets: [
                "Orchestrated the re-architecture of back-office applications at WorldVentures, introducing a scalable microservices design.",
                "Implemented automated testing strategies and continuous integration, improving overall system reliability and performance."
            ]
        },
        {
            role: "Software Engineer III - Contractor",
            company: "Motorsport Aftermarket Group, Inc. (MAG)",
            companylogo: require("./assets/images/work.png"),
            date: "Sep 2015 – Mar 2016",
            desc: "Led the re- architecture of monolithic web services into scalable microservices, enhancing efficiency and implementing continuous integration at MAG(Motorsport Aftermarket Group).",
            descBullets: [
                "Enhanced SEO for jpcycles.com and motorcycle-superstore.com to boost online visibility and traffic.",
                "Configured, optimized, and maintained Endeca search engine for e-commerce sites, contributing to a seamless user experience."
            ]
        }, {
            role: "Technical Lead",
            company: "Hewlett Packard Enterprise",
            companylogo: require("./assets/images/work.png"),
            date: "Oct 2009 – Sep 2015",
            desc: "Led the implementation of Affordable Care Act (ACA) projects, including eligibility rules engine, online Medicaid system, and call center solutions, demonstrating strong technical leadership and adherence to compliance standards. Engaged in diverse responsibilities, from server setup to software development, while consistently achieving high performance and recognition.",
            descBullets: [
                "Spearheaded the migration of legacy systems to modern platforms, demonstrating expertise in software architecture and design.",
                "Implemented service-oriented architecture (SOA) strategies, optimizing inter-component messaging and interaction for enhanced system performance."
            ]
        },
        {
            role: "CoFounder",
            company: "Collaborative Fusion Solution",
            companylogo: require("./assets/images/work.png"),
            date: "Dec 2008 – Dec 2009",
            desc: "Led the design and development of rich UI applications with Web 2.0 technologies, fostering effective communication and collaboration within project teams.",
            descBullets: [
                "Spearheaded the development of standards-compliant web UIs, emphasizing cross-browser compatibility and optimization for mobile devices.",
                "Provided creative insights to project teams, enhancing the user experience and translating functional requirements into robust technical architectures."
            ]
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
            image: require("./assets/images/dart.png"),
            projectName: "www.dart.otg",
            projectDesc: "DART(Dallas Area Rapid Transit) is a public transportation agency in Dallas, Texas, providing light rail, bus, and commuter rail services to the Dallas metropolitan area.",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://www.dart.org/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/gopass.png"),
            projectName: "Gopass.Org",
            projectDesc: "GoPass is a website that offers a comprehensive platform for public transportation services, allowing users to plan and pay for their journeys in the Dallas metropolitan area.",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://gopass.org/"
                }
            ]
        },
        {
            image: require("./assets/images/dartaccess.png"),
            projectName: "DARTAccess",
            projectDesc: "Annual transit passes for more than 25 diffrent pass programs.",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://pass.dart.org/"
                }
            ]
        },
        {
            image: require("./assets/images/dt-logo.png"),
            projectName: "DreamTrips",
            projectDesc: " DreamTrips is a membership-based travel program offered by WorldVentures.",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://www.dreamtrips.com/"
                }
            ]
        },
        {
            image: require("./assets/images/jpcycles.png"),
            projectName: "J&P Cycles",
            projectDesc: "J&P Cycles is a leading online retailer specializing in aftermarket motorcycle parts, accessories, and gear for various brands.",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://www.jpcycles.com/"
                }
            ]
        },
        {
            image: require("./assets/images/tr-logo.png"),
            projectName: "OneSource",
            projectDesc: "OneSource by Thomson Reuters is a comprehensive tax provision software designed to streamline and optimize tax compliance and reporting processes for businesses.",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://tax.thomsonreuters.com/en/onesource/tax-provision"
                }
            ]
        }
        ,
        {
            image: require("./assets/images/wgel.png"),
            projectName: "Evidence Library",
            projectDesc: "WatchGuard's Evidence Library System is a robust platform designed to manage and organize law enforcement video evidence, ensuring secure storage and streamlined retrieval for investigative purposes.",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "https://www.motorolasolutions.com/en_us/video-security-access-control/record-after-the-fact.html"
                }
            ]
        },
        {
            image: require("./assets/images/thinkara.png"),
            projectName: "Thinkara",
            projectDesc: "A social game developed by me, involving various aspects of social capital and the management of virtual wealth through different in-game features.",
            footerLink: [
                {
                    name: "See YouTube video",
                    url: "https://www.youtube.com/watch?v=CA72E_tQczk"},
                {
                    name: "View Source Code",
                    url: "https://github.com/r-ulak/Thinkara" }
            ]
        }
        ,
        {
            image: require("./assets/images/emr.png"),
            projectName: "DataCare EMR",
            projectDesc: "A EMR system developed by me, DataCareEMR is a healthcare software platform designed for efficient and comprehensive electronic medical records management",
            footerLink: [
                {
                    name: "View Source Code",
                    url: "https://github.com/r-ulak/DataCareEmr"
                }
            ]
        }
        
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Certifications 🧑‍🎓"),
    subtitle:
        "Certifications and Some Cool Stuff that I have done !",

    achievementsCards: [
        {
            title: "Microsoft Certified: Azure Fundamentals",
            subtitle:
                "Issued Aug 2023",
            image: require("./assets/images/msft.jpg"),
            imageAlt: "msft logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://learn.microsoft.com/en-us/users/rojan/credentials/ea31b3249d9a4c1d"
                }
            ]
        }, {
            title: "Microsoft Certified: Azure Developer Associate",
            subtitle:
                "Issued Aug 2023",
            image: require("./assets/images/msft.jpg"),
            imageAlt: "msft logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://learn.microsoft.com/en-us/users/rojan/credentials/593C65C32686987"
                }
            ]
        }, {
            title: "Microsoft Certified: Azure Administrator Associate",
            subtitle:
                "Issued Sep 2023",
            image: require("./assets/images/msft.jpg"),
            imageAlt: "msft logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://learn.microsoft.com/en-us/users/rojan/credentials/D1080210E21D1346"
                }
            ]
        }, {
            title: "Microsoft Certified: Azure Solutions Architect Expert",
            subtitle:
                "Issued Sep 2023",
            image: require("./assets/images/msft.jpg"),
            imageAlt: "msft logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://learn.microsoft.com/en-us/users/rojan/credentials/FC102CC02931924D"
                }
            ]
        }, {
            title: "Agile Software Development",
            subtitle: "Issued Oct 2023",
            image: require("./assets/images/linkedin.jpg"),
            imageAlt: "linkedin logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://www.linkedin.com/learning/certificates/5a3f14bc210999aa2945e5cf952ca48c863cb693ffa7e155221e95d303dc30ad?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRFpFMwxGTkaLzaO9U2YoAg%3D%3D"
                }
            ]
        }, {
            title: "Azure OpenAI: Generative AI Models and How to Use Them",
            subtitle: "Issued Oct 2023",
            image: require("./assets/images/linkedin.jpg"),
            imageAlt: "linkedin logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://www.linkedin.com/learning/certificates/00861de1e6c1b498f742b44430dcf6817e2295fb831964c08e4269c40e765eb7?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRFpFMwxGTkaLzaO9U2YoAg%3D%3D"
                }
            ]
        }, {
            title: "Communicating with Executives",
            subtitle: "Issued Oct 2023",
            image: require("./assets/images/linkedin.jpg"),
            imageAlt: "linkedin logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://www.linkedin.com/learning/certificates/8add7accd7d653de236f72688a9dfa0f59506985dda82dd3c937114501b3a841?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRFpFMwxGTkaLzaO9U2YoAg%3D%3D"
                }
            ]
        }, {
            title: "How to Learn Faster",
            subtitle: "Issued Oct 2023",
            image: require("./assets/images/linkedin.jpg"),
            imageAlt: "linkedin logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://www.linkedin.com/learning/certificates/aebcc8c9fa6825240b7c61e17354ba038203638b3c7bbbac65caf3e09fe5a06d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRFpFMwxGTkaLzaO9U2YoAg%3D%3D"
                }
            ]
        }, {
            title: "How to Speak with Effortless Confidence",
            subtitle: "Issued Oct 2023",
            image: require("./assets/images/linkedin.jpg"),
            imageAlt: "linkedin logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://www.linkedin.com/learning/certificates/0a01be157e2140c784350eb04906127578828d7ba0ef32faa8df7116dd091fc6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRFpFMwxGTkaLzaO9U2YoAg%3D%3D"
                }
            ]
        }, {
            title: "Leading with Innovation",
            subtitle: "Issued Oct 2023",
            image: require("./assets/images/linkedin.jpg"),
            imageAlt: "linkedin logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://www.linkedin.com/learning/certificates/dc8b37330412441a2f1d0ead90d08d4a68828c9354bb4b3d5f469c90fd2d7825?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRFpFMwxGTkaLzaO9U2YoAg%3D%3D"
                }
            ]
        }, {
            title: "Pair Programming with AI",
            subtitle: "Issued Oct 2023",
            image: require("./assets/images/linkedin.jpg"),
            imageAlt: "linkedin logo",
            footerLink: [
                {
                    name: "Certificate",
                    url: "https://www.linkedin.com/learning/certificates/9f28439e8f849de1b38e5ded0981a3eb085d2b282e5b16deb85c969b2f29ad78?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BRFpFMwxGTkaLzaO9U2YoAg%3D%3D"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};
const awardsSection = {
    title: emoji("Awards and Achievements🏆 "),
    subtitle:
        "Achievements, Award Letters I have received!",

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
            title: "Outstanding Student Researcher",
            subtitle:
                "Issued by University of Central Oklahoma · Oct 2009",
            image: require("./assets/images/osr.png"),
            imageAlt: "UCO Logo",
            footerLink: [
            ]
        },
        {
            title: "Deans Honor Roll",
            subtitle:
                "Issued by University of Central Oklahoma · 2005, 2006, 2007, 2008, 2009",
            image: require("./assets/images/uco.png"),
            imageAlt: "UCO Logo",
            footerLink: [
            ]
        },
        {
            title: "National Inter College Software Competition",
            subtitle: "3rd Prize Recipient Chosen among high school and college students from all over the nation. Jan 2002",
            image: require("./assets/images/noc.png"),
            imageAlt: "Logo",
            footerLink: [

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
    awardsSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable
};
