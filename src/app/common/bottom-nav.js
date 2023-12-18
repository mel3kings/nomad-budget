import Image from "next/image";

export const BottomNav = () => {
  return (
    <div className="bg-neutral-200 text-left secondary font-medium">
      <div className=" max-w-6xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-2/5 mb-4">
            <a href="/">
              <Image className="pr-1" src="/nomad_budget_no_bg_green.svg" alt="logo" height={55} width={55} />
            </a>
            <span className="text-xl tracking-tight font-bold">
              <a href="/">Nomad Budget</a>
              <br />
              <span className="text-sm text-gray-700">Track your Global Finances 🌍</span>
            </span>
            <ul>
              <li>
                <span className="text-main-text-color text-gray-400 font-normal ">
                  Copyright &copy; 2023 - All rights reserved
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-4">
            <h3 className="text-md mb-2 font-bold">Links</h3>
            <ul>
              <li>
                <a
                  href="https://linktr.ee/mel3kings"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Link Tree
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/Golden-Visa-Strategies-Entrepreneurship-Citizenship/dp/B0CJL294G5"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Digital Nomad Book
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@aeyandmel"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Youtube Channel
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@PrincipalDevlogs"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Melchor Tatlonghari
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/5 mb-4">
            <h3 className="text-main-text-color text-md mb-2 font-bold ">Contact</h3>
            <ul>
              <li>
                <a
                  href="https://mel3kings.canny.io/application-or-feature-request"
                  className="text-main-text-color hover:underline text-gray-400 font-normal e"
                >
                  Bugs or Issues
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/meltatlonghari"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="emailTo:meltatlonghari3+saas@gmail.com"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-4">
            <h3 className="text-main-text-color text-md mb-2 font-bold ">More</h3>
            <ul>
              <li>
                <a
                  href="https://make-time.net/"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Make Time
                </a>
              </li>
              <li>
                <a
                  href="https://budget.digital-nomad-social.com/"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Nomad Budget
                </a>
              </li>
              <li>
                <a
                  href="https://quic.make-time.net/"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Quic
                </a>
              </li>
              <li>
                <a
                  href="https://www.snippets.melchortatlonghari.com/"
                  className="text-main-text-color hover:underline text-gray-400 font-normal "
                >
                  Startup Snippets
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 text-center text-gray-500"></div>
      </div>
    </div>
  );
};
