import React from 'react'
import { LoaderComponent } from './Loader.styles';

interface LoaderProps {
  className?: string;
}

export function Loader({className}: LoaderProps) {
  return (
    <LoaderComponent className={className}/>
  );
}
