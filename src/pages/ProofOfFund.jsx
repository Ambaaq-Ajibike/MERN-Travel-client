const ProofOfFund = () => {
    const bgImg = "images/bg_jmg1.jpg";
  return (
    <div className="bg-gray-100 pb-10">
      {/* First Section */}
      <div className="relative bg-cover bg-center bg-no-repeat" style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg})`}}>
        <div className="container mx-auto py-20 px-6 flex justify-between">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold text-white">
              GET PROOF OF FUNDS IN NIGERIA
            </h1>
            <p className="text-lg text-white mt-4">
              We would disburse into your account in 24-48 hours. We are fast,
              reliable, and require less documentation. We can fund accounts
              with more than 50 million Naira to both new and existing accounts.
            </p>
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
              How It Works
            </button>
          </div>

          <div className="bg-gray-400 bg-opacity-50 p-6 rounded-md shadow-md max-w-sm ml-auto">
            <form>
            <h1  className="block text-white font-bold mb-2 text-xl"> How Much Do You Need?</h1>
            <div className="flex space-x-4">
                <div className="mb-4 w-1/2">
                  <label
                    htmlFor="amount"
                    className="block text-white font-bold mb-2"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    id="amount"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="e.g: 10m"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label
                    htmlFor="howLong"
                    className="block text-white font-bold mb-2"
                  >
                    How Long?
                  </label>
                  <input
                    type="text"
                    id="howLong"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="eg: 30 days"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex space-x-4">
                <div className="mb-4 w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-white font-bold mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-white font-bold mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">
          How The Proof Of Funds Works
        </h2>
        <p className="text-2xl text-gray-400 text-center mb-0">
          The proof of fund service works seemlessly in four  in four (4) simple steps
        </p>
        <p className="text-2xl text-gray-400 text-center mb-8">
        that you can ever imagine.
        </p>
        <div className="flex justify-around">
          {[
            {
              title: 'Easy Application',
              description:
                'Our application is simple. Apply online using the application form or call one of our hotlines.',
            },
            {
              title: 'Instant Approval',
              description:
                'You have nothing to worry about approval. We review and approve your request instantly.',
            },
            {
              title: 'Get Your Cash',
              description:
                'Your cash is deposited into your account within 24-48 business hours after KYC is completed.',
            },
            {
              title: 'Easy Renewals',
              description:
                'Your renewal is the easiest. No long term contracts. Renew only when you need it.',
            },
          ].map((step, index) => (
            <div key={index} className="text-center max-w-xs flex items-center justify-between flex-col">
              <div className="text-green-500 text-6xl font-bold mb-4 rounded-full w-24 h-24 border-green-700 border-solid border-2 flex justify-center items-center">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600 text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProofOfFund;
