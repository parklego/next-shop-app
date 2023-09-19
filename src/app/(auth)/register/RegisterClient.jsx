"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader/Loader";
import styles from "../login/Auth.module.scss";
import LogoPath from "@/assets/colorful.svg";
import Image from "next/image";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import Divider from "@/components/divider/Divider";
import Link from "next/link";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";

function RegisterClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const registerUser = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("비밀번호가 일치하지 않습니다.");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);

        setIsLoading(false);

        toast.success("회원가입 성공");
        router.push("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} priority alt="logo" />
          </h1>

          <form onSubmit={registerUser} className={styles.form}>
            <Input
              email
              icon="letter"
              id="email"
              name="email"
              label="이메일"
              placeholder="아이디(이메일)"
              className={styles.control}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호"
              className={styles.control}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              password
              icon="lock"
              id="confirmPassword"
              name="confirmPassword"
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              className={styles.control}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className={styles.buttonGroup}>
              <Button type="submit" width="100%">
                회원가입
              </Button>
              <Divider />
              <Button width="100%" secondary>
                <Link href="/login">로그인</Link>
              </Button>
              <Divider />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default RegisterClient;
