import * as React from 'react';
import { Spinner } from "flowbite-react";

const Loading = (props:String) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
    <div className="text-center">
    <Spinner aria-label="Center-aligned spinner example" size="xl" />
    <span className="pl-3">{props.text}...</span>
    </div>
    </div>
    );
};

export default Loading;
