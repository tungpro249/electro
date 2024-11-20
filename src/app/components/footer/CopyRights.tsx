import AmericanExpressIcon from "@/app/components/icon/cardIcon/AmericanExpressIcon";
import VisaIcon from "@/app/components/icon/cardIcon/VisaIcon";
import PayPalIcon from "@/app/components/icon/cardIcon/PayPalIcon";
import DinersClubIcon from "@/app/components/icon/cardIcon/DinersClubIcon";
import DiscoverIcon from "@/app/components/icon/cardIcon/DiscoverIcon";
import MastercardIcon from "../icon/cardIcon/MasterCardIcon";

const Copyrights = () => {
  return (
    <div className="flex justify-between p-4 px-20 bg-gray-200">
      <p>
        &copy; Copyrights <strong>Đoàn Thanh Tùng</strong>. All Rights Reserved
      </p>
      <div className="flex gap-2">
        <VisaIcon />
        <MastercardIcon />
        <AmericanExpressIcon />
        <PayPalIcon />
        <DinersClubIcon />
        <DiscoverIcon />
      </div>
    </div>
  );
};

export default Copyrights;
