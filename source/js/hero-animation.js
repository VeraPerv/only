import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const heroAnimationInit = () => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5,
      onUpdate: (self) => {

        const targetScale = 3.8;
        const scale = 1 + gsap.utils.clamp(0, targetScale - 1, self.progress * 25);

        gsap.to('.hero__video-wrapper', {
          scale: scale,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    }
  });
};

export { heroAnimationInit };
