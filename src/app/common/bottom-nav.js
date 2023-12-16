export const BottomNav = () => {
  return (
    <div className="bg-neutral-200 text-left secondary">
      <div className=" max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-main-text-color text-lg font-semibold mb-2">About Us</h3>
            <ul>
              <li>
                <a href="https://linktr.ee/mel3kings" className="text-main-text-color hover:text-main-text-color">
                  All Links
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Golden-Visa-Strategies-Entrepreneurship-Citizenship/dp/B0CJL294G5"
                  className="text-main-text-color hover:text-main-text-color"
                >
                  Digital Nomad Book
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@aeyandmel"
                  className="text-main-text-color hover:text-main-text-color"
                >
                  Nomad Channel
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@PrincipalDevlogs"
                  className="text-main-text-color hover:text-main-text-color"
                >
                  Tech Channel
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-main-text-color text-lg font-semibold mb-2">Products</h3>
            <ul>
              <li>
                <a href="https://make-time.net/" className="text-main-text-color hover:text-main-text-color">
                  Make Time
                </a>
              </li>
              <li>
                <a
                  href="https://budget.digital-nomad-social.com/"
                  className="text-main-text-color hover:text-main-text-color"
                >
                  Nomad Budget
                </a>
              </li>
              <li>
                <a
                  href="https://meltatlonghari.gumroad.com/l/ayqmpf"
                  className="text-main-text-color hover:text-main-text-color"
                >
                  Your SaaS
                </a>
              </li>
              <li>
                <a
                  href="https://qoutes.melchortatlonghari.com/"
                  className="text-main-text-color hover:text-main-text-color"
                >
                  Qoutes
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-4">
            <h3 className="text-main-text-color text-lg font-semibold mb-2">Contact Us</h3>
            <ul>
              <li>
                <a
                  href="https://mel3kings.canny.io/application-or-feature-request"
                  className="text-main-text-color hover:underline"
                >
                  Report Bug or Issues
                </a>
              </li>
              <li>
                <a
                  href="emailTo:meltatlonghari3+saas@gmail.com"
                  className="text-main-text-color hover:text-main-text-color"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/meltatlonghari"
                  className="text-main-text-color hover:text-main-text-color"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-500">&copy; Melchor Tatlonghari. All rights reserved.</div>
      </div>
    </div>
  );
};
