document.addEventListener("DOMContentLoaded", () => {
  // Go to My Work
  const goToWorkBtn = document.getElementById("goToWork");
  if (goToWorkBtn) {
    goToWorkBtn.addEventListener("click", () => {
      window.location.href = "/my-work";
    });
  }

  // Go to Home
  const goToHomeBtn = document.getElementById("goToHome");
  if (goToHomeBtn) {
    goToHomeBtn.addEventListener("click", () => {
      window.location.href = "/";
    });
  }

  // Go to Up and Coming
  const goToUpcomingBtn = document.getElementById("goToUpcoming");
  if (goToUpcomingBtn) {
    goToUpcomingBtn.addEventListener("click", () => {
      window.location.href = "/up-and-coming";
    });
  }
});
