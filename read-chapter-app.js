/* ═══════════════════════════════════════════════════
   READ-CHAPTER-APP.JS — Dynamic article loader
   Reads ?id= from URL, renders the correct blog article
   ═══════════════════════════════════════════════════ */

const articles = {
    1: {
        category: 'Culinary Technique',
        title: 'The Art of the 28-Day Dry Age',
        meta: 'By Head Chef Alessandro &bull; May 2026',
        heroImage: 'images/steak1.jpg',
        body: `
            <p class="drop-cap">Patience is our most vital ingredient. In a world obsessed with speed, we have intentionally built a sanctuary for time. Our specialized aging room is where the true transformation happens — turning an excellent cut of meat into an extraordinary culinary experience.</p>
            <h2>The Science of Time</h2>
            <p>Dry aging is a delicate dance between time, temperature, and humidity. When beef is exposed to air in a controlled environment, two miraculous things occur. First, moisture evaporates from the muscle, creating a greater concentration of beef flavor and taste. Second, the beef's natural enzymes break down the connective tissue in the muscle, leading to more tender beef.</p>
            <img src="images/steak1.jpg" alt="Dry Aging Process" class="article-image">
            <h2>The 28-Day Sweet Spot</h2>
            <p>We've experimented with various aging lengths — from 14 days to over 60. While each has its merits, we've found that 28 days strikes the perfect harmony. It allows enough time for the flavors to deepen, developing subtle notes of roasted nuts and blue cheese, without overpowering the natural essence of the meat.</p>
            <blockquote>"Great food cannot be rushed. It must be respected."</blockquote>
            <h2>The Culinary Philosophy</h2>
            <p>This process is emblematic of our broader philosophy at Herritage Library. We believe in honoring the ingredients and respecting the process. When you bite into our 28-day dry-aged steak, you aren't just tasting meat — you are tasting a month of careful supervision, perfect climate control, and our unwavering dedication to culinary excellence.</p>
        `
    },
    2: {
        category: 'Sourcing',
        title: 'Chasing the Ethiopian Dark Gold',
        meta: 'By Head Barista Marco &bull; May 2026',
        heroImage: 'images/coffee.jpg',
        body: `
            <p class="drop-cap">Some journeys are taken for adventure. Ours was taken for flavor. Our head barista traveled to the sun-baked highlands of Ethiopia — the birthplace of coffee itself — in pursuit of the perfect bean for our signature Vintage Espresso.</p>
            <h2>The Origin Story</h2>
            <p>Ethiopia's Yirgacheffe and Sidamo regions are legendary in the specialty coffee world. The complex volcanic soil, high altitude, and centuries-old natural processing methods produce beans with a flavor profile unlike anything grown elsewhere — bright, fruity, with a rich, wine-like depth that connoisseurs describe as "dark gold."</p>
            <img src="images/coffee.jpg" alt="Ethiopian Coffee Farms" class="article-image">
            <h2>The Roasting Philosophy</h2>
            <p>Back home, our roasting process is as deliberate as the sourcing. A medium-dark roast preserves the terroir of the bean while unlocking its deep, chocolatey backbone. Each batch is small, monitored by hand, and tasted before approval. Only the best makes it to your cup.</p>
            <blockquote>"Coffee is not a drink. It is a ritual, a language, a piece of the earth."</blockquote>
            <h2>A Cup of Heritage</h2>
            <p>Every Vintage Espresso served at Herritage Library carries within it the story of that journey — the farmers, the highlands, the craft. When you sip it, you are connected to something ancient and extraordinary.</p>
        `
    },
    3: {
        category: 'Recipes & Legacy',
        title: 'A Sauce Passed Down Since 1924',
        meta: 'By Chef Isabella &bull; May 2026',
        heroImage: 'images/pasta.jpg',
        body: `
            <p class="drop-cap">In 1924, a young Italian immigrant named Rosa arrived in Karachi with little more than her mother's hand-written recipe book. Within that faded notebook was a white sauce recipe so perfect, so transcendent, that it would survive a century and eventually become the soul of our Artisan Fettuccine.</p>
            <h2>The Recipe That Survived History</h2>
            <p>Rosa's white sauce was deceptively simple — aged butter, fresh cream, a precise measure of nutmeg, and a technique for incorporating cheese that required both patience and wrist strength. She taught it to her daughter, who taught it to hers, across four generations and two continents.</p>
            <img src="images/pasta.jpg" alt="Artisan Pasta Making" class="article-image">
            <h2>Perfecting the Art of Fettuccine</h2>
            <p>Our pasta is hand-rolled fresh each morning. The dough is rested for exactly 30 minutes, rolled to 2mm, and cut with a traditional knife — never a machine. It is this labor of love that gives our fettuccine its distinctive texture, the way it holds the sauce, the slight chew that signals freshness.</p>
            <blockquote>"A recipe is not just instructions. It is memory, love, and time written in flour and heat."</blockquote>
            <h2>From a Kitchen to a Legacy</h2>
            <p>Today, every plate of Artisan Fettuccine we serve is a tribute to Rosa and every cook who preserved her recipe. It is proof that the most extraordinary flavors are not invented — they are inherited.</p>
        `
    },
    4: {
        category: 'Atmosphere',
        title: 'Designing Silence: The Library Concept',
        meta: 'By Creative Director Nadia &bull; May 2026',
        heroImage: 'images/restaurent.jpg',
        body: `
            <p class="drop-cap">Why would anyone design a steakhouse to feel like a library? The question was asked by every investor, every architect, every curious guest who walked through our doors in the early days. Our answer has always been the same: because the most profound dining experiences happen in spaces that command respect.</p>
            <h2>The Psychology of Quiet</h2>
            <p>Research in environmental psychology consistently shows that quieter, more curated spaces cause diners to slow down, engage more deeply with their food, and feel greater satisfaction with their overall experience. Noise is the enemy of flavor. When you cannot hear yourself chew, you cannot truly taste.</p>
            <img src="images/restaurent.jpg" alt="The Herritage Library Interior" class="article-image">
            <h2>Architecture of Luxury</h2>
            <p>Every material was chosen with intentionality — deep mahogany shelves lined with leather-bound volumes, warm Edison bulb lighting over each table, acoustic panels hidden behind fabric wall art. The result is a space that absorbs sound and focuses the senses inward, toward the plate, toward the conversation.</p>
            <blockquote>"Luxury is not the loudest room in the building. It is the quietest one."</blockquote>
            <h2>An Invitation to Be Present</h2>
            <p>At Herritage Library, we are not just serving food. We are offering an environment designed to slow time, to encourage you to put down your phone, to look across the table at the person you came with, and to be present for the meal. That, more than any ingredient, is our most precious offering.</p>
        `
    }
};

// Render the correct article based on URL param
function renderArticle() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;
    const article = articles[id] || articles[1];

    // Set page title
    document.title = `${article.title} | Herritage Library`;

    // Hero
    document.getElementById('chapterHero').style.backgroundImage =
        `linear-gradient(rgba(0,0,0,0.7), rgba(15,8,2,1)), url('${article.heroImage}')`;
    document.getElementById('chapterHeroContent').innerHTML = `
        <span class="chapter-category">${article.category}</span>
        <h1>${article.title}</h1>
        <p class="chapter-meta">${article.meta}</p>
    `;

    // Body
    document.getElementById('articleBody').innerHTML = `
        ${article.body}
        <div class="article-footer">
            <a href="blog.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to Archives</a>
        </div>
    `;

    // Re-run animations on newly injected content
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('is-visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

renderArticle();
