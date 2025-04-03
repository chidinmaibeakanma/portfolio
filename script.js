// Portfolio items data
const portfolioItems = [
    {
        id: 1,
        title: 'Heritage Home Realty - Branding Project',
        images: ['images/HERITAGE MOCKUP/1111.png', 'images/HERITAGE MOCKUP/1112.png', 'images/HERITAGE MOCKUP/1113.png', 'images/HERITAGE MOCKUP/1114.png', 'images/HERITAGE MOCKUP/1115.png', 'images/HERITAGE MOCKUP/1115.png'],
        currentImageIndex: 0,
        description: '<p>This branding project for Heritage Home Realty was crafted to embody a sense of trust, elegance, and professionalism. The objective was to establish a visual identity that would appeal to both contemporary homeowners and real estate investors.</p><p>The process began with thorough research to understand the brand\'s target audience and positioning within the real estate market. Inspired by the concepts of heritage and modernity, I developed a visual language that balances sophistication with a welcoming feel. The logo, typography, and overall aesthetic were carefully chosen to communicate reliability and lasting value.</p><p>The final result is a cohesive brand identity that reflects the company\'s commitment to quality and client satisfaction while standing out in a competitive market.</p>'
    },
    {
        id: 2,
        title: 'Damseed Organic - Heirloom Seed Catalogue Design',
        images: ['images/CATALOGUE MOCKUP/11.png', 'images/CATALOGUE MOCKUP/12.png', 'images/CATALOGUE MOCKUP/13.png', 'images/CATALOGUE MOCKUP/14.png', 'images/CATALOGUE MOCKUP/15.png', 'images/CATALOGUE MOCKUP/16.png', 'images/CATALOGUE MOCKUP/17.png', 'images/CATALOGUE MOCKUP/18_Interactive PDF.png'],
        currentImageIndex: 0,
        description: '<p>This catalogue project for Damseed Organic was aimed at showcasing the rich heritage and quality of heirloom seeds through a clean and professional visual identity. The project involved creating a unique brand name and logo, followed by designing a comprehensive catalogue using InDesign.</p><p>The design process began with brainstorming to develop a name that would reflect the organic and natural essence of heirloom seeds. Once the name "Damseed Organic" was chosen, the next step was designing a logo that captured both tradition and freshness.</p><p>In the layout phase, GREP and nested styles were utilized to maintain consistent typography and formatting throughout the catalogue. This streamlined approach ensured that content was visually appealing and well-organized, making the information easy to read while preserving a clean, natural aesthetic.</p><p>The final product is a thoughtfully designed catalogue that highlights the authenticity of Damseed Organic, delivering an engaging and informative experience for readers.</p>'
    },
    {
        id: 3,
        title: 'Chi Steak House - Branding Project',
        images: ['images/CHI STEAKHOUSE MOCKUP/111.png', 'images/CHI STEAKHOUSE MOCKUP/112.png', 'images/CHI STEAKHOUSE MOCKUP/113.png', 'images/CHI STEAKHOUSE MOCKUP/114.png', 'images/CHI STEAKHOUSE MOCKUP/115.png', 'images/CHI STEAKHOUSE MOCKUP/116.png', 'images/CHI STEAKHOUSE MOCKUP/117.png', 'images/CHI STEAKHOUSE MOCKUP/118.png'],
        currentImageIndex: 0,
        description: '<p>Chi Steak House is a dining destination that combines elegance with exceptional quality. The branding concept was designed to reflect a refined and welcoming atmosphere while emphasizing the richness of the dining experience.</p><p>The design process began with exploring concepts that embodied strength and authenticity, leading to the creation of a bold logo featuring a cow motif. This symbol captures the essence of the steakhouse while conveying a sense of tradition and quality.</p><p>The visual identity was further enhanced with sophisticated typography and a cohesive color palette, creating a harmonious and polished look. From menus to signage, every element was thoughtfully designed to maintain brand consistency and leave a lasting impression.</p>'
    },
    {
        id: 4,
        title: 'NSG - Roots Album Cover Remake',
        images: ['images/ROOTS MOCKUP/11111.png', 'images/ROOTS MOCKUP/11112.png', 'images/ROOTS MOCKUP/11113.png', 'images/ROOTS MOCKUP/11114.png', 'images/ROOTS MOCKUP/11115.png', 'images/ROOTS MOCKUP/11116.png', 'images/ROOTS MOCKUP/11117.png', 'images/ROOTS MOCKUP/11118.png', 'images/ROOTS MOCKUP/11119.png'],
        currentImageIndex: 0,
        description: '<p>This project involved redesigning the album cover for \"Roots\" by NSG as part of a school assignment. The goal was to create a fresh and dynamic visual representation that stayed true to the album\'s themes while introducing a modern twist.</p><p>The design process began with analyzing the original cover and identifying key elements that resonate with the album\'s message and the group\'s identity. Inspired by the fusion of culture and contemporary style that NSG embodies, the new design features a striking imagery to reflect their sound.</p><p>The final result is a visually captivating cover that pays homage to the original while adding a modern perspective.</p>'
    },
    {
        id: 5,
        title: 'Regal Law Firm - Branding Project',
        images: ['images/REGAL MOCKUP/111.png', 'images/REGAL MOCKUP/112.png', 'images/REGAL MOCKUP/113.png', 'images/REGAL MOCKUP/114.png', 'images/REGAL MOCKUP/115.png', 'images/REGAL MOCKUP/116.png', 'images/REGAL MOCKUP/117.png', 'images/REGAL MOCKUP/118.png'],
        currentImageIndex: 0,
        description: '<p>Regal Law Firm\'s branding was designed to convey authority, stability, and professionalism while maintaining a refined and sophisticated aesthetic. The logo features a roof with six pillars and three steps, symbolizing a strong foundation and unwavering support, with the letter \"R\" in the center to represent the firm\'s identity.</p><p>The design process started with researching visual elements commonly associated with legal institutions, focusing on symbols that communicate strength and integrity. The roof and pillars were chosen to signify protection and resilience, while the balanced composition of the logo reflects structure and order.</p><p>To maintain a modern and polished look, a clean and bold non-serif font was selected for the brand name, reinforcing clarity and professionalism. The final outcome is a timeless brand identity that instills confidence and trust.</p>'
    },
    {
        id: 6,
        title: 'Hers - Restaurant Branding Project',
        images: ['images/HERS MOCKUP/111.png', 'images/HERS MOCKUP/112.png', 'images/HERS MOCKUP/113.png', 'images/HERS MOCKUP/114.png', 'images/HERS MOCKUP/115.png', 'images/HERS MOCKUP/116.png', 'images/HERS MOCKUP/117.png', 'images/HERS MOCKUP/118.png', 'images/HERS MOCKUP/119.png'],
        currentImageIndex: 0,
        description: '<p>The branding for Hers restaurant was designed to reflect an inviting and contemporary dining experience with a focus on elegance and sophistication. The goal was to create a visual identity that resonates with modern diners while emphasizing the warmth and personalization of the dining experience.</p><p>The design process began with exploring names and visuals that conveyed strength and a refined atmosphere. The final wordmark was crafted to be simple yet distinctive, using elegant typography to represent the restaurant\'s identity.</p><p>A refined color palette, combined with sleek and minimalistic design elements, was chosen to evoke feelings of luxury and intimacy. The branding was extended to the menu design and other brand elements, ensuring a consistent and memorable guest experience from the moment they view the logo to when they enjoy their meal.</p>'
    },
];

// Portfolio grid
function initializePortfolio() {
    const portfolioGrid = document.querySelector('#portfolio .row');
    
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'col-md-4 col-sm-6';
        portfolioItem.innerHTML = `
            <div class="portfolio-item" data-id="${item.id}">
                <div class="portfolio-overlay">
                    <span class="view-text">Click to View</span>
                </div>
                <img src="${item.images[0]}" alt="${item.title}" class="img-fluid">
                <div class="portfolio-info p-3">
                    <h5>${item.title}</h5>
                </div>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Handle portfolio item click
document.querySelector('#portfolio').addEventListener('click', (e) => {
    const portfolioItem = e.target.closest('.portfolio-item');
    if (!portfolioItem) return;

    const itemId = parseInt(portfolioItem.dataset.id);
    const item = portfolioItems.find(i => i.id === itemId);
    
    if (item) {
        updateModalContent(item);
        const modal = new bootstrap.Modal(document.querySelector('#portfolioModal'));
        modal.show();
    }
});

// Update modal content
function updateModalContent(item) {
    const modalImage = document.querySelector('#modalImage');
    const modalTitle = document.querySelector('#modalTitle');
    const modalDescription = document.querySelector('#modalDescription');
    
    modalImage.src = item.images[item.currentImageIndex];
    modalTitle.textContent = item.title;
    modalDescription.innerHTML = item.description;
}

// Handle gallery navigation
document.querySelector('#prevImage').addEventListener('click', () => {
    const currentItem = portfolioItems.find(item => item.title === document.querySelector('#modalTitle').textContent);
    if (currentItem) {
        currentItem.currentImageIndex = (currentItem.currentImageIndex - 1 + currentItem.images.length) % currentItem.images.length;
        updateModalContent(currentItem);
    }
});

document.querySelector('#nextImage').addEventListener('click', () => {
    const currentItem = portfolioItems.find(item => item.title === document.querySelector('#modalTitle').textContent);
    if (currentItem) {
        currentItem.currentImageIndex = (currentItem.currentImageIndex + 1) % currentItem.images.length;
        updateModalContent(currentItem);
    }
});

// Handle contact form submission
document.querySelector('#contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = {
        fullName: document.querySelector('#fullName').value,
        email: document.querySelector('#email').value,
        subject: document.querySelector('#subject').value,
        message: document.querySelector('#message').value
    };
    
    // Log submission
    console.log('Form submitted:', formData);
    
    // Clear form
    e.target.reset();
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
});

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
}); 