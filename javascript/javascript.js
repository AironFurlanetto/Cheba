<script>
                const radioButtons = document.querySelectorAll('.radio-buttons input');
                const slides = document.querySelectorAll('.slide');
            
                radioButtons.forEach((radio, index) => {
                  radio.addEventListener('change', () => {
                    slides.forEach((slide, slideIndex) => {
                      slide.style.transform = `translateX(${(slideIndex - index) * 100}%)`;
                    });
                  })
                })
              </script>