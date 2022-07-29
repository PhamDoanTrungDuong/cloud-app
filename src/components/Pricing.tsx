// @ts-nocheck
import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing: React.FC = () => {
  return (
    <div name='pricing' className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>

      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">
            The right price for your research
          </h3>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            neque labore, ipsum culpa saepe placeat repudiandae fugiat ad ullam.
            Nam?
          </p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="bg-white text-slate-900 hover:scale-105 duration-300 m-4 p-8 rounded-2xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Standard
            </span>
            <div>
              <p className="text-6xl font-bold py-4 ">
                $49<span className="text-xl text-slate-600">/mo</span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-2xl relative">
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <button className="my-5 py-4 w-full">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 hover:scale-105 duration-300 m-4 p-8 rounded-2xl shadow-2xl relative">
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">
              Premium
            </span>
            <div>
              <p className="text-6xl font-bold py-4 ">
                $99<span className="text-xl text-slate-600">/mo</span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-2xl relative">
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <p className="flex py-4">
                <CheckIcon className="w-7 mr-5 text-green-600" />
                Lorem ipsum dolor sit.
              </p>
              <button className="my-5 py-4 w-full">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
