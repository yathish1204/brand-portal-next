import HomeComp from "@/components/layouts/HomeComp";
import Button from "@/components/ui/Button";
import Tab from "@/components/ui/Tab";
import UploadModal from "@/components/ui/UploadModal";

export default function Home() {
  return (
    <>
      <UploadModal />
      <HomeComp />
    </>
  );
}
