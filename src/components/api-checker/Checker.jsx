"use client";
import React, { useEffect } from "react";
import Header from "./header/Header";
import Send from "./send/Send";
import useFetch from "@/app/hook/useFetch";
import Dependency from "./tabs/Dependency";

export default function Checker() {
  const { sendRequest, data, loading} = useFetch();
  const handleRequest = ({ url, method }) => {
    sendRequest(url, method);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className={"h-175 w-[55%] rounded-[14px] border border-border"}>
      <Header />
      <Send onSend={handleRequest} loading={loading} />
      <Dependency />
    </div>
  );
}
