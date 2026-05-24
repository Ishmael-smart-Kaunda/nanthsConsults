import {
  RiFacebookBoxFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

import { NavLink, Link } from "react-router-dom";
import { VscArrowSmallRight } from "react-icons/vsc";

import logo from "../assets/images/logo/nanth-logo.jpeg";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111111] overflow-hidden">

      <div
        className="
          max-w-[1600px]
          mx-auto
          px-6
          py-16
          md:px-12
          lg:px-24
          lg:py-24
        "
      >

        {/* Main Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-[1.1fr_0.8fr_1fr]
            gap-12
            pb-16
            border-b
            border-white/10
          "
        >

          {/* Brand Column */}
          <div className="flex flex-col justify-between gap-8">

            <div>

              <img
                className="
                  w-24
                  h-24
                  object-cover
                  rounded-2xl
                  mb-8
                "
                src={logo}
                alt="NaNth Consults Logo"
              />

              <h2
                className="
                  text-3xl
                  md:text-4xl
                  font-bold
                  leading-[120%]
                  text-white
                  max-w-md
                "
              >
                Strategic Support for Growing Organizations.
              </h2>

            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">

              <Link
                to="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <RiFacebookBoxFill size={24} color="white" />
              </Link>

              <Link
                to="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <RiLinkedinBoxFill size={24} color="white" />
              </Link>

              <Link
                to="#"
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                  transition-all
                  duration-300
                "
              >
                <RiInstagramFill size={24} color="white" />
              </Link>

            </div>

          </div>

          {/* Navigation */}
          <div>

            <p
              className="
                uppercase
                tracking-[0.2em]
                text-sm
                font-semibold
                text-gray-400
                mb-6
              "
            >
              Navigation
            </p>

            <div className="flex flex-col gap-4">

              <NavLink
                to="services"
                className="
                  text-white
                  text-lg
                  hover:text-amber-400
                  transition-colors
                  duration-300
                  w-fit
                "
              >
                Services
              </NavLink>

              <NavLink
                to="about"
                className="
                  text-white
                  text-lg
                  hover:text-amber-400
                  transition-colors
                  duration-300
                  w-fit
                "
              >
                About
              </NavLink>

              <NavLink
                to="blog"
                className="
                  text-white
                  text-lg
                  hover:text-amber-400
                  transition-colors
                  duration-300
                  w-fit
                "
              >
                Insights
              </NavLink>

              <NavLink
                to="contact"
                className="
                  text-white
                  text-lg
                  hover:text-amber-400
                  transition-colors
                  duration-300
                  w-fit
                "
              >
                Contact
              </NavLink>

            </div>

          </div>

          {/* Newsletter */}
          <div>

            <p
              className="
                uppercase
                tracking-[0.2em]
                text-sm
                font-semibold
                text-gray-400
                mb-6
              "
            >
              Stay Updated
            </p>

            <h3
              className="
                text-2xl
                font-semibold
                text-white
                leading-[140%]
                mb-6
              "
            >
              Receive the latest insights on workforce management,
              organizational growth, and HR best practices.
            </h3>

            {/* Input */}
            <div
              className="
                flex
                items-center
                bg-white/5
                border
                border-white/10
                rounded-2xl
                overflow-hidden
                mb-4
              "
            >

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1
                  bg-transparent
                  px-5
                  py-4
                  text-white
                  placeholder:text-gray-400
                  outline-none
                "
              />

              <button
                className="
                  bg-amber-700
                  hover:bg-amber-600
                  transition-all
                  duration-300
                  px-5
                  py-4
                  cursor-pointer
                "
              >
                <VscArrowSmallRight
                  size={24}
                  color="white"
                />
              </button>

            </div>

            <small className="text-gray-400 leading-6">
              By subscribing, you agree to receive updates,
              insights, and organizational support resources
              from NaNth Consults.
            </small>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row gap-4 items-center justify-between">

          <small className="text-gray-500">
            © 2026 NaNth Consults. All Rights Reserved.
          </small>

          <small className="text-gray-500">
            Designed & Developed by CoreStack.
          </small>

        </div>

      </div>

    </footer>
  );
}