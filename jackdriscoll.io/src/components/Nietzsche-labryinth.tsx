import React from 'react';

const NietzscheQuote: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-4 text-left flex flex-col gap-2 text-sm mt-8 text-charcoal">
      <p>
        "The most intelligent men, like the strongest, find their happiness where others would only find disaster: in the labryinth, in being hard with themselves and with others, in effort; their delight is in self-mastery; in them ascetism becomes second nature, a neccessity, an instinct. They regard a difficult task as a privilege; it is to them a recreation to play with burdens that would crush all others."
      </p>
      <p>
        - Friedrich Nietzsche
      </p>
      <p>
        Yea sometimes I think about that when I'm debugging.
      </p>
    </div>
  );
};

export default NietzscheQuote;