import React, { useState } from 'react';

import './index.less';

interface IProp {
    title: string;
}

export default function HookExample(props: IProp) {
    const [count, setCount] = useState(0);

    return (
        <div className="hook-example">
            <div>Hook Example</div>
            <p className="count-number">
                In {props.title} page, You clicked <span>{count}</span> times
            </p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click me
            </button>
        </div>
    );
}
