"use client";
import React, { useEffect } from "react";
import Header from "./header/Header";
import Send from "./send/Send";
import useFetch from "@/app/hook/useFetch";
import Dependency from "./dependency/Dependency";
import Response from "./response/Response";
import useApiStore from "@/app/store/useApiStore";

export default function Checker() {
  // const { sendRequest, data, loading , success} = useFetch();
  const { data, loading, success, sendRequest } = useApiStore();
  const handleRequest = ({ url, method }) => {
    sendRequest(url, method);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className={"min-h-175 w-[55%] rounded-[14px] border border-border"}>
      <Header />
      <Send onSend={handleRequest} loading={loading} />
      <Dependency />
      <Response loading={loading} data={data} success={success}/>
    </div>
  );
}
