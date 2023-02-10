import { gsap } from 'gsap';
import { ScrollTrigger} from "gsap/ScrollTrigger";

import {useEffect} from "react";

function useTranslateScaleAnimation(classToAnimate: string) {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const targets = gsap.utils.toArray(classToAnimate) as gsap.DOMTarget[];

        for (let i = 0; i < targets.length; i++) {
            gsap.fromTo(targets[i], {
                scrollTrigger: {
                    trigger: targets[i],
                    start: 'top bottom',
                },
                duration: 1,
                scale: 0,
                translateX: (i % 2 === 0) ? -1500 : 1500,
            }, {
                scrollTrigger: {
                    trigger: targets[i],
                    start: 'top bottom',
                },
                duration: 1,
                scale: 1,
                translateX: 0,
            })
        }
    }, [classToAnimate]);
}

export default useTranslateScaleAnimation;