// src/data/testimonials.ts (or directly in your component)

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientTitle: string; // e.g., "Teeth Whitening", "Dental Implants"
  rating: number; // 1-5 stars
  avatarSrc: string; // URL to the client's avatar image
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Dr. Nimrod did an amazing job with my teeth whitening. I've never felt so confident about my smile!",
    clientName: "Jessica Mukasa.",
    clientTitle: "Teeth Whitening",
    rating: 5,
    avatarSrc:
      "", // Replace with actual image URL
  },
  {
    id: "2",
    quote:
      "After my dental implant procedure, I can eat, talk, and smile with confidence. Highly recommended!",
    clientName: "Michael Bukirwa.",
    clientTitle: "Dental Implants",
    rating: 5,
    avatarSrc:
""  },
  {
    id: "3",
    quote:
      "The team made my root canal experience so comfortable. I was nervous at first but now relieved!",
    clientName: "Whitney Babirye",
    clientTitle: "Root Canal",
    rating: 5,
    avatarSrc:
""  },
  // Add more testimonials as needed
];
