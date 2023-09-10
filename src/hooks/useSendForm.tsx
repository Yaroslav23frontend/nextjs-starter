import { SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
export default function useSendForm(url: string, reset: () => void) {
  const [formError, setFormError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFormError(false);
      setSuccess(false);
    }, 3000);
  }, [success, formError]);
  const onSubmit: SubmitHandler<object> = async (data) => {
    setLoading(true);
    const cookieData = getCookie(url);
    const counter = cookieData ? Number(cookieData as unknown as number) : 0;
    if (counter < 5) {
      await axios
        .post(url, data)
        .then(() => {
          setFormError(false);
          setSuccess(true);
          sessionStorage.setItem(url, JSON.stringify({ sucess: true }));
          setCookie(url, counter + 1);
          setCounter(counter + 1);
          reset();
        })
        .catch((err) => {
          console.log(err);
          setFormError(true);
          setErrorMessage("Server error");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setFormError(true);
      setErrorMessage(
        "You have exceeded the submission limit. Please try again later."
      );
      setLoading(false);
      reset();
    }
  };

  return {
    formError,
    success,
    loading,
    onSubmit,
    setLoading,
    setFormError,
    setSuccess,
    setCounter,
    counter,
    setErrorMessage,
    errorMessage,
  };
}
