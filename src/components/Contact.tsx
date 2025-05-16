
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-cargoon-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cargoon-blue">Contact Us</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            Reach out to us for inquiries about our services or to get a custom quote for your logistics needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cargoon-blue">Get In Touch</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input id="name" placeholder="John Doe" className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="w-full" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="How can we help?" className="w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Tell us about your logistics needs..." className="w-full min-h-[150px]" />
              </div>
              <Button type="submit" className="bg-cargoon-orange hover:bg-cargoon-orange/90 text-white w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cargoon-blue">Contact Information</h3>
            <div className="grid grid-cols-1 gap-6 mb-8">
              <Card>
                <CardContent className="flex items-start p-6">
                  <MapPin className="text-cargoon-orange h-6 w-6 mt-0.5 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Our Main Office</h4>
                    <p className="text-gray-600">123 Logistics Avenue, Suite 500, New York, NY 10001</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start p-6">
                  <Phone className="text-cargoon-orange h-6 w-6 mt-0.5 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start p-6">
                  <Mail className="text-cargoon-orange h-6 w-6 mt-0.5 mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-600">info@cargoonlogistics.com</p>
                    <p className="text-gray-600">support@cargoonlogistics.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
