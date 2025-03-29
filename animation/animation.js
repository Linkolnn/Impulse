import { gsap } from 'gsap';

export const showMenu = (element) => {
    gsap.set(element, { display: 'flex' });
    gsap.to(element, {
        duration: 0.5,
        x: 0,
        ease: 'power3.inOut'
    });
};

export const hideMenu = (element) => {
    gsap.to(element, {
        duration: 0.5,
        x: '-100%',
        ease: 'power3.inOut',
        onComplete: () => {
            gsap.set(element, { display: 'none' });
        }
    });
};

export const showModal = (element) => {
    gsap.fromTo(
        element,
        { opacity: 0, scale: 0.9 },
        { duration: 0.5, opacity: 1, scale: 1 }
    );
};

export const hideModal = (element, onComplete) => {
    gsap.to(element, {
        duration: 0.5,
        opacity: 0,
        scale: 0.9,
        onComplete
    });
};
