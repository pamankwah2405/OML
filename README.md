# OML Africa Landing Page

This repository contains the source code for the OML Africa strategic HR and management consulting landing page. The project is built with HTML, CSS, and JavaScript, featuring a modern, responsive design with animations.

## Project Structure

*   `index.html`: The main HTML file containing the page structure and content.
*   `style.css`: The stylesheet for all custom styles, layout, and responsiveness.
*   `script.js`: The JavaScript file for handling animations and interactivity, such as the stats counter.

---

## Code

Below is the complete source code for the project.

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OML Africa - Strategic HR & Management Consulting</title>

    <!-- External Libraries (Icons, Fonts, Animations) -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.min.js"></script>

    <!-- Custom Stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <main>

        <!-- HERO SECTION START -->
        <section id="home" class="hero-bg relative overflow-hidden flex items-center justify-center">
             <!-- Video Background -->
             <video autoplay loop muted playsinline class="hero-video">
                <!-- NOTE: Replace this with your actual video file URL -->
                <source src="https://video.wixstatic.com/video/f8f56a_8b7127bc0cbf4e9f9be21bb1a668d249/1080p/mp4/file.mp4" type="video/mp4">
                Your browser does not support the video tag.
             </video>
             <div class="absolute inset-0 bg-black opacity-70"></div>
            <div class="container relative z-10 text-center">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 animate-fade-in-down">
                    Driving Africa's Growth Through Strategic Excellence
                </h1>
                <p class="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-up">
                    We partner with leading organizations to transform talent, optimize operations, and unlock sustainable value across the continent.
                </p>
                <a href="#contact" class="bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg cta-button animate-fade-in-up">
                    Partner With Us
                </a>
            </div>
        </section>
        <!-- HERO SECTION END -->
        
        
        <!-- ABOUT US SECTION START -->
        <section id="about-us" class="section-padding bg-white">
            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="about-us-image">
                        <img src="https://blackeconomicalliance.org/app/uploads/2023/09/three-coworkers-having-a-discussion-in-modern-office-social-1024x536.jpg" alt="OML Africa Team" class="rounded-lg shadow-xl w-full">
                    </div>
                    <div>
                        <h2 class="section-title mb-4">About OML Africa</h2>
                        <p class="text-black mb-4 text-lg">
                            At OML Africa, we are more than just consultants; we are catalysts for growth and transformation. Founded on the principle of unlocking Africa's immense potential, we provide world-class strategic HR and management consulting services tailored to the unique dynamics of the African market.
                        </p>
                        <p class="text-black mb-6">
                            Our team comprises seasoned experts with deep local insights and global perspectives. We partner with our clients, becoming a seamless extension of their teams to tackle their most significant challenges and seize their greatest opportunities.
                        </p>
                        <a href="#contact" class="bg-red-600 text-white font-semibold py-3 px-8 rounded-lg cta-button mt-6">
                            Let's Connect &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- ABOUT US SECTION END -->
        
        <!-- OUR PROCESS SECTION START -->
        <section id="our-process" class="section-padding bg-slate-50">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title">Our Approach</h2>
                    <p class="section-subtitle mt-4 max-w-2xl mx-auto">A proven process for delivering exceptional results and sustainable growth.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <!-- Step 1 -->
                    <div class="process-step p-6">
                        <div class="process-icon mb-4">1</div>
                        <h3 class="text-xl font-bold text-slate-900 mb-2">Discovery & Analysis</h3>
                        <p class="text-black">We begin by deeply understanding your vision, challenges, and market landscape through comprehensive analysis.</p>
                    </div>
                    <!-- Step 2 -->
                    <div class="process-step p-6">
                        <div class="process-icon mb-4">2</div>
                        <h3 class="text-xl font-bold text-slate-900 mb-2">Strategy & Design</h3>
                        <p class="text-black">We co-create bespoke, data-driven strategies and solutions tailored to your specific organizational goals.</p>
                    </div>
                    <!-- Step 3 -->
                    <div class="process-step p-6">
                        <div class="process-icon mb-4">3</div>
                        <h3 class="text-xl font-bold text-slate-900 mb-2">Implementation & Growth</h3>
                        <p class="text-black">We partner with you to implement the strategy, ensuring seamless integration and long-term success.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- OUR PROCESS SECTION END -->

        <!-- STATS BANNER SECTION START -->
        <section id="stats" class="py-12 bg-slate-900 text-white">
            <div class="container">
                <div class="flex flex-wrap justify-center gap-8 text-center">
                    <div class="stat-item p-4">
                        <h3 class="text-5xl font-extrabold text-red-500" data-target="95">0</h3>
                        <p class="mt-2 text-gray-300 font-semibold">Client Satisfaction</p>
                    </div>
                    <div class="stat-item p-4">
                        <h3 class="text-5xl font-extrabold text-red-500" data-target="50">0</h3>
                        <p class="mt-2 text-gray-300 font-semibold">Projects Completed</p>
                    </div>
                    <div class="stat-item p-4">
                        <h3 class="text-5xl font-extrabold text-red-500" data-target="10">0</h3>
                        <p class="mt-2 text-gray-300 font-semibold">Countries Served</p>
                    </div>
                    <div class="stat-item p-4">
                        <h3 class="text-5xl font-extrabold text-red-500" data-target="200">0</h3>
                        <p class="mt-2 text-gray-300 font-semibold">Average Client ROI %</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- STATS BANNER SECTION END -->
        
        <!-- INDUSTRIES SECTION START -->
        <section id="industries" class="section-padding bg-slate-50">
            <div class="container text-center">
                <h2 class="section-title">Industries We Impact</h2>
                <p class="section-subtitle mt-4 max-w-2xl mx-auto mb-12">
                    Our expertise spans a diverse range of sectors, driving growth and innovation where it matters most.
                </p>
            </div>
            <div class="scroller-container">
                <div class="scroller">
                    <!-- List is duplicated for a seamless loop -->
                    <div class="industry-item">Healthcare</div>
                    <div class="industry-item">Finance</div>
                    <div class="industry-item">Agriculture</div>
                    <div class="industry-item">SMEs</div>
                    <div class="industry-item">Startups</div>
                    <div class="industry-item">Education</div>
                    <div class="industry-item">NGOs</div>
                    <div class="industry-item">Multinationals</div>
                    <div class="industry-item">International Organizations</div>
                    <!-- Duplicate -->
                    <div class="industry-item">Healthcare</div>
                    <div class="industry-item">Finance</div>
                    <div class="industry-item">Agriculture</div>
                    <div class="industry-item">SMEs</div>
                    <div class="industry-item">Startups</div>
                    <div class="industry-item">Education</div>
                    <div class="industry-item">NGOs</div>
                    <div class="industry-item">Multinationals</div>
                    <div class="industry-item">International Organizations</div>
                </div>
            </div>
        </section>
        <!-- INDUSTRIES SECTION END -->


        <!-- SERVICES SECTION START -->
        <section id="services" class="section-padding bg-white">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title">Our Core Services</h2>
                    <p class="section-subtitle mt-4 max-w-2xl mx-auto">
                        We deliver tailored solutions that address your most critical business challenges.
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div class="service-card text-center p-8 rounded-xl">
                        <div class="text-red-600 mb-4"><i class="fas fa-users-cog text-4xl"></i></div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900">HR Outsourcing</h3>
                        <p class="text-black mb-6">Comprehensive HR management, from payroll to compliance, allowing you to focus on your core business.</p>
                        <a href="#" class="service-button">Learn More &rarr;</a>
                    </div>
                    <div class="service-card text-center p-8 rounded-xl">
                        <div class="text-red-600 mb-4"><i class="fas fa-search-dollar text-4xl"></i></div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900">Audit & Assurance</h3>
                        <p class="text-black mb-6">Independent audits that provide clarity, mitigate risk, and build stakeholder confidence.</p>
                        <a href="#" class="service-button">Learn More &rarr;</a>
                    </div>
                    <div class="service-card text-center p-8 rounded-xl">
                        <div class="text-red-600 mb-4"><i class="fas fa-lightbulb text-4xl"></i></div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900">Management Advisory</h3>
                        <p class="text-black mb-6">Strategic guidance to navigate complex market dynamics, optimize strategy, and drive growth.</p>
                        <a href="#" class="service-button">Learn More &rarr;</a>
                    </div>
                    <div class="service-card text-center p-8 rounded-xl">
                        <div class="text-red-600 mb-4"><i class="fas fa-user-tie text-4xl"></i></div>
                        <h3 class="text-xl font-bold mb-2 text-slate-900">Executive Talent</h3>
                        <p class="text-black mb-6">Identifying and recruiting visionary leaders who will shape the future of your organization.</p>
                        <a href="#" class="service-button">Learn More &rarr;</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- SERVICES SECTION END -->

        <!-- CASE STUDIES / PROVEN SUCCESS SECTION START -->
        <section id="case-studies" class="section-padding bg-slate-50">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title">Proven Success</h2>
                    <p class="section-subtitle mt-4 max-w-2xl mx-auto">See how we've helped industry leaders achieve remarkable results.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- New Case Study 1 -->
                    <div class="case-study-card bg-white rounded-lg overflow-hidden shadow-lg transition-all">
                        <div class="overflow-hidden">
                            <img src="https://placehold.co/600x400/059669/ffffff?text=Healthcare" alt="Healthcare Sector" style="width: 100%; height: 14rem; object-fit: cover;">
                        </div>
                        <div class="p-6">
                            <p class="text-sm text-red-600 font-semibold mb-2">HEALTHCARE</p>
                            <h3 class="text-xl font-bold mb-3 text-slate-900">Modernizing Talent Management for a Hospital Group</h3>
                            <p class="text-black">Implemented a digital HR system, improving staff retention by 25% and reducing hiring time.</p>
                        </div>
                    </div>
                    <!-- New Case Study 2 -->
                    <div class="case-study-card bg-white rounded-lg overflow-hidden shadow-lg transition-all">
                         <div class="overflow-hidden">
                            <img src="https://placehold.co/600x400/6366F1/ffffff?text=Education" alt="Education Sector" style="width: 100%; height: 14rem; object-fit: cover;">
                        </div>
                        <div class="p-6">
                            <p class="text-sm text-red-600 font-semibold mb-2">EDUCATION & NGOs</p>
                            <h3 class="text-xl font-bold mb-3 text-slate-900">Strategic Restructuring for an International NGO</h3>
                            <p class="text-black">Facilitated a new operational model, increasing program impact and securing long-term donor funding.</p>
                        </div>
                    </div>
                    <!-- New Case Study 3 -->
                    <div class="case-study-card bg-white rounded-lg overflow-hidden shadow-lg transition-all">
                        <div class="overflow-hidden">
                            <img src="https://placehold.co/600x400/0f172a/ffffff?text=Multinationals" alt="Multinational Corporation" style="width: 100%; height: 14rem; object-fit: cover;">
                        </div>
                        <div class="p-6">
                            <p class="text-sm text-red-600 font-semibold mb-2">MULTINATIONALS & SMEs</p>
                            <h3 class="text-xl font-bold mb-3 text-slate-900">Optimizing Pan-African Operations for a Global Firm</h3>
                            <p class="text-black">Harmonized compliance and payroll across five African markets, ensuring seamless expansion.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- CASE STUDIES SECTION END -->

        <!-- TESTIMONIALS SECTION START -->
        <section id="testimonials" class="section-padding bg-white">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title">What Our Clients Say</h2>
                    <p class="section-subtitle mt-4 max-w-2xl mx-auto">Real feedback from partners who have experienced the OML Africa difference.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Testimonial 1 -->
                    <div class="testimonial-card bg-slate-50 p-8 rounded-lg">
                        <i class="fas fa-quote-left text-red-600 text-3xl mb-4"></i>
                        <p class="text-black mb-6">OML's strategic guidance was a game-changer. Their insights into the African market are unparalleled, and they helped us navigate complex HR challenges with ease.</p>
                        <div class="flex items-center">
                            <img src="https://placehold.co/60x60/EFEFEF/333333?text=A.D." alt="Client" class="w-14 h-14 rounded-full mr-4">
                            <div>
                                <h4 class="font-bold text-slate-900">Amina Diop</h4>
                                <p class="text-sm text-slate-700">CEO, HealthBridge Group</p>
                            </div>
                        </div>
                    </div>
                    <!-- Testimonial 2 -->
                    <div class="testimonial-card bg-slate-50 p-8 rounded-lg">
                        <i class="fas fa-quote-left text-red-600 text-3xl mb-4"></i>
                        <p class="text-black mb-6">The team at OML Africa became a true extension of our own. Their dedication, professionalism, and data-driven approach led to a 30% increase in operational efficiency.</p>
                        <div class="flex items-center">
                            <img src="https://placehold.co/60x60/EFEFEF/333333?text=K.O." alt="Client" class="w-14 h-14 rounded-full mr-4">
                            <div>
                                <h4 class="font-bold text-slate-900">Kwame Osei</h4>
                                <p class="text-sm text-slate-700">Director, Global Solutions Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- TESTIMONIALS SECTION END -->

        <!-- WHY CHOOSE US SECTION START -->
        <section id="why-us" class="section-padding bg-white">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title">The OML Africa Advantage</h2>
                    <p class="section-subtitle mt-4 max-w-2xl mx-auto">Our commitment to excellence and deep local expertise sets us apart.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div class="value-card p-6">
                        <div class="text-red-600 mb-4"><i class="fas fa-globe-africa text-5xl"></i></div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Pan-African Insight</h3>
                        <p class="text-black">Unmatched understanding of the diverse business landscapes across the African continent.</p>
                    </div>
                    <div class="value-card p-6">
                        <div class="text-red-600 mb-4"><i class="fas fa-chart-line text-5xl"></i></div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Data-Driven Strategy</h3>
                        <p class="text-black">Leveraging advanced analytics and insights to inform every recommendation and decision.</p>
                    </div>
                    <div class="value-card p-6">
                        <div class="text-red-600 mb-4"><i class="fas fa-handshake text-5xl"></i></div>
                        <h3 class="text-2xl font-bold text-slate-900 mb-2">Collaborative Partnership</h3>
                        <p class="text-black">We work as an extension of your team, dedicated to your long-term success and growth.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- WHY CHOOSE US SECTION END -->

        <!-- TEAM SECTION START -->
        <section id="team" class="section-padding bg-slate-50">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title">Meet Our Experts</h2>
                    <p class="section-subtitle mt-4 max-w-2xl mx-auto">A team of passionate professionals dedicated to your success.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Team Member 1 -->
                    <div class="team-card text-center">
                        <img src="https://placehold.co/400x400/0f172a/FFFFFF?text=Expert+1" alt="Team Member 1" class="w-full rounded-lg mb-4">
                        <h3 class="text-xl font-bold text-slate-900">Dr. Evelyn Mensah</h3>
                        <p class="text-red-600">Managing Partner</p>
                    </div>
                    <!-- Team Member 2 -->
                    <div class="team-card text-center">
                        <img src="https://placehold.co/400x400/dc2626/FFFFFF?text=Expert+2" alt="Team Member 2" class="w-full rounded-lg mb-4">
                        <h3 class="text-xl font-bold text-slate-900">Bayo Adekunle</h3>
                        <p class="text-red-600">Head of Strategy</p>
                    </div>
                    <!-- Team Member 3 -->
                    <div class="team-card text-center">
                        <img src="https://placehold.co/400x400/0f172a/FFFFFF?text=Expert+3" alt="Team Member 3" class="w-full rounded-lg mb-4">
                        <h3 class="text-xl font-bold text-slate-900">Fatima Zahra</h3>
                        <p class="text-red-600">Lead HR Consultant</p>
                    </div>
                    <!-- Team Member 4 -->
                    <div class="team-card text-center">
                        <img src="https://placehold.co/400x400/dc2626/FFFFFF?text=Expert+4" alt="Team Member 4" class="w-full rounded-lg mb-4">
                        <h3 class="text-xl font-bold text-slate-900">Samuel Kalu</h3>
                        <p class="text-red-600">Audit & Assurance Lead</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- TEAM SECTION END -->

        <!-- INSIGHTS SECTION START -->
        <section id="insights" class="section-padding bg-white">
            <div class="container">
                <div class="text-center mb-12">
                    <h2 class="section-title">Our Thinking</h2>
                    <p class="section-subtitle mt-4 max-w-2xl mx-auto">Explore our latest insights on leadership, strategy, and talent in Africa.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <!-- Insight 1 (similar to case study card) -->
                    <a href="#" class="insight-card bg-white rounded-lg overflow-hidden shadow-lg transition-all block">
                        <div class="p-6">
                            <p class="text-sm text-red-600 font-semibold mb-2">LEADERSHIP</p>
                            <h3 class="text-xl font-bold mb-3 text-slate-900">The Future of Work in Africa: 5 Trends to Watch</h3>
                            <p class="text-black">Discover the key shifts shaping the modern African workplace and how leaders can adapt.</p>
                        </div>
                    </a>
                    <!-- Add more insight cards here -->
                </div>
            </div>
        </section>
        <!-- INSIGHTS SECTION END -->

        <!-- CONTACT SECTION START -->
        <section id="contact" class="section-padding bg-slate-900 text-white">
            <div class="container">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 class="text-4xl font-bold mb-4">Let's Build the Future Together</h2>
                        <p class="text-gray-300 text-lg mb-6">Ready to transform your business? Reach out to our team of experts to start the conversation.</p>
                        <div class="space-y-4">
                            <p class="flex items-center text-lg"><i class="fas fa-map-marker-alt text-red-500 mr-3" style="width: 1.5rem;"></i> Accra, Ghana | Lagos, Nigeria</p>
                            <p class="flex items-center text-lg"><i class="fas fa-envelope text-red-500 mr-3" style="width: 1.5rem;"></i> connect@omlafrica.com</p>
                            <p class="flex items-center text-lg"><i class="fas fa-phone-alt text-red-500 mr-3" style="width: 1.5rem;"></i> +233 12 345 6789</p>
                        </div>
                    </div>
                    <div class="bg-white p-8 rounded-lg shadow-2xl">
                        <h3 class="text-2xl font-bold text-red-600 mb-6">Send Us an Inquiry</h3>
                        <form action="#" method="POST">
                            <div class="mb-4">
                                <label for="name" class="block font-semibold mb-2 text-slate-700">Full Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block font-semibold mb-2 text-slate-700">Email Address</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="mb-4">
                                <label for="company" class="block font-semibold mb-2 text-slate-700">Company</label>
                                <input type="text" id="company" name="company">
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block font-semibold mb-2 text-slate-700">How can we help?</label>
                                <textarea id="message" name="message" rows="4" required></textarea>
                            </div>
                            <button type="submit" class="w-full bg-red-600 text-white font-bold py-3 px-6 rounded-lg cta-button hover:bg-red-700">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- CONTACT SECTION END -->

    </main>

    <!-- Custom JavaScript -->
    <script src="script.js"></script>

</body>
</html>
```

### `style.css`

```css
/* Base & Typography */
html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Century Gothic', 'Poppins', sans-serif;
    background-color: #ffffff;
    color: #1a1a1a; /* Updated text color to black */
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

/* Layout & Container */
.container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    box-sizing: border-box;
}
@media (min-width: 640px) { .container { max-width: 640px; } }
@media (min-width: 768px) { .container { max-width: 768px; } }
@media (min-width: 1024px) { .container { max-width: 1024px; } }
@media (min-width: 1280px) { .container { max-width: 1280px; } }

/* General Utility Classes */
.grid { display: grid; }
.flex { display: flex; }
.items-center { align-items: center; }
.items-start { align-items: start; }
.text-center { text-align: center; }
.relative { position: relative; }
.absolute { position: absolute; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.z-10 { z-index: 10; }
.z-50 { z-index: 50; }
.overflow-hidden { overflow: hidden; }
.w-full { width: 100%; }
.max-w-2xl { max-width: 42rem; }
.max-w-3xl { max-width: 48rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Spacing */
.mb-2 { margin-bottom: 0.5rem; }
.mb-3 { margin-bottom: 0.75rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-6 { margin-bottom: 1.5rem; }
.mb-8 { margin-bottom: 2rem; }
.mb-12 { margin-bottom: 3rem; }
.mr-4 { margin-right: 1rem; }
.mr-3 { margin-right: 0.75rem; }
.mt-4 { margin-top: 1rem; }
.mt-6 { margin-top: 1.5rem; }
.mt-12 { margin-top: 3rem; }
.p-6 { padding: 1.5rem; }
.p-8 { padding: 2rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.px-8 { padding-left: 2rem; padding-right: 2rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.py-4 { padding-top: 1rem; padding-bottom: 1rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.section-padding { padding-top: 6rem; padding-bottom: 6rem; }
.py-12 { padding-top: 3rem; padding-bottom: 3rem; }
.py-24 { padding-top: 6rem; padding-bottom: 6rem; }
.space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
.gap-8 { gap: 2rem; }
.gap-12 { gap: 3rem; }

/* Flex & Grid */
.flex-wrap { flex-wrap: wrap; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.space-x-8 > :not([hidden]) ~ :not([hidden]) { margin-left: 2rem; }

/* Grid Columns */
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }

/* Typography */
.text-sm { font-size: 0.875rem; }
.text-lg { font-size: 1.125rem; }
.text-xl { font-size: 1.25rem; }
.text-2xl { font-size: 1.5rem; }
.text-4xl { font-size: 2.25rem; }
.text-5xl { font-size: 3rem; }
.font-semibold { font-weight: 600; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.leading-tight { line-height: 1.25; }

/* Colors & Backgrounds */
.bg-white { background-color: #ffffff; }
.bg-slate-50 { background-color: #f8fafc; }
.bg-slate-100 { background-color: #f1f5f9; }
.bg-slate-800 { background-color: #1e293b; }
.bg-slate-900 { background-color: #0f172a; }
.bg-black { background-color: #000000; }
.bg-red-600 { background-color: #dc2626; }
.bg-red-700 { background-color: #b91c1c; }
.text-white { color: #ffffff; }
.text-black { color: #1a1a1a; }
.text-gray-200 { color: #e5e7eb; }
.text-gray-300 { color: #d1d5db; }
.text-slate-700 { color: #334155; }
.text-slate-900 { color: #0f172a; }
.text-red-500 { color: #ef4444; }
.text-red-600 { color: #dc2626; }
.opacity-70 { opacity: 0.7; }

/* Borders & Rounded Corners */
.rounded-lg { border-radius: 0.5rem; }
.rounded-xl { border-radius: 0.75rem; }

/* Effects & Transitions */
.shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
.shadow-xl { box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); }
.shadow-2xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); }
.transition-all { transition-property: all; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 300ms; }
.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 150ms; }

/* Forms */
input, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    color: #1a1a1a;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}
input:focus, textarea:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ef4444;
    border-color: #ef4444;
}

/* --- Custom Component Styles --- */

.hero-bg {
    color: white;
    height: 100vh;
    min-height: 500px;
}
.hero-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    object-fit: cover;
}

.cta-button {
    display: inline-block;
    transition: all 0.3s ease;
    text-decoration: none; /* remove underline from links styled as buttons */
}
.cta-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px -5px rgba(220, 38, 38, 0.4);
}

/* Red Section Headers */
.section-title {
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: -0.025em;
    color: #dc2626; /* Red color */
}
.section-subtitle {
    font-size: 1.125rem;
    color: #1a1a1a; /* Black color */
}

.service-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    transition: all 0.3s ease;
}
.service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04);
    border-color: #dc2626;
}

.service-button {
    display: inline-block;
    margin-top: 1rem;
    font-weight: 600;
    color: #dc2626;
    transition: all 0.3s ease;
}

.service-button:hover {
    color: #b91c1c;
    transform: translateX(4px);
}

.case-study-card img {
    transition: transform 0.4s ease;
}
.case-study-card:hover img {
    transform: scale(1.05);
}

/* Process Section */
.process-icon {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    border-radius: 9999px;
    background-color: #f1f5f9;
    border: 2px solid #dc2626;
    color: #dc2626;
    font-weight: 700;
    font-size: 1.25rem;
    margin-left: auto;
    margin-right: auto;
    transition: all 0.3s ease;
}
.process-step:hover .process-icon {
    background-color: #dc2626;
    color: #ffffff;
    transform: scale(1.1);
}

/* Testimonials Section */
.testimonial-card {
    transition: all 0.3s ease;
}
.testimonial-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.07);
}

/* Team Section */
.team-card img {
    transition: all 0.4s ease;
    filter: grayscale(50%);
}
.team-card:hover img {
    filter: grayscale(0%);
    transform: scale(1.03);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04);
}

/* Insights Section */
.insight-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 10px 10px -5px rgba(15, 23, 42, 0.04);
}
.insight-card h3 {
    color: #0f172a; /* Ensure heading color is correct */
}

/* --- Industries Scroller --- */
.scroller-container {
    width: 100%;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
    mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
}
.scroller {
    display: flex;
    width: max-content;
    animation: scroll 45s linear infinite;
}
.industry-item {
    background-color: #f1f5f9;
    color: #334155;
    padding: 0.75rem 1.5rem;
    margin: 0 0.75rem;
    border-radius: 9999px;
    font-weight: 500;
    white-space: nowrap;
}

/* For ScrollReveal animations */
.about-us-image, .service-card, .value-card, .case-study-card, .process-step, .stat-item, .testimonial-card, .team-card, .insight-card {
    visibility: hidden;
}

/* Responsive Styles */
@media (min-width: 768px) {
    .md\:text-5xl { font-size: 3.5rem; }
    .md\:text-xl { font-size: 1.25rem; }
    .md\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .md\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}
@media (min-width: 1024px) {
    .lg\:text-6xl { font-size: 4rem; }
    .lg\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .lg\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .lg\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
}

/* Animation Keyframes */
@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
    /* Set initial state for animation */
    opacity: 0;
    animation: fadeInDown 0.8s ease-out forwards;
    animation-delay: 0.2s;
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
    /* Set initial state for animation */
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
    animation-delay: 0.4s;
}

/* Stagger the animation for the button */
.animate-fade-in-up.cta-button {
    animation-delay: 0.6s;
}

@keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}
```

### `script.js`

```javascript
document.addEventListener('DOMContentLoaded', function() {
    
    // --- Animated Stats Counter ---
    const statsSection = document.getElementById('stats');
    const statItems = document.querySelectorAll('.stat-item h3');

    const animateCounter = (element) => {
        const target = +element.getAttribute('data-target');
        const duration = 2000; // 2 seconds
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = 0;

        const timer = setInterval(() => {
            current += 1;
            element.innerText = current;
            if (current === target) {
                clearInterval(timer);
            }
        }, stepTime);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statItems.forEach(item => animateCounter(item));
                observer.unobserve(statsSection); // Animate only once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);

    // --- ScrollReveal Animations ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            easing: 'cubic-bezier(0.5, 0, 0, 1)',
            reset: false // Animations will only run once
        });

        // Reveal animations for different sections
        sr.reveal('.section-title', { origin: 'top' });
        sr.reveal('.section-subtitle', { origin: 'top', delay: 100 });
        sr.reveal('.about-us-image', { origin: 'left' });
        sr.reveal('.service-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.case-study-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.process-step', { interval: 150, origin: 'bottom' });
        sr.reveal('.stat-item', { interval: 150, origin: 'bottom' });
        sr.reveal('.testimonial-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.value-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.team-card', { interval: 150, origin: 'bottom' });
        sr.reveal('.insight-card', { interval: 150, origin: 'bottom' });
        sr.reveal('#contact > .container > .grid > div:first-child', { origin: 'left' });
        sr.reveal('#contact > .container > .grid > div:last-child', { origin: 'right' });
    }
});
```