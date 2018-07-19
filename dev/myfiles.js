function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

function changeImage(img) {
    var image = document.createElement("img");
    image.src = img;
    image.width = 1000;
    var content = document.getElementById("content");
    while(content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(image);
}

var summary_txt = 
    {
        name: "summary.txt",
        type: "txt",
        text: "My name is William Qin, I'm a [[b;red;black]Statistics] and [[b;red;black]Economics] major with an [[b;red;black]Computer Science] Minor at [[b;red;black]University of Maryland, College Park.\n"
    };

var contact_txt =
    {
        name: "contact.txt",
        type: "txt",
        text: "E-mail: weihangq @ gmail.com\n\n" +
        	  "E-mail: wqin1 @ umd.edu\n\n" +
              "LinkedIn: https://www.linkedin.com/in/weihang-qin-292846146\n\n" +
              "GitHub: https://github.com/wqill\n"
    };

var resume_pdf =
    {
        name: "wqin_Resume.pdf",
        type: "pdf",
        link: "wqin_Resume.pdf"
    };

var resume_txt =
    {
        name: "resume.txt",
        type: "txt",
        text: "\
\n********************************************************************************\
\n                                  William Qin\
\nWeihangQ@gmail.com                                                  240.463.8291\
\n\
\nMathematics - Statistics Major, Economics Major, Computer Science Minor\
\n********************************************************************************\
\n\
\n   Technical Skills: Python, Excel VBA\
\n   Web & Design    : HTML/CSS, SQL\
\n\
\n\
\n***************\
\nWork Experience\
\n***************\
\n   ___________________________________________________________________________\
\n   Federal Deposit Insurance Corporation (FDIC)\
\n   Banking and Research Intern - Financial Research\
\n      - Conduct research and analysis on developments in the\
\n        financial industry.\
\n  ___________________________________________________________________________\
\n   Millennium Challenge Corporation\
\n   Intern - Enterprise Application\
\n      - Developed and improved threshold program application.\
\n\
\n*********\
\nEducation\
\n*********\
\n\
\n   University of Maryland\
\n      - Dean's Honors List\
\n\
"
    };

var welcome_txt = 
    {
        name: "welcome.txt",
        type: "txt",
        text: "[[b;aqua;black]Welcome to my website.]\n[[b;aqua;black]Please enjoy your stay.]\n\n[[b;red;black]Press ` to minimize the terminal.]\nAvailable commands are:\n" +
              "[[b;red;black]cd], [[b;red;black]ls], [[b;red;black]cat], [[b;red;black]open], [[b;red;black]clear] \n"
    };

var art =
    {
        name: "Art",
        type: "folder",
        kids: [],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]william.qin:/Projects/Art~] ',
                name:   'william.qin',
                completion: function(string, callback) {
                    callback([
                              ]);},
              }
    };

var coding = 
    {
        name: "Coding",
        type: "folder",
        kids: [],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]william.qin:/Projects/Coding~] ',
                name:   'william.qin',
                completion: function(string, callback) {
                    callback([
                              ]);},
              }
    };

var aboutme =
    {
        name: "AboutMe",
        type: "folder",
        kids: [resume_pdf, contact_txt, resume_txt,summary_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]william.qin:/AboutMe~] ',
                name:   'william.qin',
                completion: function(string, callback) {
                    callback([
                              'summary.txt',
                              'resume.txt',
                              'contact.txt',
                              'wqin_Resume.pdf'
                              ]);},
              }
    };

var projects =
    {
        name: "Projects",
        type: "folder",
        kids: [art, coding],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]william.qin:/Projects~] ',
                name:   'william.qin',
                completion: function(string, callback) {
                    callback([
                              'Coding',
                              'Art',
                              ]);},
              }
    };

var home = 
    {
        name: "Home",
        type: "folder",
        kids: [aboutme, projects, welcome_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]william.qin:/~] ',
                name:   'william.qin',
                completion: function(string, callback) {
                    callback([
                              'welcome.txt',
                              'Projects',
                              'AboutMe',
                              ]);},
              }



    };

aboutme.back = home;
projects.back = home;
art.back = projects;
coding.back = projects;
