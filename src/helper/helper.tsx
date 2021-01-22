
const helper = {
  querySelector: (targetClass:string) => {
        let target : HTMLInputElement | null = document.querySelector(targetClass);

        return target;
  },
  querySelectorAll: (targetClass:string) => {
    let target : NodeListOf<Element> | null = document.querySelectorAll(targetClass);

    return target;
  },
  getElementById: (targetClass:string) => {
    let target : HTMLElement | null = document.getElementById(targetClass);

    return target;
  },
  getElementByIdImage: (targetClass:string) => {
    let target = document.getElementById(targetClass) as HTMLImageElement;

    return target;
  },

}


// const helper = (type:string, targetClass:string) =>{
//     if(type === "querySelector"){
//         let target : HTMLInputElement | null = document.querySelector(targetClass);

//         return target;
//     }
// }

export default helper;