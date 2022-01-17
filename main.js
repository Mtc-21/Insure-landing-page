  const elems = document.querySelectorAll(".transition");
    const cards = document.querySelectorAll(".card");
    const body = document.querySelector("body");
    const menu = document.querySelector(".menu");
    const optionsMenu = document.querySelectorAll(".main-menu li")

    // menu
    menu.addEventListener("click", () => {
      if (document.querySelector(".active") !== null)
        document.querySelector(".active").classList.remove("active");
      body.classList.toggle("fixed");
    });

    // menu link activate
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.main-menu a[href="#${id}"]`);
        if (entry.isIntersecting) {
          if (document.querySelector(".active") !== null)
            document.querySelector(".active").classList.remove("active");
          menuLink.parentElement.classList.add("active");
        }
      });
    }, {
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.3,
    });
    //elements menu
    optionsMenu.forEach(option => {

      option.addEventListener("click", () => {
        if (document.querySelector(".active") !== null)
          document.querySelector(".active").classList.remove("active");
        menu.checked = false;
        body.classList.remove("fixed");
        option.classList.add("active");
      });

      let id = option.children[0].getAttribute("href");
      const element = document.querySelector(id);

      if (element) {
        observer.observe(element)
      }
    });

    // scroll animation
    const obser = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("visible", entry.isIntersecting);
        if (entry.isIntersecting) {
          obser.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: "0px 30px 0px 30px",
      threshold: 0.5,
    }
    );
    [elems, cards].forEach(element => {
       element.forEach(elem => {
        elem.classList.remove("visible")
        obser.observe(elem)
     });
    });
   