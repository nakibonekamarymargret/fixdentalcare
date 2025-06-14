import { Card, CardContent } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jessica M.",
      image: "/bg1.jpg",
      title: "Teeth Whitening",
      review:
        "Dr. Patel did an amazing job with my teeth whitening. I’ve never felt so confident about my smile!",
      stars: 5,
    },
    {
      id: 2,
      name: "Michael B.",
      image: "/bg2.jpg",
      title: "Dental Implants",
      review:
        "After my dental implant procedure, I can eat, talk, and smile with confidence. Highly recommended!",
      stars: 5,
    },
    {
      id: 3,
      name: "Emily R.",
      image: "/bg3.jpg",
      title: "Root Canal",
      review:
        "The team made my root canal experience so comfortable. I was nervous at first but now relieved!",
      stars: 5,
    },
  ];

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {" "}
            Testimonials
          </h1>
          <hr className="border-t border-black/60 w-full mx-auto mt-2" />
          <nav className="text-sm text-gray-500 mb-4 mt-4">
            <ol className="inline-flex items-center space-x-1">
              <li>
                <a href="/" className="hover:underline text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">›</span>
              </li>
              <li className="text-gray-700 font-medium">Testimonials</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="text-center mb-12">
      
          <p className="mt-2 text-gray-600">
            What our happy clients are saying
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-shadow border"
            >
              <CardContent className="p-0">
                <div className="flex mb-3">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 w-4 h-4 mr-1" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-5">
                  {testimonial.review}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover border mr-3"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
