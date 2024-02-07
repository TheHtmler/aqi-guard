import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "@/components/ExploreContainer";
import "./index.css";

const Device: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Device</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Device</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Device page" />
      </IonContent>
    </IonPage>
  );
};

export default Device;
