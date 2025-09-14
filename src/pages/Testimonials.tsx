import TestimonialCard from "../components/TestimonialCard";
import { testimonials, type Testimonial } from "../data/testimonials";

const Testimonials = () => {
  

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
          {testimonials.map((testimonial: Testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
