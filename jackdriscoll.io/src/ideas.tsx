import React from 'react';
import { Link } from 'react-router-dom';

const Ideas: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-4 text-left flex flex-col gap-2 text-sm mt-8 text-charcoal">
        <p> 
        I wanted to share some ideas that ring true to me and have helped me. Some are my own, most are quotes and things I've adapted from other people. 
        </p>
        <p>
        Subject to change!
        </p>
        <h1 className="text-lg font-semibold italic"> General Thoughts </h1>
        <ul className="list-none pl-0">
          <li className="mb-2 flex">
            <span className="mr-2 flex-shrink-0">-</span>
            <span>Update your priors</span>
          </li>
          <li className="mb-2 flex">
            <span className="mr-2 flex-shrink-0">-</span>
            <span>You are who you surround yourself with</span>
          </li>
          <li className="mb-2 flex">
            <span className="mr-2 flex-shrink-0">-</span>
            <span>We do better work when we are working in person (mostly)</span>
          </li>
          <li className="mb-0 flex">
            <span className="mr-2 flex-shrink-0">-</span>
            <span className="line-through">Visibility culture is dumb</span>
          </li>
          <li className="mb-2 flex">
            <span className="mr-2 flex-shrink-0">-</span>
            <span>*Visibility culture has its place in certain settings</span>
          </li>
          <li className="mb-2 flex">
            <span className="mr-2 flex-shrink-0">-</span>
            <span>I know its complicated, try to explain it to me simply</span>
          </li>
          <li className="mb-2 flex">
            <span className="mr-2 flex-shrink-0">-</span>
            <Link to="/nietzsche-quote" className="underline decoration-accent font-medium hover:text-accent cursor-pointer">
              An inspiring quote to hype you up
            </Link>
          </li>
        </ul>
        <h1 className="text-lg font-semibold italic"> Programming Thoughts </h1>
    </div>
  );
};

export default Ideas;
