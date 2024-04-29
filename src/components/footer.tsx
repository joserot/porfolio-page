"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function Footer() {
  const sendEmail = () => window.open("mailto:jose.rotchen14@gmail.com");

  return (
    <footer
      className="
            flex
            flex-col
            items-center
            justify-center     
            "
    >
      <div
        className=" 
            w-11/12
            max-w-3xl
            flex
            flex-col
            items-start
            justify-start
            gap-5
            py-5
            md:py-10
           
            "
      >
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-xl md:text-2xl font-semibold text-primary">
            Email
          </h2>
          <FontAwesomeIcon
            className="text-primary w-6 h-auto"
            icon={faEnvelope}
          />
        </div>
        <div className="w-full flex gap-3">
          <Input className="" value={"jose.rotchen14@gmail.com"} disabled />
          <Button
            onClick={sendEmail}
            className="flex gap-2 items-center font-bold"
          >
            Enviar un email
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </div>
      </div>
    </footer>
  );
}
