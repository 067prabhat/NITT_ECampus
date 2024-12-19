import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About NIT Trichy eCampus</h1>
      <p>
        The National Institute of Technology Tiruchirappalli, NIT Tiruchirappalli or NIT Trichy is a national research deemed university near the city of Tiruchirappalli in Tamil Nadu, India. It was founded as Regional Engineering College Tiruchirappalli in 1964 by the governments of India and Tamil Nadu under the affiliation of the University of Madras. The college was granted deemed university status in 2003 with the approval of the University Grants Commission (UGC), the All India Council for Technical Education (AICTE), and the Government of India and renamed the National Institute of Technology Tiruchirappalli.

        NIT Trichy is recognized as an Institute of National Importance by the Government of India under the National Institutes of Technology, Science Education and Research (NITSER) Act, 2007 and is one of the members of the National Institutes of Technology (NITs) system, a group of centrally funded technical institutes governed by the Council of NITSER. The institute is funded by the Ministry of Education (MoE), Government of India; and focuses exclusively on engineering, management, science, technology, and architecture. The institute offers 10 bachelor's, 42 master's, and 17 doctoral programmes through its 17 academic departments and awards more than 2000 degrees annually.
      </p>

      <div className="image-container">
        <img src="public/images/1578909622phpo6Horh.jpeg" alt="NIT Trichy Campus" className="about-image" />
      </div>

      <p>
        The National Institutional Ranking Framework (NIRF) ranked NIT Trichy first among the NITs for nine consecutive years (2016 to 2024). NIRF also ranked the institute 8 for architecture, 9 for engineering, 51 for management, 31 for research, and 31 overall among the academic institutions in India in 2024. NIT Trichy was titled the "Best Industry-Linked NIT in India" by the Confederation of Indian Industry in 2015, and "University of the Year" by the Federation of Indian Chambers of Commerce and Industry in 2017.
      </p>
    </div>
  );
};

export default About;
