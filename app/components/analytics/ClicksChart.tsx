"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartConfig = {
  clicks: {
    label: "Clicks",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export type ChartData = {
    date: number,
    clicks: number
};
type ClicksChartProps = {
    title: string,
    chartData: ChartData[]
};

export function ClicksChart({ title, chartData }: ClicksChartProps) {
  const [totalClicks, setTotalClicks] = useState(0);
  
  useEffect(() => {
    const tc = chartData.reduce((sum, item) => sum + item.clicks, 0);
    setTotalClicks(tc);
  }, [chartData]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle>{totalClicks}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <div className="w-full h-73.75">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart accessibilityLayer data={chartData} barCategoryGap="20%" barGap={4}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={5}
                  axisLine={false}
                  tickFormatter={(value) =>
                    new Date(value).toLocaleTimeString()
                  }
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={true}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="clicks" fill="var(--chart-1)" radius={8} maxBarSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
