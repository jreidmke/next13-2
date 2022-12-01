"use client";

import React from "react";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";
import MessageComponent from "./MessageComponent";

export default function MessageList() {
    const {
        data: messages,
        error,
        mutate,
    } = useSWR(`/api/getMessages`, fetcher);
    return (
        <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
            {messages?.map((m) => (
                <MessageComponent key={m.id} message={m} />
            ))}
        </div>
    );
}
