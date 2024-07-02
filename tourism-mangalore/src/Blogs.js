// ContactForm.js
import React from "react";
import styled from "styled-components";

const BlogContainer = styled.div`
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  margin-top: 50px;
`;
const Image = styled.img`
  border-radius: 8px;
  padding: 8px;
  width: 500px;
  height: 400px;
`;

const Blogs = () => {
  return (
    <BlogContainer>
      <hr></hr>
      <h5>Get inspired by these travel bloggers posts</h5>
      <h2>
        <b>Latest Stories</b>
      </h2>
      <div>
        <Image
          src="https://www.holidify.com/images/cmsuploads/compressed/Someshwara-Beach_20200605162022.jpg"
          alt="image"
        />
        <h4>
          <b>Most peaceful experience in life</b>
        </h4>
        <p>Posted on April 17th,2023</p>
        <hr></hr>
        <p>
          Very nice and clean beach. We went to Tippu Sultan's Sultan battery
          watch tower on the banks of Gurupur river. Took a boat to cross the
          river and walked down for five minutes to the beach.
        </p>
        <a href="#">Read More</a>
        <hr></hr>
      </div>
      <div>
        <Image
          src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/18172519/Mangalore2.png"
          alt="image"
        />
        <h4>
          <b>Capturing moments of spiritual enlightment</b>
        </h4>
        <p>Posted on April 17th,2023</p>
        <hr></hr>
        <p>
          This is a beautiful temple with great architecture. Looks amazing and
          is very sophisticated. The main pooja happens during the day at 12 and
          evenings at 7. They do serve anna dhanam, please enquire with the
          temple officials... It is pretty hot during the day and the tiles
          getting heated quickly however being a temple we can't wear any
          footwear so best to avoid afternoons if your visiting with sick
          individuals, have infants or have older people visiting the place
          along with you!
        </p>
        <a href="#">Read More</a>
        <hr></hr>
      </div>
      <div>
        <h2>Things To Do</h2>
        <h2>Tourism Activities</h2>

        <Image
          src="https://www.mangalatravels.com/wp-content/uploads/2021/08/tour-packages-2.jpeg"
          alt="image"
        />
        <Image
          src="https://blog.redbus.in/wp-content/uploads/2023/03/Copy-of-redBus.com-cover-17-850x479.jpg"
          alt="image"
        />
        <p>The city has the benefit of numerous golden-sand beaches:</p>
        <p>
          <b>Panambur beach:</b> It is credited as one of the clean and neatly
          maintained beaches in India and attracts most number of
          tourists.Panambur beach has Jet ski rides, Boating, Dolphin viewing,
          Food stalls, besides Trained Beach Lifeguards and Patrol vehicles to
          ensure the safety of the visitors.
        </p>
        <p>
          <b>Thannirbhavi beach:</b> This is second most crowded beach after
          Panambur Beach. Tannirbhavi beach has some basic facilities like life
          guards, proper toilets, a parking lot, a couple of small eateries and
          some concrete benches. One can take a Ferry ride across Gurupur river
          from Sultan Battery.
        </p>
        <p>
          <b> NITK beach: </b>This beach is situated in Surathkal. A Lighthouse
          is located close to the beach.
        </p>
        <p>
          <b>Someshwara beach:</b> The beach, located in Ullal, has large rocks
          called Rudra Shile or Rudra Paadhe. Rudra is Lord Shiva and Shile or
          Paadhe means rock in Tulu language.
        </p>
        <p>
          <b>Mukka beach: </b>Situated 20 km from the heart of the Mangalore,
          one can experience variety of shells on this beach. Mukka beach is
          covered with the golden sands and tall pine trees with an old light
          house situated on this beach.
        </p>
        <p>
          <b>Ullal beach:</b> a beach in Ullal town 12 km south of the city of
          Mangalore, Karnataka, India. The beach with a stretch of Coconut trees
          and the fishermen's lane make it picturesque, creating a lovely
          coastal experience. The ruined fort of Abbakka Devi and Jain temples
          of the 16th century are other attractions for tourists. The Dargah of
          Sayed Mohammed Shereful Madani, who is said to have come to Ullal from
          Madina 400 years ago, is a famous dargah in this region.
        </p>
        <p>
          <b>Sasihithlu Beach:</b> This beach has hosted the Indian Open of
          Surfing tournament in 2016 and 2017.
        </p>
      </div>
    </BlogContainer>
  );
};
export default Blogs;
