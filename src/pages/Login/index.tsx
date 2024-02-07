import {
  IonButton,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";
import "./index.css";
import { login } from "@/api/login";

interface IProps {
  onSuccess: () => void;
}

const Login = (props: IProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [present] = useIonToast();

  const loginHandler = async () => {
    if (!username || !password) {
      present({
        message: "Please enter your account and password",
        position: "top",
        color: "danger",
        duration: 2000,
      });
      return;
    }
    try {
      const loginRes = await login({ username, password });
      if (loginRes?.token) {
        localStorage.setItem("token", loginRes.token);
        localStorage.setItem("userInfo", JSON.stringify(loginRes));
        props.onSuccess();
      }
    } catch (error) {
      present({
        message: "Login failed, please try again later.",
        position: "top",
        color: "danger",
        duration: 2000,
      });
    }
  };

  return (
    <IonPage>
      <div className="login-wrapper">
        <div className="logo">AQI Guard</div>
        <div className="login-form">
          <IonList>
            <IonItem>
              <IonInput
                value={username}
                label="Account"
                label-placement="floating"
                placeholder="Please enter your account"
                clearInput={true}
                onIonInput={(e: any) => setUsername(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonInput
                value={password}
                label="Password"
                label-placement="floating"
                type="password"
                placeholder="Please enter your password"
                clearInput={true}
                onIonInput={(e: any) => setPassword(e.target.value)}
              ></IonInput>
            </IonItem>
            <IonButton
              className="login-btn"
              expand="block"
              onClick={loginHandler}
            >
              Login
            </IonButton>
          </IonList>
        </div>
      </div>
    </IonPage>
  );
};

export default Login;
