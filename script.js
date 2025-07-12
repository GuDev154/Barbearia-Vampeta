// Lightbox Galeria
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.querySelector('.lightbox-img');
        const lightboxCaption = document.querySelector('.lightbox-caption');
        const lightboxClose = document.querySelector('.lightbox-close');
        
        galleryItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('img').src;
                const caption = item.dataset.caption;
                
                lightboxImg.src = imgSrc;
                lightboxCaption.textContent = caption;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Menu Mobile
        const mobileMenu = document.getElementById('mobileMenu');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Scroll Suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Fechar menu mobile após clicar
                    navMenu.classList.remove('active');
                }
            });
        });
        
        // Efeito Header ao Scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.padding = '12px 0';
                header.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.6)';
            } else {
                header.style.padding = '18px 0';
                header.style.boxShadow = 'none';
            }
        });
        
        // Pausar carrossel ao passar o mouse
        const productsTrack = document.querySelector('.products-track');
        
        productsTrack.addEventListener('mouseenter', () => {
            productsTrack.style.animationPlayState = 'paused';
        });
        
        productsTrack.addEventListener('mouseleave', () => {
            productsTrack.style.animationPlayState = 'running';
        });

        