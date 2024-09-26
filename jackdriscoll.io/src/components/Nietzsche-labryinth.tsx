import React from 'react';
import { Link } from 'react-router-dom';

const NietzscheQuote: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-4 text-left flex flex-col gap-2 text-sm mt-8 text-charcoal">
      <p>
        "The most intelligent men, like the strongest, find their happiness where others would only find disaster: in the labryinth, in being hard with themselves and with others, in effort; their delight is in self-mastery; in them ascetism becomes second nature, a neccessity, an instinct. They regard a difficult task as a privilege; it is to them a recreation to play with burdens that would crush all others."
      </p>
      <p className="text-right ">
        - Friedrich Nietzsche
      </p>
      <p className="mt-12">
        Yeah. Sometimes I think about that when I'm debugging. In the labyrinth baby.
      </p>
      <div className="flex justify-center items-center mt-12">
      <Link to="/ideas">
        <button className="text-charcoal px-4 py-2 rounded-md shadow-lg underline decoration-accent font-medium hover:text-accent cursor-pointer">
          {`<-`} Back to Ideas
        </button>
      </Link>
    </div>
    </div>

  );
};

export default NietzscheQuote;