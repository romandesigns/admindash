"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { data } from "./utils/data";

export const Charts = () => {
  return (
    <div className="py-4 bg-neutral-900 rounded-md mt-8 grid grid-cols-[auto, 1fr] grid-rows-[1fr]">
      <h2 className="my-4 p-4 px-8 ">Weekly Chart</h2>
      <div className="h-[450px] px-8 flex items-center">
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 10,
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 13 }} />
            <YAxis tick={{ fontSize: 13 }} />
            <Tooltip contentStyle={{ background: "#111111", border: "none" }} />
            <Area
              type="basis"
              dataKey="visit"
              stackId="1"
              stroke="#e6c64c"
              fill="#e6c64c"
            />
            <Area
              type="basis"
              dataKey="clicks"
              stackId="1"
              stroke="#4ccce6"
              fill="#4ccce6"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
