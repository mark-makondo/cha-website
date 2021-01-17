// libraries
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const animations = () => {
   

     // responsive animation 
     const responsiveAnimation = () => {

        // responsive animation
        ScrollTrigger.matchMedia({
            
            // desktop
            "(min-width: 769px)": function() {
               
                return function() { 
                    //reset value when viewport changes
                    desktop__resetAnimation();
                };
            },

            // mobile
            "(max-width: 768px)": function() {

                return function() {
                    //reset value when viewport changes
                    mobile__resetAnimation();
                };
            },
            
            // all 
            "all": function() {
                navbarSmoothScroll("put navbar link query here");
            }
        });
    }

    // reset animation here per new animation in responsiveAnimation() 
    const desktop__resetAnimation  = () =>{
        // reset back featured ws animation for mobile
        
    }
    const mobile__resetAnimation = () => {
        // reset back nav link and hr mobile animation for desktop
       
    }

    // section animations

    // #region scroll animations using gsap scroll trigger
    
        const scrollTriggerArray = (main__targetArr, start, end, marker, toggle, type)=> {
            gsap.utils.toArray(main__targetArr).forEach( (box, i) => {
                
                let tl, scrollTriggerObj;

                tl = gsap.timeline({paused: true});

                scrollTriggerObj = {
                    trigger: box,
                    toggleClass: toggle,
                    start: start,
                    end: end,
                    markers: marker,
                    onEnter: () => tl.play(), 
                    onLeave: () => tl.reverse(),
                    onEnterBack: () => tl.play(), 
                    onLeaveBack: () => tl.reverse()
                }
                
                if(type === "sample"){
                   
                    ScrollTrigger.create(scrollTriggerObj)

                }else{ console.log("invalid type") }
            })
        }
        const navChangeColorOnScroll = (type) => {
            let tl, offset, ieSupp__offset;

            tl = gsap.timeline({paused: true})

            if(type === "mobile"){
                tl.add(  mobile__navChangeColor() );
            }else if( type === "ws"){
                tl.add(  desktop__navChangeColor() );
            }

            window.addEventListener('scroll', (e) => {
                e.preventDefault();

                offset = window.scrollY;
                ieSupp__offset = document.documentElement.scrollTop;

                if(offset > 5 || ieSupp__offset > 5){
                    tl.play();
                }else{
                    tl.reverse();
                }
            });
        }
        const mobile__navChangeColor = () => {
            let tl;

            tl = gsap.timeline({ })

            return tl;
        }
        const desktop__navChangeColor = () => {
             let tl;

            tl = gsap.timeline({ })
            
            return tl;
        }
        const navbarSmoothScroll = (target) => {
            target.forEach((item, i) => {
                item.addEventListener("click", (e) => {
                    e.preventDefault();

                    let href = item.getAttribute("href");
                    let query = document.querySelector(href);
                    let topY = query.offsetTop;

                    gsap.to(window, {duration: 1, scrollTo:topY, overwrite: "all", ease:"Power3.easeOut"});
                })
            })
        }

    //#endregion

    // event listener function for animation
    const eventListenersTween = (targetEvet, target, tween) => {
        let event = targetEvet;

        if( event === click ){
            target.addEventListener(event, (e) =>{
                e.preventDefault();
                tween.reversed() ? tween.play() : tween.reverse();
            })

        }else if( event === hover ){
            target.addEventListener(mouseenter, (e) =>{
                e.preventDefault();

                tween.play();
            })
            target.addEventListener(mouseleave, (e) =>{
                e.preventDefault();
                
                tween.reverse();
            })

        }else{
            console.log("event not recognized: " + event)
        }
    }

    return(
        responsiveAnimation()
    );
}

export default animations;