const books = [
    {
        title: "What the CEO Wants You to Know",
        author: "Ram Charan",
        image: "images/library/what-ceo-wants.jpg",
        link: "hhttps://amzn.to/4metgRL",
        description: "Distills the essence of business into four principles—customers, cash generation, return on invested capital, and growth. Helps employees make better decisions and contribute more effectively."
    },
    {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        image: "images/library/think-grow-rich.jpg",
        link: "https://amzn.to/3HbFWJE",
        description: "Outlines 13 principles for achieving success and wealth, emphasizing desire, faith, persistence, and goal-setting."
    },
    {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        image: "images/library/win-friends.jpg",
        link: "https://amzn.to/3He1KEq",
        description: "Teaches techniques for effective communication, relationship-building, and leadership to improve social skills and influence."
    },
    {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen R. Covey",
        image: "images/library/7-habits.jpg",
        link: "https://amzn.to/450GkE8",
        description: "Presents a principle-centered approach to personal and professional effectiveness through seven transformative habits."
    },
    {
        title: "Scrum: The Art of Doing Twice the Work in Half the Time",
        author: "Jeff Sutherland and J.J. Sutherland",
        image: "images/library/scrum.jpg",
        link: "https://amzn.to/4l2fVKF",
        description: "Introduces Scrum, a framework for team productivity emphasizing iterative progress, collaboration, and adaptability."
    },
    {
        title: "The Phoenix Project",
        author: "Gene Kim, Kevin Behr, George Spafford",
        image: "images/library/phoenix-project.jpg",
        link: "https://amzn.to/45jlPBq",
        description: "A business novel exploring how DevOps can transform IT and drive business success through the story of a struggling IT department."
    },
    {
        title: "Accelerate: The Science of Lean Software and DevOps",
        author: "Nicole Forsgren, Jez Humble, Gene Kim",
        image: "images/library/accelerate.jpg",
        link: "https://amzn.to/4laq8EN",
        description: "Reveals key capabilities that drive software delivery performance using DevOps and lean practices based on scientific research."
    },
    {
        title: "Critical Chain",
        author: "Eliyahu M. Goldratt",
        image: "images/library/critical-chain.jpg",
        link: "https://amzn.to/45g3lBS",
        description: "Introduces the Critical Chain method of project management through a business novel applying the Theory of Constraints."
    },
    {
        title: "It's Not Luck",
        author: "Eliyahu M. Goldratt",
        image: "images/library/not-luck.jpg",
        link: "https://amzn.to/3UD6E0K",
        description: "A sequel to The Goal, applying TOC thinking processes to solve complex business problems in marketing and strategy."
    },
    {
        title: "The Goal",
        author: "Eliyahu M. Goldratt, Jeff Cox",
        image: "images/library/the-goal.jpg",
        link: "https://amazon.com/dp/0884270610",
        description: "A business novel introducing the Theory of Constraints through the story of a plant manager improving productivity."
    },
    {
        title: "Good to Great",
        author: "Jim Collins",
        image: "images/library/good-to-great.jpg",
        link: "https://amzn.to/3ULGsB7",
        description: "Explores why some companies transition from good to great, identifying principles like Level 5 Leadership and the Flywheel Effect."
    },
    {
        title: "Grit: The Power of Passion and Perseverance",
        author: "Angela Duckworth",
        image: "images/library/grit.jpg",
        link: "https://amzn.to/4odGi30",
        description: "Argues that success is driven more by grit—passion and perseverance—than by talent, and explains how to cultivate it."
    },
    {
        title: "Crucial Conversations: Tools for Talking When Stakes Are High",
        author: "Kerry Patterson, Joseph Grenny, Ron McMillan, Al Switzler",
        image: "images/library/crucial-conversations.jpg",
        link: "https://amzn.to/3Hhm1Jc",
        description: "Provides tools for navigating high-stakes conversations with confidence, fostering dialogue and reducing conflict."
    },
    {
        title: "QBQ! The Question Behind the Question",
        author: "John G. Miller",
        image: "images/library/qbq.jpg",
        link: "https://amzn.to/4lPRXnb",
        description: "Focuses on personal accountability by teaching how to ask better, action-oriented questions to drive change."
    },
    {
        title: "Self Unfoldment",
        author: "Swami Chinmayananda",
        image: "images/library/self-unfoldment.jpg",
        link: "https://amzn.to/3U9Sm7N",
        description: "A spiritual guide rooted in Vedanta philosophy, offering practical wisdom for self-discovery and transformation."
    },
    {
        title: "Ahead in the Cloud",
        author: "Stephen Orban",
        image: "images/library/ahead-cloud.jpg",
        link: "https://amzn.to/4fATkE9",
        description: "A guide for enterprise leaders navigating digital transformation through cloud computing and cultural shifts."
    },
    {
        title: "Men Are from Mars, Women Are from Venus",
        author: "John Gray",
        image: "images/library/mars-venus.jpg",
        link: "https://amzn.to/4l3uC0d",
        description: "Explains how men and women differ in communication and emotional needs to improve relationships and reduce conflict."
    },
    {
        title: "Superbosses: How Exceptional Leaders Master the Flow of Talent",
        author: "Sydney Finkelstein",
        image: "images/library/superbosses.jpg",
        link: "https://amzn.to/4l5k40g",
        description: "Profiles leaders who develop top talent by fostering innovation, mentoring, and empowering others."
    },
    {
        title: "Leadership Lessons from a UPS Driver",
        author: "Ron Wallace",
        image: "images/library/ups-driver.jpg",
        link: "https://amzn.to/41leQXl",
        description: "Shares leadership insights from a UPS executive focused on teamwork, humility, and a 'we, not me' culture."
    },
    {
        title: "Unshakeable: Your Financial Freedom Playbook",
        author: "Tony Robbins & Peter Mallouk",
        image: "images/library/unshakeable.jpg",
        link: "https://amzn.to/44Zsuln",
        description: "This book is a practical guide to achieving financial freedom and peace of mind. Robbins distills insights from top financial minds like Warren Buffett and Ray Dalio, offering simple strategies for investing wisely. He emphasizes the importance of index funds, diversification, and emotional discipline, helping readers avoid common pitfalls like high fees and fear-based decisions"
    },
    {
        title: "Parenting with Presence: Practices for Raising Conscious, Confident, Caring Kids",
        author: "Susan Stiffelman",
        image: "images/library/parenting.jpg",
        link: "https://amzn.to/46CTUyy",
        description: "In this insightful guide, Stiffelman explores how parenting can be a path to personal growth. She encourages mindfulness and emotional attunement, showing how everyday challenges with children can become opportunities for self-awareness and deeper connection. The book blends practical strategies with reflective exercises to help parents nurture both their children and themselves"
    }
];