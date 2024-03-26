"use client";

import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

import { contentsConfig } from "@/config/contents";
const contents = contentsConfig.items;

export const CardShelf = () => {
  return (
    <div className="grid max-w-[900px] grid-cols-12 grid-rows-2 gap-2 px-8">
      {contents.map((item, index) => (
        <Card
          className="col-span-12 h-[300px] sm:col-span-4"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardHeader className="absolute top-1 z-10 flex-col !items-start bg-gray-800/50">
            <p className="text-tiny font-bold uppercase text-white/60">
              {item.source}
            </p>
            <h4 className="text-large font-medium text-white">{item.title}</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt={item.title}
            className="z-0 h-full w-full object-cover"
            src={item.image}
          />
        </Card>
      ))}
    </div>
  );
};
