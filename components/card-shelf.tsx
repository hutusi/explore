"use client";

import React from "react";
import { useState } from "react";
import { Card, CardHeader, Image, Pagination } from "@nextui-org/react";

import { contentsConfig, ContentsItemsConfig } from "@/config/contents";

export interface Props {
  heading: string;
}

export const CardShelf = (props: Props) => {
  let contents: ContentsItemsConfig = contentsConfig.items.reverse();
  if (props.heading != "all") {
    contents = contents.filter((item) => item.category == props.heading);
  }

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(contents.length / contentsConfig.paginate);

  return (
    <div>
      <div className="grid max-w-[900px] grid-cols-12 grid-rows-2 gap-2 px-8">
        {contents
          .slice(
            (page - 1) * contentsConfig.paginate,
            page * contentsConfig.paginate,
          )
          .map((item, index) => (
            <Card
              className="col-span-12 h-[300px] sm:col-span-4"
              key={index}
              isPressable
              onPress={() => window.open(item.url, "_blank")}
            >
              <CardHeader className="absolute top-1 z-10 flex-col !items-start bg-gray-800/50">
                <p className="text-tiny font-bold uppercase text-white/60">
                  {item.source}
                </p>
                <h4 className="text-large font-medium text-white">
                  {item.title}
                </h4>
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
      <div className="mt-10 content-center">
        <Pagination
          total={totalPages}
          initialPage={1}
          className="self-center"
          onChange={(p: number) => setPage(p)}
        />
      </div>
    </div>
  );
};
