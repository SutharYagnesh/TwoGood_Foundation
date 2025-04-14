var status = "";
function handleEmailLabel() {
  const input = document.querySelector(".emailInput input");
  const label = document.querySelector(".emailInput .label");

  function toggleLabel() {
    if (input.value.trim() === "") {
      label.style.display = "block"; // Show label if input is empty
    } else {
      label.style.display = "none"; // Keep label hidden if input has value
    }
  }

  input.addEventListener("focus", function () {
    label.style.display = "none"; // Hide label on focus
  });

  input.addEventListener("blur", toggleLabel);
}
handleEmailLabel();

function CartOpenAnimation() {
  document.body.style.overflowY = "hidden";

  document.querySelectorAll(".nav-part1 svg").forEach((svg) => {
    svg.style.color = "#f7f7f7";
  });
  document.querySelectorAll(".nav-part2 .links a").forEach((link) => {
    link.style.color = "#f7f7f7";
  });
  document.querySelectorAll(".nav-part2 .icons i").forEach((icon) => {
    icon.style.color = "#f7f7f7";
  });

  var cart = document.querySelector(".cart");
  var specialIcon = document.querySelector(".specialIcon-1");
  var first = document.querySelector(".cart .first");
  var marque1 = document.querySelector(".marque1");
  var marque2 = document.querySelector(".marque2");

  // Reset opacity before opening
  first.style.opacity = "1";
  marque1.style.opacity = "1";
  marque2.style.opacity = "1";

  var tl1 = gsap.timeline();

  tl1
    .to(cart, {
      top: "0%",
      duration: 0.8,
      ease: Expo.easeInOut,
    })
    .to(specialIcon, {
      transform: "translateY(-120%)",
      delay: -0.2,
      duration: 0.4,
      ease: Power3,
    })
    .from(
      first,
      {
        y: -10,
        opacity: 0,
        duration: 0.3,
        ease: Power1,
      },
      "a"
    )
    .from(
      marque1,
      {
        opacity: 0,
        duration: 0.5,
        ease: Power1,
      },
      "a"
    )
    .from(
      marque2,
      {
        opacity: 0,
        duration: 0.3,
        ease: Power1,
      },
      "a"
    );

  const iconsDiv = document.querySelector(".nav-part2 .icons");
  iconsDiv.style.transition =
    "background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  iconsDiv.style.backgroundColor = "#000";
}

function CartCloseAnimation() {
  var cart = document.querySelector(".cart");
  var specialIcon = document.querySelector(".specialIcon-1");
  var first = document.querySelector(".cart .first");
  var marque1 = document.querySelector(".marque1");
  var marque2 = document.querySelector(".marque2");
  var tl2 = gsap.timeline();

  tl2
    .to(specialIcon, {
      transform: "translateY(0%)",
      duration: 0.6,
      ease: Expo.easeInOut,
    })
    .to(
      first,
      {
        opacity: 0,
      },
      "a"
    )
    .to(
      marque1,
      {
        opacity: 0,
      },
      "a"
    )
    .to(
      marque2,
      {
        opacity: 0,
      },
      "a"
    )
    .to(cart, {
      top: "-100%",
      duration: 2.5,
      ease: Power3,
    });

  document.querySelectorAll(".nav-part1 svg").forEach((svg) => {
    svg.style.color = "#000";
  });
  document.querySelectorAll(".nav-part2 .links a").forEach((link) => {
    link.style.color = "#000";
  });
  document.querySelectorAll(".nav-part2 .icons i").forEach((icon) => {
    icon.style.color = "#000";
  });

  const iconsDiv = document.querySelector(".nav-part2 .icons");
  iconsDiv.style.transition =
    "background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  iconsDiv.style.backgroundColor = "#f7f7f7";
}

function navbarAnimation() {
  window.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      gsap.to(".nav-part1 svg", {
        y: "-150%",
      });

      gsap.to(".nav-part2 .links", {
        y: "-150%",
      });
    }
    if (e.deltaY < 0) {
      gsap.to(".nav-part1 svg", {
        y: "0%",
      });

      gsap.to(".nav-part2 .links", {
        y: "0%",
      });
    }
  });
}

navbarAnimation();

function loadinganimation() {
  gsap.from(".mpage-1 h1", {
    y: 220,
    delay: 0.2,
    duration: 0.6,
    stagger: 0.2,
  });
  gsap.from(".mpage-1 .video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1,
    duration: 0.3,
  });
}
loadinganimation();

function cursorAnimation() {
  try {
    var cursor = document.querySelector("#cursor");
    if (!cursor) return;

    document.addEventListener("mousemove", function (dets) {
      gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.5,
      });
    });
  } catch (error) {
    console.warn("circleMouseFollower: Cursor element not found");
  }
}
cursorAnimation();

function DonateOpenAnimation() {
  status = "Donate";
  document.querySelectorAll(".nav-part1 svg").forEach((svg) => {
    svg.style.color = "#f7f7f7";
  });
  document.querySelectorAll(".nav-part2 .links a").forEach((link) => {
    link.style.color = "#f7f7f7";
  });
  document.querySelectorAll(".nav-part2 .icons i").forEach((icon) => {
    icon.style.color = "#f7f7f7";
  });
  var Donate = document.querySelector(".donate");
  var specialIcon = document.querySelector(".specialIcon-2");

  var tl1 = gsap.timeline();

  tl1
    .to(Donate, {
      top: "0%",
      duration: 0.8,
      ease: Expo.easeInOut,
    })
    .to(specialIcon, {
      transform: "translateY(-120%)",
      delay: -0.2,
      duration: 0.4,
      ease: Power3,
    });

  const iconsDiv = document.querySelector(".nav-part2 .icons");
  iconsDiv.style.transition =
    "background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  iconsDiv.style.backgroundColor = "#000";
}
function DonatecloseAnimation() {
  status = "";
  document.querySelectorAll(".nav-part1 svg").forEach((svg) => {
    svg.style.color = "#000";
  });
  document.querySelectorAll(".nav-part2 .links a").forEach((link) => {
    link.style.color = "#000";
  });
  document.querySelectorAll(".nav-part2 .icons i").forEach((icon) => {
    icon.style.color = "#000";
  });
  var Donate = document.querySelector(".donate");
  var specialIcon = document.querySelector(".specialIcon-2");

  var tl1 = gsap.timeline();

  tl1
    .to(Donate, {
      top: "-100%",
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .to(specialIcon, {
      transform: "translateY(0%)",
      duration: 0.6,
      ease: Expo.easeInOut,
    });

  const iconsDiv = document.querySelector(".nav-part2 .icons");
  iconsDiv.style.transition =
    "background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  iconsDiv.style.backgroundColor = "#f7f7f7";
}
function MenuBarOpenAnimation() {
  status = "Menu";
  document.querySelectorAll(".nav-part1 svg").forEach((svg) => {
    svg.style.color = "#f7f7f7";
  });
  document.querySelectorAll(".nav-part2 .links a").forEach((link) => {
    link.style.color = "#f7f7f7";
  });
  document.querySelectorAll(".nav-part2 .icons i").forEach((icon) => {
    icon.style.color = "#f7f7f7";
  });
  var MenuBar = document.querySelector(".MenuBar");
  var specialIcon = document.querySelector(".specialIcon-2");

  var tl1 = gsap.timeline();

  tl1
    .to(MenuBar, {
      top: "0%",
      duration: 0.8,
      ease: Expo.easeInOut,
    })
    .to(specialIcon, {
      transform: "translateY(-120%)",
      delay: -0.2,
      duration: 0.4,
      ease: Power3,
    });

  const iconsDiv = document.querySelector(".nav-part2 .icons");
  iconsDiv.style.transition =
    "background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  iconsDiv.style.backgroundColor = "#000";
}
function MenuBarCloseAnimation() {
  status = "";
  document.querySelectorAll(".nav-part1 svg").forEach((svg) => {
    svg.style.color = "#000";
  });
  document.querySelectorAll(".nav-part2 .links a").forEach((link) => {
    link.style.color = "#000";
  });
  document.querySelectorAll(".nav-part2 .icons i").forEach((icon) => {
    icon.style.color = "#000";
  });
  var MenuBar = document.querySelector(".MenuBar");
  var specialIcon = document.querySelector(".specialIcon-2");

  var tl1 = gsap.timeline();

  tl1
    .to(MenuBar, {
      top: "-100%",
      duration: 1.5,
      ease: Expo.easeInOut,
    })
    .to(specialIcon, {
      transform: "translateY(0%)",
      duration: 0.6,
      ease: Expo.easeInOut,
    });

  const iconsDiv = document.querySelector(".nav-part2 .icons");
  iconsDiv.style.transition =
    "background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
  iconsDiv.style.backgroundColor = "#f7f7f7";
}
function CloseManager() {
  if (status == "Donate") {
    DonatecloseAnimation();
  }
  if (status == "Menu") {
    MenuBarCloseAnimation();
  }
}
