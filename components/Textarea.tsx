import React from "react";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  (props, ref) => {
    return <textarea ref={ref} {...props} />;
  }
);

Textarea.displayName = "Textarea";
export default Textarea;