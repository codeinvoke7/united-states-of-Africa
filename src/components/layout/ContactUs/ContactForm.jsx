import { paperclip } from 'assets/icons';

export default function ContactForm() {
  return (
    <form className="bg-[#ECF9EF] flex justify-center mt-20 mb-5 pb-14 pt-14 font-serif">
      <div className="md:w-96 w-72">
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-lg md:text-xl">
            First Name
          </label>
          <input type="text" required className="rounded-lg border-[rgba(37, 55, 63, 0.3)]" />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-lg md:text-xl">
            Last Name
          </label>
          <input type="text" required className="rounded-lg border-[rgba(37, 55, 63, 0.3)]" />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-lg md:text-xl">
            Email Address
          </label>
          <input
            type="email"
            name=""
            id=""
            required
            className="rounded-lg border-[rgba(37, 55, 63, 0.3)]"
          />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-lg md:text-xl">
            Subject
          </label>
          <input type="text" required className="rounded-lg border-[rgba(37, 55, 63, 0.3)]" />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-lg md:text-xl">
            Message
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            placeholder="Max. 5000 words"
            required
            className="rounded-lg border-[rgba(37, 55, 63, 0.3)] placeholder:text-right"
          ></textarea>
        </div>

        <input
          type="file"
          name=""
          id=""
          className=" text-[#39B755] rounded-lg focus:border focus:border-[#39B755] active:border-[#39B755]"
        />

        <button className="flex rounded-lg border border-[#39B755] px-4 py-2 mt-3">
          <img src={paperclip} alt="paperclip" />
          <span className="ml-3 text-[#39B755]"> Attach File</span>
        </button>

        <div className="flex items-center justify-center mt-14">
          <button className="bg-[#07AA3D] text-[#FFF] text-sm py-4 px-6 rounded-full">
            Get In Touch
          </button>
        </div>
      </div>
    </form>
  );
}
