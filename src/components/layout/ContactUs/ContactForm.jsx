import { paperclip } from 'assets/icons';

export default function ContactForm() {
  return (
    <form className="bg-[#ECF9EF] flex justify-center mt-20 mb-5 pb-14 pt-14 font-serif">
      <div className="md:w-96 w-72">
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-lg md:text-xl">
            First Name
          </label>
          <input type="text" className="rounded-lg border-[rgba(37, 55, 63, 0.3)]" />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-lg md:text-xl">
            Last Name
          </label>
          <input type="text" className="rounded-lg border-[rgba(37, 55, 63, 0.3)]" />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-lg md:text-xl">
            Email Address
          </label>
          <input type="email" name="" id="" className="rounded-lg border-[rgba(37, 55, 63, 0.3)]" />
        </div>

        <div className="flex flex-col mb-5">
          <label htmlFor="" className="text-lg md:text-xl">
            Subject
          </label>
          <input type="text" className="rounded-lg border-[rgba(37, 55, 63, 0.3)]" />
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
            className="rounded-lg border-[rgba(37, 55, 63, 0.3)] placeholder:text-right"
          ></textarea>
        </div>

        <button className="flex rounded-lg border border-[#39B755] px-4 py-2">
          <img src={paperclip} alt="paperclip" />
          <span className="ml-3 text-[#39B755]"> Attach File</span>
        </button>
      </div>
    </form>
  );
}
