import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menyuni ochish/yopish funksiyasi
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Skroll qilish hodisasini kuzatish
  useEffect(() => {
    const fixed = document.getElementsByClassName("navbar")[0];
    const handleScroll = () => {
      if (window.scrollY > 0) {
        fixed.classList.add("fixed__active");
      } else {
        fixed.classList.remove("fixed__active");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Komponent unmount bo'lganida event listenerni tozalash
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isOpen ? "menu-open" : ""}`}>
      <div className="navbar__wrapper">
        <NavLink to={"/"}>
          <svg
            width="255"
            height="48"
            viewBox="0 0 255 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="navbar__logo"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM43.0654 24C43.0654 35.5524 33.5253 44.9174 21.757 44.9174C9.98869 44.9174 0.448592 35.5524 0.448592 24C0.448592 12.4476 9.98869 3.08257 21.757 3.08257C33.5253 3.08257 43.0654 12.4476 43.0654 24ZM37.4579 15.4128L36.1121 12.9908H20.8598L21.9813 10.5688H17.0467L15.4766 12.9908C5.38316 15.1927 5.83176 25.9817 6.05606 26.422C7.85045 32.5872 13.0093 30.1651 14.5794 27.0826L19.7383 15.4128H24C23.7009 16.0734 22.2056 19.6844 18.6168 28.844C15.028 38.0037 7.99998 35.5963 4.93456 33.2477C12.471 44.345 21.0841 39.1927 23.5514 34.789L30.9533 15.4128H37.4579ZM8.07482 22.8991C8.90808 16.9012 13.0842 14.9725 15.0281 14.7523L11.6636 22.6789C10.3177 25.9817 7.85046 27.9633 8.07482 22.8991Z"
              fill="#1877F2"
            />
            <path d="M58 0V48" stroke="#1877F2" />
            <path
              d="M81.608 4.152V7.44H77.144V21H73.04V7.44H68.576V4.152H81.608ZM93.6757 18.024H87.3877L86.3797 21H82.0837L88.1797 4.152H92.9317L99.0277 21H94.6837L93.6757 18.024ZM92.6197 14.856L90.5317 8.688L88.4677 14.856H92.6197ZM106.499 21.168C105.267 21.168 104.163 20.968 103.187 20.568C102.211 20.168 101.427 19.576 100.835 18.792C100.259 18.008 99.955 17.064 99.923 15.96H104.291C104.355 16.584 104.571 17.064 104.939 17.4C105.307 17.72 105.787 17.88 106.379 17.88C106.987 17.88 107.467 17.744 107.819 17.472C108.171 17.184 108.347 16.792 108.347 16.296C108.347 15.88 108.203 15.536 107.915 15.264C107.643 14.992 107.299 14.768 106.883 14.592C106.483 14.416 105.907 14.216 105.155 13.992C104.067 13.656 103.179 13.32 102.491 12.984C101.803 12.648 101.211 12.152 100.715 11.496C100.219 10.84 99.971 9.984 99.971 8.928C99.971 7.36 100.539 6.136 101.675 5.256C102.811 4.36 104.291 3.912 106.115 3.912C107.971 3.912 109.467 4.36 110.603 5.256C111.739 6.136 112.347 7.368 112.427 8.952H107.987C107.955 8.408 107.755 7.984 107.387 7.68C107.019 7.36 106.547 7.2 105.971 7.2C105.475 7.2 105.075 7.336 104.771 7.608C104.467 7.864 104.315 8.24 104.315 8.736C104.315 9.28 104.571 9.704 105.083 10.008C105.595 10.312 106.395 10.64 107.483 10.992C108.571 11.36 109.451 11.712 110.123 12.048C110.811 12.384 111.403 12.872 111.899 13.512C112.395 14.152 112.643 14.976 112.643 15.984C112.643 16.944 112.395 17.816 111.899 18.6C111.419 19.384 110.715 20.008 109.787 20.472C108.859 20.936 107.763 21.168 106.499 21.168ZM130.505 4.152L124.529 21H119.393L113.417 4.152H117.785L121.961 16.872L126.161 4.152H130.505ZM135.844 4.152V21H131.74V4.152H135.844ZM146.93 21L143.426 14.64H142.442V21H138.338V4.152H145.226C146.554 4.152 147.682 4.384 148.61 4.848C149.554 5.312 150.258 5.952 150.722 6.768C151.186 7.568 151.418 8.464 151.418 9.456C151.418 10.576 151.098 11.576 150.458 12.456C149.834 13.336 148.906 13.96 147.674 14.328L151.562 21H146.93ZM142.442 11.736H144.986C145.738 11.736 146.298 11.552 146.666 11.184C147.05 10.816 147.242 10.296 147.242 9.624C147.242 8.984 147.05 8.48 146.666 8.112C146.298 7.744 145.738 7.56 144.986 7.56H142.442V11.736ZM157.618 4.152V21H153.514V4.152H157.618ZM174.56 4.152L168.728 15.432V21H164.624V15.432L158.792 4.152H163.448L166.712 11.208L169.952 4.152H174.56ZM188.308 21.168C186.724 21.168 185.268 20.8 183.94 20.064C182.628 19.328 181.58 18.304 180.796 16.992C180.028 15.664 179.644 14.176 179.644 12.528C179.644 10.88 180.028 9.4 180.796 8.088C181.58 6.776 182.628 5.752 183.94 5.016C185.268 4.28 186.724 3.912 188.308 3.912C189.892 3.912 191.34 4.28 192.652 5.016C193.98 5.752 195.02 6.776 195.772 8.088C196.54 9.4 196.924 10.88 196.924 12.528C196.924 14.176 196.54 15.664 195.772 16.992C195.004 18.304 193.964 19.328 192.652 20.064C191.34 20.8 189.892 21.168 188.308 21.168ZM188.308 17.424C189.652 17.424 190.724 16.976 191.524 16.08C192.34 15.184 192.748 14 192.748 12.528C192.748 11.04 192.34 9.856 191.524 8.976C190.724 8.08 189.652 7.632 188.308 7.632C186.948 7.632 185.86 8.072 185.044 8.952C184.244 9.832 183.844 11.024 183.844 12.528C183.844 14.016 184.244 15.208 185.044 16.104C185.86 16.984 186.948 17.424 188.308 17.424ZM213.175 4.152L207.343 15.432V21H203.239V15.432L197.407 4.152H202.063L205.327 11.208L208.567 4.152H213.175ZM218.453 4.152V21H214.349V4.152H218.453ZM236.019 21H231.915L225.051 10.608V21H220.947V4.152H225.051L231.915 14.592V4.152H236.019V21ZM249.002 18.024H242.714L241.706 21H237.41L243.506 4.152H248.258L254.354 21H250.01L249.002 18.024ZM247.946 14.856L245.858 8.688L243.794 14.856H247.946Z"
              fill="#1877F2"
            />
            <path
              d="M71.262 34.172V44H68.868V34.172H71.262ZM78.8769 34.172V40.864C78.8769 41.9 78.5829 42.698 77.9949 43.258C77.4162 43.818 76.6322 44.098 75.6429 44.098C74.6069 44.098 73.7762 43.804 73.1509 43.216C72.5256 42.628 72.2129 41.7927 72.2129 40.71H74.5929C74.5929 41.1207 74.6769 41.4333 74.8449 41.648C75.0129 41.8533 75.2556 41.956 75.5729 41.956C75.8622 41.956 76.0862 41.8627 76.2449 41.676C76.4036 41.4893 76.4829 41.2187 76.4829 40.864V34.172H78.8769ZM85.1787 44.098C84.2547 44.098 83.4053 43.8833 82.6307 43.454C81.8653 43.0247 81.254 42.4273 80.7967 41.662C80.3487 40.8873 80.1247 40.0193 80.1247 39.058C80.1247 38.0967 80.3487 37.2333 80.7967 36.468C81.254 35.7027 81.8653 35.1053 82.6307 34.676C83.4053 34.2467 84.2547 34.032 85.1787 34.032C86.1027 34.032 86.9473 34.2467 87.7127 34.676C88.4873 35.1053 89.094 35.7027 89.5327 36.468C89.9807 37.2333 90.2047 38.0967 90.2047 39.058C90.2047 40.0193 89.9807 40.8873 89.5327 41.662C89.0847 42.4273 88.478 43.0247 87.7127 43.454C86.9473 43.8833 86.1027 44.098 85.1787 44.098ZM85.1787 41.914C85.9627 41.914 86.588 41.6527 87.0547 41.13C87.5307 40.6073 87.7687 39.9167 87.7687 39.058C87.7687 38.19 87.5307 37.4993 87.0547 36.986C86.588 36.4633 85.9627 36.202 85.1787 36.202C84.3853 36.202 83.7507 36.4587 83.2747 36.972C82.808 37.4853 82.5747 38.1807 82.5747 39.058C82.5747 39.926 82.808 40.6213 83.2747 41.144C83.7507 41.6573 84.3853 41.914 85.1787 41.914ZM94.9385 34.172C95.9745 34.172 96.8798 34.3773 97.6545 34.788C98.4292 35.1987 99.0265 35.7773 99.4465 36.524C99.8758 37.2613 100.091 38.1153 100.091 39.086C100.091 40.0473 99.8758 40.9013 99.4465 41.648C99.0265 42.3947 98.4245 42.9733 97.6405 43.384C96.8658 43.7947 95.9652 44 94.9385 44H91.2565V34.172H94.9385ZM94.7845 41.928C95.6898 41.928 96.3945 41.6807 96.8985 41.186C97.4025 40.6913 97.6545 39.9913 97.6545 39.086C97.6545 38.1807 97.4025 37.476 96.8985 36.972C96.3945 36.468 95.6898 36.216 94.7845 36.216H93.6505V41.928H94.7845ZM103.542 34.172V44H101.148V34.172H103.542ZM113.425 34.172L110.023 40.752V44H107.629V40.752L104.227 34.172H106.943L108.847 38.288L110.737 34.172H113.425ZM119.149 34.172V40.052C119.149 40.64 119.293 41.0927 119.583 41.41C119.872 41.7273 120.297 41.886 120.857 41.886C121.417 41.886 121.846 41.7273 122.145 41.41C122.443 41.0927 122.593 40.64 122.593 40.052V34.172H124.987V40.038C124.987 40.9153 124.8 41.6573 124.427 42.264C124.053 42.8707 123.549 43.328 122.915 43.636C122.289 43.944 121.589 44.098 120.815 44.098C120.04 44.098 119.345 43.9487 118.729 43.65C118.122 43.342 117.641 42.8847 117.287 42.278C116.932 41.662 116.755 40.9153 116.755 40.038V34.172H119.149ZM134.816 34.172L131.414 40.752V44H129.02V40.752L125.618 34.172H128.334L130.238 38.288L132.128 34.172H134.816ZM137.894 34.172V44H135.5V34.172H137.894ZM142.905 44.098C142.187 44.098 141.543 43.9813 140.973 43.748C140.404 43.5147 139.947 43.1693 139.601 42.712C139.265 42.2547 139.088 41.704 139.069 41.06H141.617C141.655 41.424 141.781 41.704 141.995 41.9C142.21 42.0867 142.49 42.18 142.835 42.18C143.19 42.18 143.47 42.1007 143.675 41.942C143.881 41.774 143.983 41.5453 143.983 41.256C143.983 41.0133 143.899 40.8127 143.731 40.654C143.573 40.4953 143.372 40.3647 143.129 40.262C142.896 40.1593 142.56 40.0427 142.121 39.912C141.487 39.716 140.969 39.52 140.567 39.324C140.166 39.128 139.821 38.8387 139.531 38.456C139.242 38.0733 139.097 37.574 139.097 36.958C139.097 36.0433 139.429 35.3293 140.091 34.816C140.754 34.2933 141.617 34.032 142.681 34.032C143.764 34.032 144.637 34.2933 145.299 34.816C145.962 35.3293 146.317 36.048 146.363 36.972H143.773C143.755 36.6547 143.638 36.4073 143.423 36.23C143.209 36.0433 142.933 35.95 142.597 35.95C142.308 35.95 142.075 36.0293 141.897 36.188C141.72 36.3373 141.631 36.5567 141.631 36.846C141.631 37.1633 141.781 37.4107 142.079 37.588C142.378 37.7653 142.845 37.9567 143.479 38.162C144.114 38.3767 144.627 38.582 145.019 38.778C145.421 38.974 145.766 39.2587 146.055 39.632C146.345 40.0053 146.489 40.486 146.489 41.074C146.489 41.634 146.345 42.1427 146.055 42.6C145.775 43.0573 145.365 43.4213 144.823 43.692C144.282 43.9627 143.643 44.098 142.905 44.098ZM156.195 34.172V44H153.801V39.954H150.077V44H147.683V34.172H150.077V38.022H153.801V34.172H156.195ZM168.773 34.172V44H166.379V38.106L164.181 44H162.249L160.037 38.092V44H157.643V34.172H160.471L163.229 40.976L165.959 34.172H168.773ZM176.332 42.264H172.664L172.076 44H169.57L173.126 34.172H175.898L179.454 44H176.92L176.332 42.264ZM175.716 40.416L174.498 36.818L173.294 40.416H175.716ZM183.813 44.098C183.094 44.098 182.45 43.9813 181.881 43.748C181.311 43.5147 180.854 43.1693 180.509 42.712C180.173 42.2547 179.995 41.704 179.977 41.06H182.525C182.562 41.424 182.688 41.704 182.903 41.9C183.117 42.0867 183.397 42.18 183.743 42.18C184.097 42.18 184.377 42.1007 184.583 41.942C184.788 41.774 184.891 41.5453 184.891 41.256C184.891 41.0133 184.807 40.8127 184.639 40.654C184.48 40.4953 184.279 40.3647 184.037 40.262C183.803 40.1593 183.467 40.0427 183.029 39.912C182.394 39.716 181.876 39.52 181.475 39.324C181.073 39.128 180.728 38.8387 180.439 38.456C180.149 38.0733 180.005 37.574 180.005 36.958C180.005 36.0433 180.336 35.3293 180.999 34.816C181.661 34.2933 182.525 34.032 183.589 34.032C184.671 34.032 185.544 34.2933 186.207 34.816C186.869 35.3293 187.224 36.048 187.271 36.972H184.681C184.662 36.6547 184.545 36.4073 184.331 36.23C184.116 36.0433 183.841 35.95 183.505 35.95C183.215 35.95 182.982 36.0293 182.805 36.188C182.627 36.3373 182.539 36.5567 182.539 36.846C182.539 37.1633 182.688 37.4107 182.987 37.588C183.285 37.7653 183.752 37.9567 184.387 38.162C185.021 38.3767 185.535 38.582 185.927 38.778C186.328 38.974 186.673 39.2587 186.963 39.632C187.252 40.0053 187.397 40.486 187.397 41.074C187.397 41.634 187.252 42.1427 186.963 42.6C186.683 43.0573 186.272 43.4213 185.731 43.692C185.189 43.9627 184.55 44.098 183.813 44.098ZM190.984 34.172V44H188.59V34.172H190.984Z"
              fill="#1877F2"
            />
          </svg>
        </NavLink>
        <div className={`navbar__menu ${isOpen ? "navbar__menu--open" : ""}`}>
          <ul className="navbar__list">
            <li className="navbar__item">
              <NavLink
                to="/"
                className="navbar__link"
                onClick={() => setIsOpen(false)}
              >
                Asosiy
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/news"
                className="navbar__link"
                onClick={() => setIsOpen(false)}
              >
                Kun Yangiliklari
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/about"
                className="navbar__link"
                onClick={() => setIsOpen(false)}
              >
                Biz Haqimizda
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                to="/portfolio"
                className="navbar__link"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="navbar__item">
              <a
                href="/#contact"
                className="navbar__btn"
                onClick={() => setIsOpen(false)}
              >
                Bog’lanish
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`navbar__burger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Navigatsiyani almashtirish"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                fill="#1877f2"
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              />
            </svg>
          ) : (
            <>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
              <span className="burger__line"></span>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
