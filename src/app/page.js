"use client";
import Image from "next/image";
import { Input } from "./components/Input";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button } from "./components/Button";
import { useState } from "react";
import { Step1 } from "./components/Step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
export default function Home() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const Stepcount = [Step1, Step2, Step3][count];
  return (
    <Stepcount
      onclick={() => {
        setCount(count + 1);
      }}
    />
  );
}
