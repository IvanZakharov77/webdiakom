import React, { useEffect, useState } from 'react';

const NameOfTheSite = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const phrase = '/WeB DIAKOM';

    const interval = setInterval(() => {
      if (text.length === phrase.length) {
        clearInterval(interval);
      } else {
        const nextChar = phrase[text.length];
        setText((prevText) => prevText + nextChar);
      }
    }, 200);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <div className="code-effect">
      <h1>
        {text.split('').map((char, index) => (
          <span key={index} className="code-char">
            {char}
          </span>
        ))}
        _
      </h1>
    </div>
  );
};

export default NameOfTheSite;
