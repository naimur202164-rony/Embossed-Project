import React from "react";
import { useForm } from "react-hook-form";
import { BsHeadset } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
const QuestionAnswer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="pt-8 mb-5">
      <h3 className="font-medium text-xl mb-3">
        Question about this product (3)
      </h3>
      <div className="divide-y divide-gray-200 space-y-5">
        <div className="space-y-3 pt-3">
          <div className="flex items-center">
            <FaRegUser />
            <div className="ml-8">
              <p className="font-medium">Any discount?</p>
              <p className="text-xs pt-1">Dr.Saifuzzaman - 27 Oct 2021</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsHeadset />
            <div className="ml-8">
              <p className="font-medium">There is no discount sir</p>
              <p className="text-xs pt-1">Store Admin - 27 Oct 2021</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-3">
          <div className="flex items-center">
            <FaRegUser />
            <div className="ml-8">
              <p className="font-medium">Any discount?</p>
              <p className="text-xs pt-1">Dr.Saifuzzaman - 27 Oct 2021</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsHeadset />
            <div className="ml-8">
              <p className="font-medium">There is no discount sir</p>
              <p className="text-xs pt-1">Store Admin - 27 Oct 2021</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-3">
          <div className="flex items-center">
            <FaRegUser />
            <div className="ml-8">
              <p className="font-medium">Any discount?</p>
              <p className="text-xs pt-1">Dr.Saifuzzaman - 27 Oct 2021</p>
            </div>
          </div>
          <div className="flex items-center ">
            <BsHeadset />
            <div className="ml-8">
              <p className="font-medium">There is no discount sir</p>
              <p className="text-xs pt-1">Store Admin - 27 Oct 2021</p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              type="message"
              rows="5"
              className="w-full"
              placeholder="type your question"
              {...register("description", { required: true })}
            />
            {errors.description && <span>This field is required</span>}
            <br/>
            <input type="submit" className="border border-gray-500 px-6 py-2.5 text-white bg-primary hover:bg-transparent hover:text-primary font-medium rounded-md cursor-pointer" value="Ask Question" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
