import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center border-t pt-8">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-112.5  "
          src={assets.about_img}
          alt=""
        />

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            inventore laudantium harum corporis quidem, eum deleniti, temporibus
            repudiandae expedita pariatur voluptatibus! Dolorem quos
            exercitationem beatae. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum maiores repellendus ab asperiores libero
            cumque assumenda sunt dicta, deserunt, nemo doloribus, voluptatibus
            pariatur quibusdam impedit!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus odit, debitis assumenda explicabo dignissimos
            necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Exercitationem magni natus esse ipsum alias?
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            autem nisi ipsum harum dolore earum sequi, ad perspiciatis corrupti
            cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta, vitae.
          </p>
        </div>
      </div>

      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            tempora autem architecto distinctio eaque sequi!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            tempora autem architecto distinctio eaque sequi!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            tempora autem architecto distinctio eaque sequi!
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};
export default About;
