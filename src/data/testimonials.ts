export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Johnson',
    title: 'Product Manager',
    company: 'TechCorp',
    quote: 'Working with this developer was an outstanding experience. Their ability to translate our vision into a functional product exceeded our expectations. They delivered on time and their attention to detail was impressive.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Michael Chen',
    title: 'CTO',
    company: 'StartupX',
    quote: 'I\'ve worked with many developers over the years, but few have demonstrated the technical expertise and problem-solving abilities that I\'ve seen here. They quickly became an invaluable part of our team.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'Emma Davis',
    title: 'Creative Director',
    company: 'DesignHub',
    quote: 'An exceptional developer who combines technical skill with a great eye for design. They understood our brand vision and created a website that perfectly represents our company while delivering a seamless user experience.',
    avatar: 'https://images.pexels.com/photos/773371/pexels-photo-773371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    name: 'James Wilson',
    title: 'Founder',
    company: 'EcoSolutions',
    quote: 'The developer\'s work transformed our online presence and helped us reach a wider audience. Their expertise in responsive design and performance optimization made a significant impact on our conversion rates.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];