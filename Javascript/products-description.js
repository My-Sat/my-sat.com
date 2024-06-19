  document.addEventListener("DOMContentLoaded", function() {
    const productItems = document.querySelectorAll(".carousel");

    productItems.forEach(item => {
      item.addEventListener("click", function() {
        // Remove the clicked-effect class from all items
        productItems.forEach(item => item.classList.remove("clicked-effect"));

        // Add the clicked-effect class to the clicked item
        this.classList.add("clicked-effect");
      });
    });
  });
