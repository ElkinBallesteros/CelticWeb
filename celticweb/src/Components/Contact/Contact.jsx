function Contact () {
    return (
      <section className="py-16  bg-gradient-to-r 
                from-ligth-gray from-5% via-main-gray via-45% to-main-dark-gray to-50%
                text-white ">
        <div className="mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg text-gray-700"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg text-gray-700"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg text-gray-700"
            />
            <button className="w-full bg-white  py-2 rounded-lg font-bold">
              Submit
            </button>
          </form>
        </div>
      </section>
    );
  };

  export {Contact}