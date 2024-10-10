import React from 'react';
"use client";

import { Footer } from "flowbite-react";
import { BsGithub, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const CustomFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-between font-exo">
        <Footer.Copyright by="Food Paradise™" year={2024} />
        <Footer.LinkGroup row>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
        </Footer.LinkGroup>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="https://www.youtube.com/" icon={BsYoutube} />
          <Footer.Icon href="https://www.instagram.com/" icon={BsInstagram} />
          <Footer.Icon href="https://x.com/" icon={BsTwitter} />
          <Footer.Icon href="https://github.com/" icon={BsGithub} />
        </div>
      </div>
    </Footer>
  );
};

export default CustomFooter;
