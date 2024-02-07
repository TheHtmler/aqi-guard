import { IonIcon, IonItem, IonLabel, IonList, IonPage } from "@ionic/react";
import "./index.css";
import {
  helpCircleOutline,
  lockClosedOutline,
  logOutOutline,
  notificationsOutline,
  personCircleOutline,
} from "ionicons/icons";

interface UserInfo {
  name: string;
  username: string;
}

const Setting: React.FC = () => {
  const userInfo: UserInfo = JSON.parse(
    localStorage.getItem("userInfo") || "{}"
  );
  console.log(userInfo, "==userInfo==");

  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <IonPage>
      <div className="setting-wrapper">
        <div className="profile-container">
          <div className="avatar">
            <img src="/public/images/avatar.jpg" alt="" />
          </div>
          <div className="name">
            {userInfo?.name} | {userInfo?.username}
          </div>
        </div>
        <div className="setting-list-container">
          <IonList>
            <IonItem button>
              <IonIcon slot="start" icon={personCircleOutline}></IonIcon>
              <IonLabel>Profile</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={notificationsOutline}></IonIcon>
              <IonLabel>Notifications</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={lockClosedOutline}></IonIcon>
              <IonLabel>Privacy</IonLabel>
            </IonItem>
            <IonItem button>
              <IonIcon slot="start" icon={helpCircleOutline}></IonIcon>
              <IonLabel>Help</IonLabel>
            </IonItem>
            <IonItem button onClick={logoutHandler}>
              <IonIcon slot="start" icon={logOutOutline}></IonIcon>
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </IonList>
        </div>
      </div>
    </IonPage>
  );
};

export default Setting;
