"use client";
import ButtonBase from "@/app/ui/customize/button";
import InputBase from "@/app/ui/customize/input";
import { Col, Divider, Row } from "antd";
import React from "react";
import "./style.css";
import Link from "next/link";
const RegisterPage = () => {
  return (
    <div className="container mx-auto p-6">
      <Row gutter={[16, 16]}>
        <Col span={11} className="p-6">
          <h1 className="text-3xl font-bold">Create New Account</h1>
          <Divider className="my-2 bg-yellow-400" />
          <p className="text-lg color-gray-600 my-4">Create your own Account</p>
          <form>
            <div className="mb-3">
              <p className="font-bold my-2">First Name*</p>
              <InputBase required />
            </div>
            <div className="mb-3 my-2">
              <p className="font-bold">Last Name*</p>
              <InputBase required />
            </div>
            <div className="mb-3 my-2">
              <p className="font-bold">Email*</p>
              <InputBase required />
            </div>
            <div className="mb-3 my-2">
              <p className="font-bold">Password*</p>
              <InputBase required />
            </div>
            <ButtonBase onClick={() => {}}>Register</ButtonBase>
          </form>
          <div style={{ marginTop: "20px" }}>
            <p>Sign up today and you'll be able to:</p>
            <ul>
              <li>✔️ Speed your way through the checkout</li>
              <li>✔️ Track your orders easily</li>
              <li>✔️ Keep a record of all your purchases</li>
            </ul>
          </div>
        </Col>
        <Col span={2}>
          <div className="divider-vertical"></div>
        </Col>
        <Col span={11} className="p-6">
          <h1 className="text-3xl bold">Login</h1>
          <Divider className="my-2 bg-yellow-400" />
          <p>Welcome back! Have an account</p>
          <Link href="/account/login">
            <ButtonBase onClick={() => {}}>Login</ButtonBase>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
