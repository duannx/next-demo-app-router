'use client'

import moment from "moment";
import { useEffect, useState } from "react";

export default function TimeAgo({ time }: { time: number }) {
  const [timeAgo, setTimeAgo] = useState('some time ago');
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(moment(time).fromNow());
    }, 1000);
    return () => clearInterval(interval);
  });
  return <h3>{timeAgo}</h3>;
}
