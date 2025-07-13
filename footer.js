const footerHtml = `
    <footer class="section-footer">
    <div class="footer-container container">
      <div class="content_1">
        <img src="public/images/logo_images.jpeg" alt="logo">
        <p>Welcome to Online Ecom Store , your ultimate destination for Cutting-Edge gadgets!</p>
        <img src="public/images/cards.png" alt="cards" class="card">
      </div>
      <div class="content_2">
        <h4>Shopping</h4>
        <a href="#">Computer Store</a>
        <a href="#">Laptop Store</a>
        <a href="#">Accessories</a>
        <a href="#">sales and discount</a>
      </div>

      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">contact us</a>
        <a href="" target="_blank">payment method</a>
        <a href="" target="_blank">delivery</a>
        <a href="" target="_blank">return and exchange</a>
      </div>
      <div class="content_4">
        <h4>newsletter</h4>
        <p>be the first to know about new<br/> arrivals , sales & promos!</p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email">
          <i class="bx bx-envelope"></i>
        </div>
        <hr/>
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Design and code by online store</p>
      </div>
    </div>
  </footer>`;

  const footerElem = document.querySelector(".section-footer");
  footerElem.insertAdjacentHTML("afterbegin" , footerHtml);


