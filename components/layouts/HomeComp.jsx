import React from "react";
import Tab from "../ui/Tab";
import Button from "../ui/Button";

const HomeComp = () => {
  return (
    <>
      <Tab />
      <div className="flex justify-center items-center mt-8">
        <div className="flex flex-col  items-center">
          <h3 className="text-xl md:text-2xl font-semibold ">
            Trigent Brand Guidelines
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Checkout brand guidelines for more details
          </p>
          <Button
            label={"Explore our Brand Guideline"}
            isPrimary={true}
            href={"/brand-guidelines"}
            disabled={false}
          />
        </div>
      </div>
    </>
  );
};

export default HomeComp;
