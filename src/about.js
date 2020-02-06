const about = () => {
  const content = document.querySelector('main');
  content.innerHTML =`<section id="_about" class="about-content">
    <div class="row">
    <h1>About Us</h1>
    <p>
    A restaurant is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal. Some restaurants are a chain, meaning that there are restaurants which have the same name and serve the same food.
    </p>
    <p>
    There are also chain restaurants that serve slightly more expensive food. They are called fast casual restaurants. Applebee's and Perkins are examples of this type of chain restaurant.
    </p>
    </div>
    </section>`;
};

 export { about };