import './LogoCloud.css';

const logos = [
    {
        src: "https://nyks.nic.in/assets/images/Nyks-logo1.png",
        alt: "nyks"
    },
    {
        src: "https://nyks.nic.in/assets/images/Nyks-logo1.png",
        alt: "nyks"
    },
    {
        src: "https://nyks.nic.in/assets/images/Nyks-logo1.png",
        alt: "nyks"
    },
    {
        src: "https://nyks.nic.in/assets/images/Nyks-logo1.png",
        alt: "nyks"
    },
    {
        src: "https://nyks.nic.in/assets/images/Nyks-logo1.png",
        alt: "nyks"
    },
    {
        src: "https://nyks.nic.in/assets/images/Nyks-logo1.png",
        alt: "nyks"
    },
]

export default function LogoCloud() {
  return (
      <div className="bg-white py-24 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                  
              </h2>
              
              <div className="mt-10">
                  <div className="logos-scroller">
                      <div className="logos-track">
                        {logos.map((logo)=>(
                            <img
                            key={logo.alt}
                            className="logo"
                            src={logo.src}
                            alt={logo.alt}
                           
                        />
                        ))}
                             
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
