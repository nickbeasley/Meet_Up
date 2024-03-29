import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from "recharts";

const EventGenre = ({ events }) => {
  const [eventGenreData, setEventGenreData] = useState([]);

  const colors = ["#336BFF", "#FF4933", "#5BBE03", "#000000", "#FF3393"];

  useEffect(() => {
    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];
    const getData = () => {
      const data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setEventGenreData(() => getData());
  }, [events]);

  return (
    <ResponsiveContainer height={400}>
      <PieChart>
        <Legend verticalAlign="top" height={36} />
        <Pie
          data={eventGenreData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
        >
          {eventGenreData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
