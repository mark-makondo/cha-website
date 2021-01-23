// libraries
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

// helper functions
import Helper from '../helper/helper';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);

const animations = () => {
    //#region global variables
    // navbar
    let nav = Helper.querySelector(".nav");
    let nav_arrow = Helper.querySelector(".nav__arrow");
    let nav_arrow_svg = Helper.querySelector(".nav__arrow svg");
    let nav_list = Helper.querySelectorAll(".nav__container ul li");
    let gsap_navList = gsap.utils.toArray(".nav__container ul li a");
    let navList = document.querySelectorAll(".nav__container ul li a");
    // let gsap_navLists = gsap.utils.toArray(".nav__container ul li");
    // let navLists = document.querySelectorAll(".nav__container ul li");
    // header
    let hero_beauty =  Helper.querySelector(".header__logo #hero-beauty");
    let hero_lineOne =  Helper.querySelector(".header__logo #hero-lineOne");
    let hero_lineTwo =  Helper.querySelector(".header__logo #hero-lineTwo");
    let hero_cha =  Helper.querySelector(".header__logo #hero-cha");
    let header_info = Helper.querySelector(".header__info");
    // about
    let about_img = Helper.querySelector(".about__image-box");
    let about_title = Helper.querySelector(".about__half h1");
    let about_info = Helper.querySelector(".about__info");
    let about_name = Helper.querySelector(".about__info__container h2");
    let about_say1 = Helper.querySelector(".about__info__container span:nth-of-type(1)");
    let about_say2 = Helper.querySelector(".about__info__container span:nth-of-type(2)");
    // works
    let works_title = Helper.querySelector(".works__list__container h2");
    let works_hair = Helper.querySelector(".works__list__container ul li:nth-of-type(1)");
    let works_eyebrows = Helper.querySelector(".works__list__container ul li:nth-of-type(2)");
    let works_beautyCare = Helper.querySelector(".works__list__container ul li:nth-of-type(3)");
    let works_nailCare = Helper.querySelector(".works__list__container ul li:nth-of-type(4)");
    let works_waxing = Helper.querySelector(".works__list__container ul li:nth-of-type(5)");
    let works_img = Helper.querySelector(".works__img-box");

    // nav handler states
    let clicked = false;
    let expanded = false;
    let compressed = false;
    // scroll trigger states
    let scroll_type:string; 

    //#endregion

     // responsive animation 
    const responsiveAnimation = () => {
        
        // Scroll Trigger
        ScrollTrigger.matchMedia({
            // desktop
            "(min-width: 769px)": function() {
                animate_navHandler();
                scrollTriggerArray("#Home", "top+=100 top", "top+=100 bottom-=200", false, "nav-compressed", false, 0, "nav-compress");
                return function() {
                    ScrollTrigger.refresh(true)
                };
            },
            // mobile
            "(max-width: 768px)": function() {
                clicked = true;
                expanded = false;
                compressed = true;
                animate_navHandler();
                return function() {
                    clicked = false;
                    expanded = true;
                    compressed = false;
                    ScrollTrigger.refresh(true)
                };
            },

            "all": function() {
                // smooth scroll
                navbarSmoothScroll(gsap_navList);
                // sections
                scrollTriggerArray("#Home", "top top+=50", "bottom-=100 bottom-=500", false, "logo-animated", false, 0, "logo-animate");
                scrollTriggerArray("#About", "top top", "bottom top", false, "about-pinned", true, 1, "about-pin-animate");
                scrollTriggerArray("#Works", "top top+=50", "bottom bottom-=500", false, "works-animated", false, 0, "works-animate");
                // nav links
                scrollTriggerArray("section", "top+=50 top+=55", "bottom+=46 top+=50", false, "nav-active", false, 0, "navLink-animate");
            }
        })

        // nav handler
        animate_navHandler();
        nav_arrow?.addEventListener("click", click_navAnimate);
    }

    //#region nav event animation handler
    const click_navAnimate = () => {
        clicked = !clicked;

        if( clicked === true ){
            expanded = false;
            compressed =  true;
            animate_navHandler();
        }else if( clicked === false ){
            expanded = true;
            compressed = false;
            animate_navHandler();
        }
    }   
    const animate_navHandler = () => {
        let duration:number = 1;
        let label:string = "nav";

        let tl = gsap.timeline({ defaults: {
            overwrite: "auto"
        }})

        if ( compressed === true ){
            nav_compressed(tl, duration, label);

            expanded = false;
        }else if ( expanded === true ){
            nav_expanded(tl, duration, label);
           
            compressed = true;
        }
    }
    const nav_compressed = (tl:gsap.core.Timeline, duration: number, label: string) => {
        tl.to(nav, { duration: duration, width: "15vw", autoAlpha: .5, ease:"power4.inOut" }, label)
        tl.to(nav_arrow_svg, { duration: duration, rotate: "180deg", x:-10, fill:"transparent",strokeDasharray: "110px", ease: "none" }, label)
        tl.to(nav_list, { x:-50, autoAlpha: 0, stagger: -.1 }, label)
    }
    const nav_expanded = (tl:gsap.core.Timeline, duration: number, label: string) => {
        tl.to(nav, { duration: duration, width: "70vw", ease:"power4.inOut", autoAlpha: 1}, label)
        tl.to(nav_arrow_svg, { duration: duration, rotate: "0", x:-5, fill:"#b64a47",strokeDasharray: "0px", ease: "none" }, label)
        tl.to(nav_list, { x:0, autoAlpha: 1, stagger: .1 }, label+"+=.5")
    }
    //#endregion
    
    // #region scroll animations using gsap scroll trigger
    const scrollTriggerArray = (main__targetArr:string, start:string, end:string, marker:boolean, toggle:string, pin:boolean, scrub:number | boolean, type:string)=> {
        gsap.utils.toArray(main__targetArr).forEach( (box, i) => {
            
            let tl = gsap.timeline({paused: true, defaults:{
                overwrite: "auto"
            }});

            interface scrollTriggerI{
                trigger: any,
                pin:boolean,
                toggleClass: string,
                start: string,
                end: string,
                scrub: number | boolean,
                markers: boolean,
                onEnter(): void,
                onLeave(): void,
                onEnterBack(): void,
                onLeaveBack(): void,
            }

            const scrollTriggerObj:scrollTriggerI = {
                trigger: box,
                pin: pin,
                toggleClass: toggle,
                start: start,
                end: end,
                scrub: scrub,
                markers: marker,
                onEnter: () => {
                    scroll_type = type;
                    onEnter(tl);
                }, 
                onLeave: () => {
                    scroll_type = type;
                    onLeave(tl);
                  
                },
                onEnterBack: () => {
                    scroll_type = type;
                    onEnterBack(tl);
                  
                }, 
                onLeaveBack: () => {
                    scroll_type = type;
                    onLeaveBack(tl);
                }
            }
          
            if(type === "nav-compress"){
                ScrollTrigger.create(scrollTriggerObj)

            }else if(type === "logo-animate"){
                animate_headerLogo(tl);
                ScrollTrigger.create(scrollTriggerObj)

            }else if(type === "about-pin-animate"){
                animate_pinnedAbout(main__targetArr, start, end , scrub, pin, marker);
            }else if(type === "works-animate"){
                animate_works(tl);
                ScrollTrigger.create(scrollTriggerObj);
            }else if(type === "navLink-animate"){
                navLinkScroll(tl, navList[i])
                ScrollTrigger.create(scrollTriggerObj);
            }else{ console.log("invalid type") }
        })
    }
  
    const onEnter = (tl:any) =>{
        if(scroll_type === "nav-compress"){
            clicked = true;
            compressed = true;
            expanded = false;
            animate_navHandler();
        }else if(scroll_type === "logo-animate"){
            tl.play();
        }else if(scroll_type === "works-animate"){
            tl.play();
        }else if(scroll_type === "navLink-animate"){
            tl.play();
        }
    }
    const onLeave = (tl:any) =>{
        if(scroll_type === "nav-compress"){}
        else if(scroll_type === "logo-animate"){
            tl.reverse();
        }else if(scroll_type === "works-animate"){
            tl.reverse();
        }else if(scroll_type === "navLink-animate"){
            tl.reverse();
        }
    }
    const onEnterBack = (tl:any) =>{
        if(scroll_type === "nav-compress"){
            clicked = false;
            expanded = true;
            compressed = false;
            animate_navHandler();
        }else if(scroll_type === "logo-animate"){
            tl.play();
        }else if(scroll_type === "works-animate"){
            tl.play();
        }else if(scroll_type === "navLink-animate"){
            tl.play();
        }
    }
    const onLeaveBack = (tl:any) =>{
        if(scroll_type === "nav-compress"){}
        else if(scroll_type === "logo-animate"){
            tl.reverse();
        }else if(scroll_type === "works-animate"){
            tl.reverse();
        }else if(scroll_type === "navLink-animate"){
            tl.reverse();
        }
    }
    const navbarSmoothScroll = (target:any) => {
        window.scroll()
        target.forEach((item:any, i:number) => {
            item.addEventListener("click", (e:any) => {
                e.preventDefault();

                let href = item.getAttribute("href");
                let query = document.querySelector(href);
                // let topY = query.offsetTop;

                gsap.to(window, {duration: 1, scrollTo:href, overwrite: "auto", ease:"Power3.easeOut"});
            })
        })
    }
    const navLinkScroll = (tl:gsap.core.Timeline, target:any) =>{
        tl.to(target, { color: "#FBEBEB"} );
    }
    //#endregion

    //#region Header Animation
    const animate_headerLogo = (tl:any) => {
        tl.from(hero_cha, {duration: 1, autoAlpha: 0});
        tl.from([hero_lineOne, hero_lineTwo], {duration: 1, transformOrigin: "center center", scaleY: "0", stagger: -.5, ease: "power4.inOut"})
        tl.from(hero_beauty, {duration: .5, xPercent:-20, autoAlpha: 0}, "appear");
        tl.from(header_info, {duration: .5, autoAlpha: 0}, "appear");
    }
    //#endregion
    //#region About Animation
    const animate_pinnedAbout = (target:string, start:string, end:string, scrub:number|boolean, pin:boolean, marker: boolean) => {

        let el_about = [about_title, about_name, about_say1, about_say2];
        let label = "appear", label_switch = ">";
        let clr_active = "#EC625F", clr_notActive = "#FBEBEB";

        gsap.set( about_img, { scale: 0 } );
        gsap.set( el_about, { autoAlpha: 0, xPercent: -10 } );
        gsap.set( about_info, { autoAlpha: 0 } );
        gsap.set( about_name, { color: "#FBEBEB"} );
   
        let about_tl = gsap.timeline({
            scrollTrigger:{
                trigger: target,
                start: start, 
                end: end,
                scrub: scrub,
                pin: pin,
                markers: marker
            }
        })
        about_tl
            .to(about_img, { duration: 3, scale: 1 }, label )
            .to(about_title, { autoAlpha: 1, xPercent: 0 }, label )
            .to(about_info, { autoAlpha: 1 }, label+">.5" )
            .add( animate_switchColor( about_name, clr_active, clr_notActive, label_switch) )
            .add( animate_switchColor( about_say1, clr_active, clr_notActive, label_switch) )
            .add( animate_switchColor( about_say2, clr_active, clr_notActive, label_switch) )
    }   
    const animate_switchColor = (target:any, activeColor:string, notActiveColor:string, label:string) => {
        let tl = gsap.timeline({});

        tl.to(target, { duration: 2, autoAlpha: 1, xPercent: 0,  color: activeColor, ease: "power4.inOut" }, label)
        tl.to(target, { color: notActiveColor, ease: "power4.inOut" }, label)

        return tl;
    }
    //#endregion
    //#region works Animation
    const animate_works = (tl:any) => { 

        let el_works = [works_title, works_hair, works_eyebrows, works_beautyCare, works_nailCare, works_waxing];
        let label = "works"
        
        gsap.set( el_works, { autoAlpha: 0, xPercent: -10  })
        gsap.set( works_img, { autoAlpha: 0 })

        tl.to(el_works, { duration: 1, autoAlpha: 1, xPercent: 0, stagger: .5 }, label );
        tl.to( works_img, { duration: 1, autoAlpha: 1 },label+"+=3"  )
    }
    //#endregion
    return(
        responsiveAnimation()
    );
}

export default animations;