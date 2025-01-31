import { sendContactForm } from '@/lib/api';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactCard = ({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message ) {
      toast.error('Please fill in all fields.');
      return;
    }

    try {
      await sendContactForm(form);
      toast.success('Message sent successfully!');
      setForm({ name: '', email: '',  subject: '' ,message: ''}); 
     setTimeout(()=>{
      setIsOpen(false)
     },1500)
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800/90 lg:bg-opacity-70 text-white p-6 rounded-2xl shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <div className="bg-green-500 size-2.5 rounded-full relative mb-3">
            <div className="bg-green-500 absolute animate-ping-large inset-0 rounded-full"></div>
          </div>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input type="text" name="name" className="input-wrap" placeholder="Your Name" value={form.name} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="email" name="email" className="input-wrap" placeholder="Your Email" value={form.email} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
            <input type="text" name="subject" className="input-wrap" placeholder="Subject" value={form.subject} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
            <textarea rows={4} name="message" className="input-wrap" placeholder="Your Message" value={form.message} onChange={handleChange}></textarea>
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={() => setIsOpen(false)} className="px-5 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
              Close
            </button>
            <button type="submit" className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable theme="light" />
    </div>
  );
};

export default ContactCard;
