function NewsLetterReviews() {
  return (
    <div>
      <section className="newsletter">
        <form>
          <h3>Subscribe</h3>
          <input type="email" name="" placeholder="enter your email" id="" className="box"/>
            <input type="button" value="subscribe" className="box2"/>
        </form>
      </section>
      <section class="review" id="review">
        <div class="heading">
          <h2>client review</h2>
        </div>
        <div class=" swiper review-row">
          <div class="swiper-wrapper">
            <div class="swiper-slide box">
              <div class="client-review">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, perferendis architecto quasi eveniet aliquam sed?
                </p>
              </div>
              <div class="client-info">
                <div class="img">
                  <img src="images/client1.jpg" alt="" />
                </div>
                <div class="clientDetailed">
                  <h3>Hardy Devid</h3>
                  <p>UI / UX designer</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide box">
              <div class="client-review">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, perferendis architecto quasi eveniet aliquam sed?
                </p>
              </div>
              <div class="client-info">
                <div class="img">
                  <img src="images/client1.jpg" alt="" />
                </div>
                <div class="clientDetailed">
                  <h3>Hardy Devid</h3>
                  <p>UI / UX designer</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide box">
              <div class="client-review">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, perferendis architecto quasi eveniet aliquam sed?
                </p>
              </div>
              <div class="client-info">
                <div class="img">
                  <img src="images/client1.jpg" alt="" />
                </div>
                <div class="clientDetailed">
                  <h3>Hardy Devid</h3>
                  <p>UI / UX designer</p>
                </div>
              </div>
            </div>
            <div class="swiper-slide box">
              <div class="client-review">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, perferendis architecto quasi eveniet aliquam sed?
                </p>
              </div>
              <div class="client-info">
                <div class="img">
                  <img src="images/client1.jpg" alt="" />
                </div>
                <div class="clientDetailed">
                  <h3>Hardy Devid</h3>
                  <p>UI / UX designer</p>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>
</div>
  );
}

export default NewsLetterReviews;
