document.addEventListener("DOMContentLoaded", function () {
            const state = {
                lang: "es",
                currentYear: new Date().getFullYear()
            };

            const skills = [
                { name: "C#", imgSrc: "image/c-sharp.svg" },
                { name: "Java", imgSrc: "image/java.svg" },
                { name: "PHP", imgSrc: "image/php.svg" },
                { name: "Laravel", imgSrc: "image/laravel.svg" },
                { name: "MySQL", imgSrc: "image/mysql.svg" },
                { name: "Oracle Database", imgSrc: "image/oracle.svg" },
                { name: "SQL Server", imgSrc: "image/sql-server.svg" },
                { name: "Google Cloud", imgSrc: "image/google-cloud.svg" },
                { name: "Oracle Cloud Infrastructure (OCI)", imgSrc: "image/oracle.svg" },
            ];

            const certifications = [
                {
                    name: "Oracle Cloud Data Management 2023",
                    imgSrc: "image/Oracle-Cloud-Data-Management-2023-Certified-Foundations-Associate.svg",
                    href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=664DD770BBDD539E63339DC1A312A4D10DCE9B586C5FFC169E7B18B10139351A",
                    provider: "Oracle",
                    isNew: false
                },
                {
                    name: "Oracle Cloud Infrastructure 2023",
                    imgSrc: "image/Oracle-Cloud-Infrastructure-2023-Certified-Foundations-Associate.svg",
                    href: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B6A9C33D38E52EE06CD8D75F8AF8D5DF7099D10CC61E48693E8205EFD33B097C",
                    provider: "Oracle",
                    isNew: false
                }
            ];

            const experiences = [
                {
                    company: "Nexura International",
                    sector: "Gobierno",
                    sectorEn: "Government",
                    role: {
                        es: "Ingeniero de Desarrollo - Cali, Colombia",
                        en: "Development Engineer - Cali, Colombia"
                    },
                    period: {
                        es: "Junio 2023 - Actualidad",
                        en: "June 2023 - Present"
                    },
                    start: "2023-06",
                    end: null,
                    isNew: false,
                    bullets: {
                        es: [
                            "Desarrollo de aplicaciones web en Laravel para entidades gubernamentales de alcance nacional.",
                            "Implementacion de Azure DevOps y CI/CD para optimizar tiempos de entrega.",
                            "Administracion de MySQL y cumplimiento de estandares de calidad superiores al 80%."
                        ],
                        en: [
                            "Built Laravel web applications for national government institutions.",
                            "Implemented Azure DevOps and CI/CD to optimize delivery times.",
                            "Managed MySQL and met quality standards above 80%."
                        ]
                    }
                },
                {
                    company: "Carvajal Technology and Services",
                    sector: "Salud",
                    sectorEn: "Healthcare",
                    role: {
                        es: "Ingeniero de Desarrollo - Cali, Colombia",
                        en: "Development Engineer - Cali, Colombia"
                    },
                    period: {
                        es: "Marzo 2022 - Octubre 2022",
                        en: "March 2022 - October 2022"
                    },
                    start: "2022-03",
                    end: "2022-10",
                    isNew: false,
                    bullets: {
                        es: [
                            "Diseno y desarrollo de soluciones medicas en C# .NET.",
                            "Integracion de Azure DevOps con CI/CD para reducir errores de despliegue.",
                            "Gestion y optimizacion de SQL Server y Oracle en aplicaciones criticas."
                        ],
                        en: [
                            "Designed and developed healthcare solutions in C# .NET.",
                            "Integrated Azure DevOps with CI/CD to reduce deployment errors.",
                            "Managed and optimized SQL Server and Oracle for critical applications."
                        ]
                    }
                },
                {
                    company: "Kool Marketing",
                    sector: "E-commerce",
                    sectorEn: "E-commerce",
                    role: {
                        es: "Programador - Cali, Colombia",
                        en: "Programmer - Cali, Colombia"
                    },
                    period: {
                        es: "Febrero 2022 - Marzo 2022",
                        en: "February 2022 - March 2022"
                    },
                    start: "2022-02",
                    end: "2022-03",
                    isNew: false,
                    bullets: {
                        es: [
                            "Desarrollo integral de tiendas virtuales en WordPress desde la conceptualizacion hasta el lanzamiento.",
                            "Implementacion de pasarelas de pago seguras para fortalecer la confianza del e-commerce.",
                            "Ejecucion de pruebas con 80% de cobertura para mejorar estabilidad y satisfaccion del cliente."
                        ],
                        en: [
                            "Built e-commerce stores in WordPress from concept to launch.",
                            "Integrated secure payment gateways to increase platform trust.",
                            "Executed testing with 80% coverage to improve stability and customer satisfaction."
                        ]
                    }
                },
                {
                    company: "STRATECSA",
                    sector: "Telecomunicaciones",
                    sectorEn: "Telecommunications",
                    role: {
                        es: "Programador - Yumbo, Colombia",
                        en: "Programmer - Yumbo, Colombia"
                    },
                    period: {
                        es: "Febrero 2021 - Febrero 2022",
                        en: "February 2021 - February 2022"
                    },
                    start: "2021-02",
                    end: "2022-02",
                    isNew: false,
                    bullets: {
                        es: [
                            "Construccion de un sistema de tickets y soporte en Laravel enfocado en eficiencia operativa.",
                            "Diseno de una interfaz intuitiva con 95% de usabilidad para facilitar adopcion.",
                            "Pruebas unitarias y CI/CD para asegurar entregas continuas y confiables."
                        ],
                        en: [
                            "Built a Laravel ticketing and support platform focused on operational efficiency.",
                            "Designed an intuitive interface with 95% usability to improve adoption.",
                            "Implemented unit testing and CI/CD for reliable continuous delivery."
                        ]
                    }
                },
                {
                    company: "Mainco Health Care",
                    sector: "Salud",
                    sectorEn: "Healthcare",
                    role: {
                        es: "Programador - Cali, Colombia",
                        en: "Programmer - Cali, Colombia"
                    },
                    period: {
                        es: "Enero 2020 - Enero 2021",
                        en: "January 2020 - January 2021"
                    },
                    start: "2020-01",
                    end: "2021-01",
                    isNew: false,
                    bullets: {
                        es: [
                            "Creacion de una aplicacion movil Android y una plataforma web en Laravel para monitoreo de produccion.",
                            "Integracion de SQL Server, MySQL y Oracle para unificar informacion operativa.",
                            "Mejora de experiencia de usuario y calidad mediante pruebas y entrega continua."
                        ],
                        en: [
                            "Created an Android mobile app and a Laravel web platform for production monitoring.",
                            "Integrated SQL Server, MySQL and Oracle to unify operational information.",
                            "Improved user experience and software quality through testing and continuous delivery."
                        ]
                    }
                }
            ];

            const translations = {
                es: {
                    pageTitle: "Jhonatan Fernandez | Portafolio",
                    navProfile: "Perfil",
                    navExperience: "Experiencia",
                    navStack: "Stack",
                    navProjects: "Proyectos",
                    navContact: "Contacto",
                    heroEyebrow: "Software Developer | Backend | Laravel | .NET",
                    heroTitle: "Construyo software empresarial confiable que resuelve procesos reales.",
                    heroCopy: "Soy desarrollador de software con 5 anos de experiencia en analisis, diseno, desarrollo e implementacion de aplicaciones web, moviles y de escritorio para gobierno, salud, telecomunicaciones y comercio electronico. Trabajo con enfoque en calidad, usabilidad, optimizacion de procesos y entregas continuas.",
                    heroMeta: "Cali, Colombia | Ingles intermedio | Disponible para roles backend, full stack y evolucion de plataformas empresariales",
                    heroBtnProjects: "Ver casos destacados",
                    heroBtnCv: "Descargar CV",
                    heroBtnContact: "Hablemos",
                    metricAge: "Edad",
                    metricBase: "Ubicacion",
                    metricRole: "Enfoque",
                    metricRoleValue: "Backend",
                    heroPanelNote: "Experiencia trabajando con Laravel, .NET, Azure DevOps, bases de datos empresariales y equipos que necesitan estabilidad, calidad y velocidad de entrega.",
                    proofTitle: "Sectores donde he generado valor",
                    proofCopy: "Experiencia aplicada en contextos donde confiabilidad, seguimiento y continuidad operativa son claves.",
                    servicesTitle: "Como puedo aportar",
                    servicesCopy: "Puedo integrarme tanto en equipos que construyen producto como en areas que necesitan mejorar sistemas ya existentes, acelerar entregas o estabilizar operaciones.",
                    profileTitle: "Un perfil tecnico orientado a impacto, continuidad y resultados.",
                    profileCopy: "He participado en proyectos donde la operacion no puede detenerse: entidades publicas, aplicaciones medicas, plataformas de soporte, monitoreo de produccion y comercio digital. Mi aporte combina criterio tecnico, orden en la ejecucion y foco en el negocio.",
                    strengthTitle: "Valor que aporto",
                    strengthCopy: "Convierto necesidades operativas en software util, ordenado y mantenible, cuidando la calidad tecnica y la continuidad del negocio.",
                    specialtiesTitle: "Especializacion",
                    specialtiesCopy: "Trabajo con .NET C#, Java, PHP, Laravel, SQL Server, Oracle y MySQL, con experiencia complementaria en Angular, Flutter y servicios cloud.",
                    certificationsTitle: "Respaldo tecnico",
                    certificationsCopy: "Mis certificaciones en Oracle Cloud fortalecen mi perfil para proyectos donde infraestructura, datos y escalabilidad son clave.",
                    approachTitle: "Forma de trabajo",
                    approachCopy: "Me adapto bien a equipos con Azure DevOps, CI/CD, control de calidad y ciclos de entrega donde la estabilidad y el seguimiento importan.",
                    featuredTitle: "Casos destacados",
                    featuredCopy: "Algunos proyectos representativos que muestran el tipo de problemas que he ayudado a resolver y el valor que puedo aportar a nuevos equipos.",
                    experienceTitle: "Experiencia profesional",
                    experienceCopy: "Trayectoria construyendo soluciones para plataformas con necesidades reales de calidad, trazabilidad, integracion y soporte continuo.",
                    exp1Role: "Programmer - Cali, Colombia",
                    exp1Bullet1: "Desarrollo de aplicaciones en PHP y Laravel para entidades de gobierno.",
                    exp1Bullet2: "Trabajo con estandares de calidad, Azure DevOps y flujos CI/CD.",
                    exp1Bullet3: "Gestion de multiples bases de datos y procesos empresariales.",
                    exp2Role: "Programmer - Cali, Colombia",
                    exp2Bullet1: "Desarrollo de software medico con C# .NET.",
                    exp2Bullet2: "Aplicacion de buenas practicas de desarrollo y calidad.",
                    exp2Bullet3: "Gestion de SQL Server, Oracle y procesos de integracion continua.",
                    exp3Role: "Programmer - Yumbo, Colombia",
                    exp3Bullet1: "Construccion de aplicacion web en Laravel para tickets y soporte.",
                    exp3Bullet2: "Mejora de experiencia de usuario en un entorno de uso intensivo.",
                    exp3Bullet3: "Pruebas, CI/CD y administracion de SQL Server y Oracle.",
                    exp4Role: "Programmer - Yumbo, Colombia",
                    exp4Bullet1: "Desarrollo de aplicacion web y movil para monitoreo de produccion.",
                    exp4Bullet2: "Implementacion en Java, PHP Laravel y Android.",
                    exp4Bullet3: "Validaciones de calidad y trabajo con MySQL, SQL Server y Oracle.",
                    stackTitle: "Tecnologias clave",
                    stackCopy: "Un stack orientado a aplicaciones empresariales, integracion de sistemas y gestion de datos para entornos de alta demanda.",
                    certSectionTitle: "Certificaciones",
                    certSectionCopy: "Credenciales que refuerzan mi capacidad para trabajar en contextos cloud y de datos con criterio tecnico.",
                    projectTitle: "Proyectos y repositorios recientes",
                    projectCopy: "Esta seccion muestra repositorios publicos recientes desde GitHub para dar visibilidad a mi trabajo tecnico.",
                    githubTitle: "Repositorios publicos en GitHub",
                    githubCopy: "Esta seccion complementa el portafolio con repositorios recientes para dar visibilidad a mi trabajo tecnico publico.",
                    repoLabel: "Repositorio GitHub",
                    repoEmpty: "Repositorio sin descripcion publicada.",
                    repoLink: "Ver repositorio",
                    repoFallback: "No fue posible cargar los repositorios desde GitHub en este momento.",
                    contactTitle: "Listo para aportar valor desde el primer sprint.",
                    contactCopy: "Si buscas un desarrollador con experiencia en software empresarial, criterio tecnico y capacidad para integrarse rapido al equipo, conversemos.",
                    phoneTitle: "Telefono",
                    phoneAction: "Escribir por WhatsApp",
                    emailTitle: "Correo",
                    emailAction: "Enviar correo",
                    locationTitle: "Ubicacion",
                    locationAction: "Volver arriba",
                    badgeNew: "Nueva",
                    footerText: "Copyright 2019 - {year} Jhonatan Fernandez",
                    stats: [
                        { label: "Anos de experiencia" },
                        { label: "Sectores atendidos" },
                        { label: "Certificaciones Oracle" },
                        { value: "80%+", label: "Estandares de calidad" }
                    ],
                    services: [
                        {
                            title: "Desarrollo backend y APIs",
                            copy: "Construccion y evolucion de sistemas con Laravel, .NET y logica de negocio enfocada en estabilidad y mantenimiento."
                        },
                        {
                            title: "CI/CD y calidad de software",
                            copy: "Implementacion de flujos con Azure DevOps, pruebas y practicas de entrega continua para reducir friccion en despliegues."
                        },
                        {
                            title: "Bases de datos y procesos",
                            copy: "Trabajo con MySQL, SQL Server y Oracle para soportar procesos criticos, integraciones y trazabilidad operacional."
                        },
                        {
                            title: "Soporte y evolucion de plataformas",
                            copy: "Mejoras funcionales, mantenimiento y optimizacion para plataformas que ya estan en produccion y necesitan seguir creciendo."
                        }
                    ],
                    featuredProjects: [
                        {
                            sector: "Gobierno",
                            title: "Plataformas para entidades gubernamentales",
                            stack: "Laravel | MySQL | Azure DevOps",
                            bullets: [
                                "Desarrollo de aplicaciones web para entidades de alcance nacional.",
                                "Estandarizacion de flujos con CI/CD para mejorar la velocidad y confiabilidad de entrega."
                            ],
                            impact: "Impacto: estandares de calidad superiores al 80% y mayor estabilidad en entornos criticos."
                        },
                        {
                            sector: "Salud",
                            title: "Aplicaciones medicas en .NET",
                            stack: "C# .NET | SQL Server | Oracle",
                            bullets: [
                                "Diseno y desarrollo de soluciones medicas para operaciones sensibles.",
                                "Integracion de despliegues continuos y buenas practicas de ingenieria para reducir errores."
                            ],
                            impact: "Impacto: ciclos de entrega mas agiles y plataformas mas robustas para el sector salud."
                        },
                        {
                            sector: "Soporte",
                            title: "Sistema de tickets y atencion operativa",
                            stack: "Laravel | Testing | CI/CD",
                            bullets: [
                                "Construccion de una plataforma de soporte enfocada en eficiencia y adopcion del usuario.",
                                "Diseno de interfaz intuitiva con 95% de usabilidad y pruebas unitarias para asegurar calidad."
                            ],
                            impact: "Impacto: mejor experiencia de uso y continuidad de entrega sin interrupciones."
                        },
                        {
                            sector: "E-commerce",
                            title: "Tiendas virtuales con pagos integrados",
                            stack: "WordPress | Pasarelas de pago | QA",
                            bullets: [
                                "Desarrollo integral de tiendas virtuales desde la conceptualizacion hasta el lanzamiento.",
                                "Integracion de pagos seguros y pruebas con 80% de cobertura para elevar confianza y estabilidad."
                            ],
                            impact: "Impacto: soluciones de comercio digital listas para operar con mayor confiabilidad."
                        }
                    ]
                },
                en: {
                    pageTitle: "Jhonatan Fernandez | Portfolio",
                    navProfile: "Profile",
                    navExperience: "Experience",
                    navStack: "Stack",
                    navProjects: "Projects",
                    navContact: "Contact",
                    heroEyebrow: "Software Developer | Backend | Laravel | .NET",
                    heroTitle: "I build reliable business software for real operational needs.",
                    heroCopy: "I am a software developer with 5 years of experience in the analysis, design, development and implementation of web, mobile and desktop applications for government, healthcare, telecommunications and e-commerce. I work with a strong focus on quality, usability, process optimization and continuous delivery.",
                    heroMeta: "Cali, Colombia | Intermediate English | Available for backend, full stack and enterprise platform roles",
                    heroBtnProjects: "View featured work",
                    heroBtnCv: "Download resume",
                    heroBtnContact: "Let's talk",
                    metricAge: "Age",
                    metricBase: "Location",
                    metricRole: "Focus",
                    metricRoleValue: "Backend",
                    heroPanelNote: "Experience with Laravel, .NET, Azure DevOps, enterprise databases and teams that need stability, quality and faster delivery.",
                    proofTitle: "Industries where I have delivered value",
                    proofCopy: "Experience in environments where reliability, traceability and operational continuity are essential.",
                    servicesTitle: "How I can help",
                    servicesCopy: "I can contribute both to product teams building new capabilities and to organizations that need to improve existing systems, accelerate delivery or stabilize operations.",
                    profileTitle: "A technical profile focused on impact, continuity and execution.",
                    profileCopy: "I have worked on projects where operations cannot stop: public institutions, healthcare applications, support platforms, production monitoring and digital commerce. My contribution combines technical judgment, execution discipline and business focus.",
                    strengthTitle: "What I bring",
                    strengthCopy: "I turn operational needs into useful, maintainable software while protecting technical quality and business continuity.",
                    specialtiesTitle: "Specialization",
                    specialtiesCopy: "I work with .NET C#, Java, PHP, Laravel, SQL Server, Oracle and MySQL, plus complementary experience in Angular, Flutter and cloud services.",
                    certificationsTitle: "Technical backing",
                    certificationsCopy: "My Oracle Cloud certifications strengthen my profile for projects where infrastructure, data and scalability matter.",
                    approachTitle: "How I work",
                    approachCopy: "I adapt well to teams using Azure DevOps, CI/CD, quality controls and delivery cycles where stability and traceability matter.",
                    featuredTitle: "Featured work",
                    featuredCopy: "Representative initiatives that show the type of problems I have helped solve and the value I can bring to new teams.",
                    experienceTitle: "Professional experience",
                    experienceCopy: "A track record building solutions for platforms that require quality, traceability, integration and continuous support.",
                    exp1Role: "Programmer - Cali, Colombia",
                    exp1Bullet1: "Built PHP and Laravel applications for government institutions.",
                    exp1Bullet2: "Worked with quality standards, Azure DevOps and CI/CD workflows.",
                    exp1Bullet3: "Managed multiple databases and enterprise processes.",
                    exp2Role: "Programmer - Cali, Colombia",
                    exp2Bullet1: "Developed healthcare software using C# .NET.",
                    exp2Bullet2: "Applied software quality practices and structured delivery flows.",
                    exp2Bullet3: "Handled SQL Server, Oracle and continuous integration processes.",
                    exp3Role: "Programmer - Yumbo, Colombia",
                    exp3Bullet1: "Built a Laravel web application for ticketing and support workflows.",
                    exp3Bullet2: "Improved user experience for a high-usage environment.",
                    exp3Bullet3: "Worked on testing, CI/CD and SQL Server and Oracle administration.",
                    exp4Role: "Programmer - Yumbo, Colombia",
                    exp4Bullet1: "Developed web and mobile monitoring solutions for production processes.",
                    exp4Bullet2: "Implemented solutions with Java, PHP Laravel and Android.",
                    exp4Bullet3: "Delivered quality validations and worked with MySQL, SQL Server and Oracle.",
                    stackTitle: "Core technologies",
                    stackCopy: "A stack focused on enterprise applications, systems integration and data management for demanding environments.",
                    certSectionTitle: "Certifications",
                    certSectionCopy: "Credentials that reinforce my ability to work on cloud and data-oriented environments with sound technical judgment.",
                    projectTitle: "Recent projects and repositories",
                    projectCopy: "This section loads recent public repositories from GitHub to showcase my technical work.",
                    githubTitle: "Public GitHub repositories",
                    githubCopy: "This section complements the portfolio with recent repositories to showcase my public technical work.",
                    repoLabel: "GitHub Repository",
                    repoEmpty: "Repository without a published description.",
                    repoLink: "View repository",
                    repoFallback: "GitHub repositories could not be loaded right now.",
                    contactTitle: "Ready to add value from the first sprint.",
                    contactCopy: "If you need a developer with enterprise software experience, technical judgment and the ability to integrate quickly into a team, let's connect.",
                    phoneTitle: "Phone",
                    phoneAction: "Message on WhatsApp",
                    emailTitle: "Email",
                    emailAction: "Send email",
                    locationTitle: "Location",
                    locationAction: "Back to top",
                    badgeNew: "New",
                    footerText: "Copyright 2019 - {year} Jhonatan Fernandez",
                    stats: [
                        { label: "Years of experience" },
                        { label: "Industries served" },
                        { label: "Oracle certifications" },
                        { value: "80%+", label: "Quality standards" }
                    ],
                    services: [
                        {
                            title: "Backend development and APIs",
                            copy: "Build and evolve systems with Laravel, .NET and business logic focused on stability and maintainability."
                        },
                        {
                            title: "CI/CD and software quality",
                            copy: "Implement Azure DevOps workflows, testing and continuous delivery practices to reduce deployment friction."
                        },
                        {
                            title: "Databases and business processes",
                            copy: "Work with MySQL, SQL Server and Oracle to support critical processes, integrations and operational traceability."
                        },
                        {
                            title: "Platform support and evolution",
                            copy: "Functional improvements, maintenance and optimization for systems already in production that need to keep growing."
                        }
                    ],
                    featuredProjects: [
                        {
                            sector: "Government",
                            title: "Platforms for government institutions",
                            stack: "Laravel | MySQL | Azure DevOps",
                            bullets: [
                                "Built web applications for national public institutions.",
                                "Standardized CI/CD workflows to improve delivery speed and reliability."
                            ],
                            impact: "Impact: quality standards above 80% and stronger stability in critical environments."
                        },
                        {
                            sector: "Healthcare",
                            title: "Healthcare applications in .NET",
                            stack: "C# .NET | SQL Server | Oracle",
                            bullets: [
                                "Designed and developed healthcare solutions for sensitive operational contexts.",
                                "Integrated continuous delivery and software engineering practices to reduce errors."
                            ],
                            impact: "Impact: faster release cycles and more robust platforms for healthcare operations."
                        },
                        {
                            sector: "Support",
                            title: "Ticketing and support operations platform",
                            stack: "Laravel | Testing | CI/CD",
                            bullets: [
                                "Built a support platform focused on efficiency and user adoption.",
                                "Designed an intuitive interface with 95% usability and unit testing for quality assurance."
                            ],
                            impact: "Impact: better usability and uninterrupted delivery for support teams."
                        },
                        {
                            sector: "E-commerce",
                            title: "E-commerce platforms with payment integrations",
                            stack: "WordPress | Payment gateways | QA",
                            bullets: [
                                "Delivered online stores from concept to launch.",
                                "Integrated secure payments and testing with 80% coverage to improve trust and stability."
                            ],
                            impact: "Impact: digital commerce solutions ready to operate with higher reliability."
                        }
                    ]
                }
            };

            let cachedRepos = [];

            document.getElementById("age").textContent = String(state.currentYear - 1998);

            renderSkills();
            renderCertifications();
            renderExperienceList();
            setLanguage("es");
            bindLanguageButtons();
            initGitHubRepos("jhonatan11530");

            function bindLanguageButtons() {
                const buttons = document.querySelectorAll("[data-lang-switch]");
                buttons.forEach(function (button) {
                    button.addEventListener("click", function () {
                        setLanguage(button.getAttribute("data-lang-switch"));
                    });
                });
            }

            function setLanguage(lang) {
                const t = translations[lang];
                state.lang = lang;

                document.documentElement.lang = lang;
                document.title = t.pageTitle;

                document.querySelectorAll("[data-i18n]").forEach(function (node) {
                    const key = node.getAttribute("data-i18n");
                    if (t[key]) {
                        node.textContent = t[key];
                    }
                });

                document.getElementById("metricRoleValue").textContent = t.metricRoleValue;
                document.getElementById("date_today").textContent = t.footerText.replace("{year}", String(state.currentYear));
                document.getElementById("reposFallback").textContent = t.repoFallback;

                document.querySelectorAll("[data-lang-switch]").forEach(function (button) {
                    const active = button.getAttribute("data-lang-switch") === lang;
                    button.classList.toggle("btn-primary", active);
                    button.classList.toggle("btn-outline-primary", !active);
                });

                renderStats();
                renderSectors();
                renderServices();
                renderFeaturedProjects();
                renderExperienceList();
                renderCertifications();
                renderRepos();
            }

            function renderSkills() {
                const container = document.getElementById("skillsList");
                skills.forEach(function (skill) {
                    const node = document.createElement("div");
                    node.className = "skill-chip";
                    node.innerHTML = '<img src="' + skill.imgSrc + '" alt="' + skill.name + '" loading="lazy"><span>' + skill.name + "</span>";
                    container.appendChild(node);
                });
            }

            function renderCertifications() {
                const t = translations[state.lang];
                const container = document.getElementById("certificationsList");
                container.innerHTML = "";
                certifications.forEach(function (certification) {
                    const node = document.createElement("div");
                    node.className = "col-md-6 mb-4";
                    const badge = certification.isNew ? '<span class="item-badge">' + t.badgeNew + "</span>" : "";
                    node.innerHTML = '' +
                        '<a class="cert-card" href="' + certification.href + '" target="_blank" rel="noopener noreferrer">' +
                        '<img src="' + certification.imgSrc + '" alt="' + certification.name + '" loading="lazy">' +
                        '<div class="mt-3 font-weight-bold text-dark">' + certification.name + badge + "</div>" +
                        "</a>";
                    container.appendChild(node);
                });
            }

            function renderStats() {
                const t = translations[state.lang];
                const container = document.getElementById("statsList");
                container.innerHTML = "";

                const dynamicStats = [
                    { value: getExperienceYearsLabel(), label: t.stats[0].label },
                    { value: String(getUniqueSectorMeta().length), label: t.stats[1].label },
                    { value: String(getOracleCertificationsCount()), label: t.stats[2].label },
                    { value: t.stats[3].value, label: t.stats[3].label }
                ];

                dynamicStats.forEach(function (stat) {
                    const node = document.createElement("div");
                    node.className = "col-xl-3 col-md-6 mb-4";
                    node.innerHTML = '' +
                        '<div class="stat-card">' +
                        '<span class="stat-value">' + stat.value + "</span>" +
                        '<span class="stat-label">' + stat.label + "</span>" +
                        "</div>";
                    container.appendChild(node);
                });
            }

            function renderSectors() {
                const t = translations[state.lang];
                const container = document.getElementById("sectorList");
                container.innerHTML = "";

                getUniqueSectorMeta().forEach(function (sector) {
                    const node = document.createElement("span");
                    node.className = "sector-chip";
                    node.innerHTML = sector.name + (sector.isNew ? '<span class="item-badge">' + t.badgeNew + "</span>" : "");
                    container.appendChild(node);
                });
            }

            function renderExperienceList() {
                const t = translations[state.lang];
                const container = document.getElementById("experienceList");
                container.innerHTML = "";

                experiences.forEach(function (experience) {
                    const node = document.createElement("div");
                    const badge = experience.isNew ? '<span class="item-badge">' + t.badgeNew + "</span>" : "";
                    const bullets = experience.bullets[state.lang].map(function (item) {
                        return "<li>" + item + "</li>";
                    }).join("");

                    node.className = "col-lg-6 mb-4";
                    node.innerHTML = '' +
                        '<article class="timeline-card">' +
                        '<p class="timeline-period mb-2">' + experience.period[state.lang] + "</p>" +
                        "<h4>" + experience.company + badge + "</h4>" +
                        '<p class="meta-text">' + experience.role[state.lang] + "</p>" +
                        "<ul>" + bullets + "</ul>" +
                        "</article>";
                    container.appendChild(node);
                });
            }

            function getMonthIndex(dateValue) {
                const parts = dateValue.split("-").map(function (item) {
                    return Number(item);
                });
                return (parts[0] * 12) + (parts[1] - 1);
            }

            function getCurrentMonthIndex() {
                const now = new Date();
                return (now.getFullYear() * 12) + now.getMonth();
            }

            function getExperienceMonthsTotal() {
                return experiences.reduce(function (total, experience) {
                    const start = getMonthIndex(experience.start);
                    const end = experience.end ? getMonthIndex(experience.end) : getCurrentMonthIndex();
                    const months = Math.max(0, end - start + 1);
                    return total + months;
                }, 0);
            }

            function getExperienceYearsLabel() {
                const totalMonths = getExperienceMonthsTotal();
                const years = Math.floor(totalMonths / 12);
                return String(Math.max(1, years)) + "+";
            }

            function getUniqueSectorMeta() {
                const sectorMap = new Map();

                experiences.forEach(function (experience) {
                    const key = state.lang === "es" ? experience.sector : experience.sectorEn;
                    if (!sectorMap.has(key)) {
                        sectorMap.set(key, {
                            name: key,
                            isNew: Boolean(experience.isNew)
                        });
                    } else if (experience.isNew) {
                        sectorMap.get(key).isNew = true;
                    }
                });

                return Array.from(sectorMap.values());
            }

            function getOracleCertificationsCount() {
                return certifications.filter(function (certification) {
                    return certification.provider && certification.provider.toLowerCase() === "oracle";
                }).length;
            }

            function renderServices() {
                const t = translations[state.lang];
                const container = document.getElementById("serviceList");
                container.innerHTML = "";

                t.services.forEach(function (service) {
                    const node = document.createElement("div");
                    node.className = "col-lg-6 mb-4";
                    node.innerHTML = '' +
                        '<article class="service-card">' +
                        '<h3 class="card-title">' + service.title + "</h3>" +
                        '<p class="card-copy mb-0">' + service.copy + "</p>" +
                        "</article>";
                    container.appendChild(node);
                });
            }

            function renderFeaturedProjects() {
                const t = translations[state.lang];
                const container = document.getElementById("featuredProjectsList");
                container.innerHTML = "";

                t.featuredProjects.forEach(function (project) {
                    const bullets = project.bullets.map(function (item) {
                        return "<li>" + item + "</li>";
                    }).join("");

                    const node = document.createElement("div");
                    node.className = "col-xl-3 col-lg-6 mb-4";
                    node.innerHTML = '' +
                        '<article class="featured-card">' +
                        '<div class="featured-head">' +
                        '<span class="featured-sector">' + project.sector + "</span>" +
                        "<h3>" + project.title + "</h3>" +
                        '<p class="featured-stack">' + project.stack + "</p>" +
                        "</div>" +
                        '<div class="featured-body">' +
                        "<ul>" + bullets + "</ul>" +
                        '<div class="featured-impact">' + project.impact + "</div>" +
                        "</div>" +
                        "</article>";
                    container.appendChild(node);
                });
            }

            async function initGitHubRepos(username) {
                const avatar = document.getElementById("avatar");

                try {
                    const profileResponse = await fetch("https://api.github.com/users/" + username);
                    const profile = await profileResponse.json();

                    if (profile.avatar_url) {
                        avatar.src = profile.avatar_url;
                    }

                    const reposResponse = await fetch("https://api.github.com/users/" + username + "/repos?sort=updated&per_page=6");
                    const repos = await reposResponse.json();

                    if (Array.isArray(repos)) {
                        cachedRepos = repos;
                    }
                } catch (error) {
                    cachedRepos = [];
                }

                renderRepos();
            }

            function renderRepos() {
                const t = translations[state.lang];
                const container = document.getElementById("reposList");
                const fallback = document.getElementById("reposFallback");

                container.innerHTML = "";

                if (!cachedRepos.length) {
                    fallback.classList.remove("d-none");
                    return;
                }

                fallback.classList.add("d-none");

                cachedRepos.forEach(function (repo) {
                    const node = document.createElement("div");
                    node.className = "col-lg-4 col-md-6 mb-4";
                    node.innerHTML = '' +
                        '<article class="repo-card">' +
                        '<p class="timeline-period mb-2">' + t.repoLabel + "</p>" +
                        "<h4>" + repo.name + "</h4>" +
                        '<p class="repo-description mb-4">' + (repo.description || t.repoEmpty) + "</p>" +
                        '<a class="link-accent" href="' + repo.html_url + '" target="_blank" rel="noopener noreferrer">' + t.repoLink + "</a>" +
                        "</article>";
                    container.appendChild(node);
                });
            }
        });

