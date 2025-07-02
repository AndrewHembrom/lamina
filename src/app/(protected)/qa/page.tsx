"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

const QAPage = () => {
    const { user } = useUser();
    return <div>QA Page</div>;
};

export default QAPage;
