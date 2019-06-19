import React from '../libs/react.development';

export default function Suspense(props) {
  return (
    <React.Timeout ms={props.maxDuration}>
      {didExpire => (didExpire ? props.placeholder : props.children)}
    </React.Timeout>
  );
}
